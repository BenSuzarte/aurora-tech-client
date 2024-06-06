import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

import loginImage01 from '@/assets/LoginImage01.svg';

export function SignIn() {
  return (
    <>
      <main className="h-screen flex w-full">
        <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
          <div className="w-full max-w-xl">
            <div className="flex aspect-square bg-background rounded p-8">
              <img src={ loginImage01 } alt="Networking e Comunicação" />
            </div>
          </div>
        </div>
        <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">
                Entre com sua conta
              </CardTitle>
              <CardDescription>
                Utilize seu e-mail e senha ou o LinkedIn para entrar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action="/" method="post">
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" placeholder="examplo@dominio.com" type="email" />
                </div>
                <div className="mt-4">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="senha" placeholder="Digite sua senha" type="password" />
                </div>
                <Button type="submit" className="mt-6 w-full">Entrar</Button>
                <div className="flex items-center gap-6 mt-4">
                  <Separator />
                    <span className="text-xs text-muted-foreground">OU</span>
                  <Separator />
                </div>
                <Button variant="outline" className="mt-6 w-full"> <LinkedInLogoIcon className="mr-2"/> Entrar com o LinkedIn</Button>
              </form>
            </CardContent>
            <CardFooter className="flex-col">
              <p className="text-muted-foreground text-center text-sm">Ao entrar na plataforma você concorda com nossos Termos de Uso e Políticas de Privacidade.</p>
              <p className="text-muted-foreground text-center text-sm mt-4">Não possui uma conta? <a className="text-primary underline"  href="/register">Cadastre-se aqui</a></p>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  )
}