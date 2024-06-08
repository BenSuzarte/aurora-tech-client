import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/Forms/login";
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
              <LoginForm/>
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