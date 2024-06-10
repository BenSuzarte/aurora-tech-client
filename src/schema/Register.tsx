import * as z from "zod"

export const RegisterCandidatoSchema = z.object({
  email: z.string().email({
    message: "Insira um email válido, por favor!"
  }),
  nome: z.string(),
  senha: z.string().min(8),
  contato: z.string(),
  cpf: z.string(),
  data_nascimento: z.string()
})