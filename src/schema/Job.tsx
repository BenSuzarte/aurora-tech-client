import * as z from "zod"

export const JobSchema = z.object({
  idUsuario: z.string(),
  titulo: z.string(),
  descricao: z.string(),
  localidade: z.string(),
  modalidade: z.string(),
  periodo: z.string()
})