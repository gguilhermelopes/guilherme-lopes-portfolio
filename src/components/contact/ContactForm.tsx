"use client";

import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register } = useForm<Inputs>();
  return (
    <form className="flex flex-col gap-4 px-12 py-8 text-black">
      <input
        className="py-3 px-4 rounded-md outline-primary100"
        type="text"
        placeholder="Nome completo"
        {...register("name", { required: "O nome é necessário" })}
      />
      <input
        className="py-3 px-4 rounded-md outline-primary100"
        type="email"
        placeholder="Email"
        {...register("email", { required: "O email é necessário" })}
      />
      <textarea
        className="py-3 px-4 rounded-md outline-primary100"
        placeholder="Mensagem"
        rows={6}
        {...register("message", { required: "O email é necessário" })}
      />
      <button
        className="bg-primary100 rounded-md py-2 font-bold outline-primary100"
        type="submit"
      >
        Enviar mensagem
      </button>
    </form>
  );
};

export default ContactForm;
