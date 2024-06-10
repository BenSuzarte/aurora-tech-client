import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { RegisterCandidatoSchema } from "@/schema/Register";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { FormRegisterCandidato } from "@/components/Forms/register";

export function Register() {
  const [selectedUserType, setSelectedUserType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(RegisterCandidatoSchema),
    defaultValues: {
      email: "",
      nome: "",
      senha: "",
      contato: "",
      cpf: "",
      data_nascimento: ""
    }
  })

  const onSubmitCandidato = async (data: z.infer<typeof RegisterCandidatoSchema>) => {
    try {
      console.log(data)

      const response = await axios.post('http://localhost:3000/register', data)
      console.log(response.data)

      if (response.status === 200) {
        navigate('/login')
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
    <>
      <main className="h-screen flex flex-col justify-center items-center w-full">
        <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full">
          <Card>
            <CardHeader className="text-2xl font-bold tracking-tighter">
              Qual o seu tipo de usuário?
            </CardHeader>
            <CardContent className="flex">
              <Button 
                variant="outline" 
                className="w-1/2 ms-2 hover:bg-primary hover:text-white" 
                onClick={() => setSelectedUserType("candidate")}
              >
                Candidato
              </Button>
              <Button 
                variant="outline" 
                className="w-1/2 ms-2 hover:bg-primary hover:text-white" 
                onClick={() => setSelectedUserType("company")}
              >
                Empresa
              </Button>
            </CardContent>
          </Card>
        </section>
        {selectedUserType === "candidate" && (
          <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tighter">
                  Área do Candidato
                </CardTitle>
                <CardDescription>
                  Prencha os campos abaixos para efetuar o cadastro
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormRegisterCandidato />
              </CardContent>
              <CardFooter className="flex-col">
                <p className="text-muted-foreground text-center text-sm">Ao entrar na plataforma você concorda com nossos Termos de Uso e Políticas de Privacidade.</p>
                <p className="text-muted-foreground text-center text-sm mt-4">Já possui uma conta? <a className="text-primary underline" href="/register">Faça o login aqui</a></p>
              </CardFooter>
            </Card>
          </section>
        )}
        {selectedUserType === "company" && (
          <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tighter">
                  Área da Empresa
                </CardTitle>
                <CardDescription>
                  Prencha os campos abaixos para efetuar o cadastro
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action="/register" method="post">
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" placeholder="examplo@dominio.com" type="email" />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="senha">Senha</Label>
                    <Input id="senha" placeholder="Digite sua senha" type="password" />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome" placeholder="Nome completo" type="text" />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="contato">Contato</Label>
                    <Input id="contato" placeholder="(11) 99999-9999" type="tel" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" placeholder="00.000.000/0001-00" type="text" pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})" />
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="sede">Sede</Label>
                    <Input id="sede" placeholder="São Paulo - SP" type="text" />
                  </div>
                  <Button type="submit" className="mt-6 w-full">Cadastrar-se</Button>
                  <div className="flex items-center gap-6 mt-4">
                    <Separator />
                    <span className="text-xs text-muted-foreground">OU</span>
                    <Separator />
                  </div>
                  <Button variant="outline" className="mt-6 w-full">
                    <LinkedInLogoIcon className="mr-2"/> Entrar com o LinkedIn
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex-col">
                <p className="text-muted-foreground text-center text-sm">Ao entrar na plataforma você concorda com nossos Termos de Uso e Políticas de Privacidade.</p>
                <p className="text-muted-foreground text-center text-sm mt-4">Já possui uma conta? <a className="text-primary underline" href="/register">Faça o login aqui</a></p>
              </CardFooter>
            </Card>
          </section>
        )}
      </main>
    </>
  )
}
