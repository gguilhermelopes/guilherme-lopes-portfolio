"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactPageFormSchema } from "../../../lib/schema";
import Loader from "../UI/Loader";
import toast from "react-hot-toast";

export type Inputs = z.infer<typeof ContactPageFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(ContactPageFormSchema) });

  const submitForm: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.status === 200 && response.ok)
      toast("Mensagem enviada com sucesso!", {
        icon: "✅",
        style: {
          borderRadius: "4px",
          background: "#222",
          color: "#fff",
        },
      });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col gap-4 px-12 py-8 text-black"
    >
      <div className="flex-1 flex flex-col gap-1">
        <input
          className="py-3 px-4 rounded-md outline-primary100 bg-gray-100"
          type="text"
          placeholder="Nome completo"
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <input
          className="py-3 px-4 rounded-md outline-primary100 bg-gray-100"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <textarea
          className="py-3 px-4 rounded-md outline-primary100 bg-gray-100"
          placeholder="Mensagem"
          rows={6}
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        className="flex items-center justify-center bg-primary100 rounded-md py-2 font-bold outline-primary100 disabled:bg-slate-400 disabled:cursor-not-allowed"
        type="submit"
      >
        {isSubmitting ? <Loader /> : "Enviar mensagem"}
      </button>
    </form>
  );
};

export default ContactForm;
