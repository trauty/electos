import { z } from "zod"

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  street: z.string().min(1),
  plz: z.string().max(10).min(1),
  location: z.string().min(1),
  iban: z.string().max(34),
  blz: z.string().max(8),
  institution: z.string().min(1)
});


export type User = z.infer<typeof userSchema>;