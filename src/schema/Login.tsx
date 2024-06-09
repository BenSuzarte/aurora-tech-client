import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Insira um email válido, por favor!"
  }),
  senha: z.string().min(8)
})