"use server";

import { getSession } from "@/actions/session";

export default async function Dashboard() {

    const session = await getSession();

    const createdDate = new Date(session.createdAt).toLocaleDateString("de");
    const updatedDate = new Date(session.updatedAt).toLocaleDateString("de");

    return (
        <div className="w-screen min-h-screen pt-20 p-10">
            <h1 className="font-bold text-4xl mb-4">Kontoübersicht</h1>
            <div className="bg-electos-black-700 h-fit w-fit text-electos-white rounded-xl px-4 py-2">
                {session &&
                    <div>
                        <h2 className="font-semibold text-xl">Kontodaten</h2>
                        <p><span className="font-medium">E-Mail-Adresse: </span>{session.email}</p>
                        <p><span className="font-medium">Vorname: </span>{session.firstName}</p>
                        <p><span className="font-medium">Nachname: </span>{session.lastName}</p>
                        <p><span className="font-medium">IBAN: </span>{session.iban}</p>
                        <p><span className="font-medium">BLZ: </span>{session.blz}</p>
                        <p><span className="font-medium">Insitution: </span>{session.institution}</p>
                        <p><span className="font-medium">Konto erstellt: </span>{createdDate}</p>
                        <p><span className="font-medium">Konto zuletzt aktualisiert: </span>{updatedDate}</p>
                    </div>
                }
            </div>
        </div>
    );
}