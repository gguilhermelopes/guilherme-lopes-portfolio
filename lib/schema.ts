import { z } from "zod";

export const ContactPageFormSchema = z.object({
  name: z.string().min(1, "Forneça um nome."),
  email: z
    .string()
    .min(1, "Forneça um email.")
    .email("Forneça um email válido."),
  message: z.string().min(1, "A mensagem é obrigatória."),
});
