import { useForm } from "react-hook-form"

import axios from "axios"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { LoginSchema } from "@/schema/Login"

import { LinkedInLogoIcon } from "@radix-ui/react-icons"

import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

export const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    const response = await axios.post('http://localhost:3000/login', data)
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
        name="password"
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