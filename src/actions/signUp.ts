import { userSchema } from "@/types";
import { ZodError } from "zod";


export async function signUp(formData: FormData) {
    try {
        userSchema.parse(Object.fromEntries(formData.entries()));

        const res = await fetch("/api/signup", {
           method: "POST",
           body: formData
        });

        if (res.status === 403) {
            return "Ein Konto mit dieser E-Mail-Adresse existiert bereits."
        } else if (!res.ok) {
            return "Überprüfen Sie ihre Angaben."
        }

        return "Konto erfolgreich erstellt."

    } catch (err) {
        if (err instanceof ZodError) {
            return "Überprüfen Sie ihre Angaben."
        }
        return "Serverfehler beim Registrieren.";
    }
}