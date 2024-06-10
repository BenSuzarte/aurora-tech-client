import { useForm } from "react-hook-form"

import axios, { AxiosError } from "axios"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { LoginSchema } from "@/schema/Login"

import { LinkedInLogoIcon } from "@radix-ui/react-icons"

import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      senha: ""
    }
  })

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      const response = await axios.post('http://localhost:3000/login', data)
      console.log(response.data)

      if (response.status === 200) {
        navigate('/jobs')
      }
    } catch (e) { {
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField 
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
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
          <FormItem className="mt-4">
            <FormLabel>Senha</FormLabel>
            <FormControl>
                <Input {...field} type="password" placeholder="Digite sua senha..."/>
            </FormControl>
          </FormItem>
        )}>
        </FormField>
        <Button className="mt-6 w-full" type="submit">Entrar</Button>
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