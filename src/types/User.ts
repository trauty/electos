import { z } from "zod"

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string(),
  street: z.string(),
  plz: z.string().max(10),
  location: z.string(),
  iban: z.string().max(34),
  blz: z.string().max(8),
  institution: z.string()
});


export type User = z.infer<typeof userSchema>;