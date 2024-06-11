import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FormRegisterCandidato } from "@/components/Forms/Register/candidate";
import { FormRegisterEmpresa } from "@/components/Forms/Register/company";

export function Register() {
  const [selectedUserType, setSelectedUserType] = useState("");

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
                <FormRegisterEmpresa />
              </CardContent>
              <CardFooter className="flex-col">
                <p className="text-muted-foreground text-center text-sm">Ao entrar na plataforma você concorda com nossos Termos de Uso e Políticas de Privacidade.</p>
                <p className="text-muted-foreground text-center text-sm mt-4">Já possui uma conta? <a className="text-primary underline" href="/">Faça o login aqui</a></p>
              </CardFooter>
            </Card>
          </section>
        )}
      </main>
    </>
  )
}
