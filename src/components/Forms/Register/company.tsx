import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RegisterEmpresaSchema } from "@/schema/Register";
import axios, { AxiosError } from "axios";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"

export const FormRegisterEmpresa = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(RegisterEmpresaSchema),
    defaultValues: {
      email: "",
      nome: "",
      senha: "",
      contato: "",
      cnpj: "",
      sede: ""
    }
  })

  const onSubmitEmpresa = async (data: z.infer<typeof RegisterEmpresaSchema>) => {
    try {
      console.log(data)

      const response = await axios.post('http://localhost:3000/register', data)
      console.log(response.data)

      if (response.status === 200) {
        navigate('/')
      }
    } catch (e) { {
      console.log(e)
      
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError;

        if (!axiosError.response) {
          setError('Erro ao se comunicar com o servidor. Tente novamente mais tarde...');
        } else if (axiosError.response.status == 401) {
          setError('Usuário ou senha inválidos!');
        } else {
          setError('Ocorreu um erro inesperado. Tente novamente mais tarde.');
        }
      } else {
        setError('Erro desconhecido. Tente novamente mais tarde...');
      }
    } }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitEmpresa)}>
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormLabel>Email</FormLabel>
            <FormControl>
                <Input {...field} type="email" placeholder="exemplo@dominio.com"/>
            </FormControl>
          </FormItem>
        )}>
        </FormField>
        <FormField
        control={form.control}
        name="senha"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormLabel>Senha</FormLabel>
            <FormControl>
                <Input {...field} type="password" placeholder="Digite sua senha"/>
            </FormControl>
          </FormItem>
        )}>
        </FormField>
        <FormField
        control={form.control}
        name="nome"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormLabel>Nome</FormLabel>
            <FormControl>
                <Input {...field} type="text" placeholder="Nome completo"/>
            </FormControl>
          </FormItem>
        )}>
        </FormField>
        <FormField
        control={form.control}
        name="contato"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormLabel>Contato</FormLabel>
            <FormControl>
                <Input {...field} type="text" placeholder="(71) 99999-9999"/>
            </FormControl>
          </FormItem>
        )}>
        </FormField>
        <FormField
        control={form.control}
        name="cnpj"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormLabel>CNPJ</FormLabel>
            <FormControl>
                <Input {...field} type="text" placeholder="12345678000199"/>
            </FormControl>
          </FormItem>
        )}>
        </FormField>
        <FormField
        control={form.control}
        name="sede"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormLabel>Sede</FormLabel>
            <FormControl>
                <Input {...field} type="text" placeholder="São Paulo - SP"/>
            </FormControl>
          </FormItem>
        )}>
        </FormField>
        <Button className="mt-6 w-full" type='submit'>Cadastrar-se</Button>
        <p className="text-md text-primary">{ error }</p>
        <div className="flex items-center gap-6 mt-4">
          <Separator />
            <span className="text-xs text-muted-foreground">OU</span>
          <Separator />
        </div>
        <Button variant="outline" className="mt-6 w-full"> <LinkedInLogoIcon className="mr-2"/> Entrar com o LinkedIn</Button>
      </form>
    </Form>
  )
}