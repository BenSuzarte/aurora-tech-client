import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Label } from "@/components/ui/label";

function truncateText(text: string, maxLength: number) {
   if (text.length <= maxLength) {
      return text;
   }
   
   const truncated = text.substring(0, maxLength);
   const lastSpaceIndex = truncated.lastIndexOf(' ');
   if (lastSpaceIndex === -1) {
      return truncated + '...';
   }
   return truncated.substring(0, lastSpaceIndex) + '...';
}

export function Jobs() {
   const fullJobDescription = `
      Desenvolver e manter aplicações web utilizando tecnologias front-end e back-end.
      Colaborar com a equipe de design para criar interfaces intuitivas e responsivas.
      Implementar e consumir APIs RESTful.
      Participar de revisões de código e contribuir para a melhoria contínua das práticas de desenvolvimento.
      Identificar e solucionar problemas técnicos.
      Contribuir com ideias e soluções inovadoras para os desafios do projeto.

      Requisitos:
      Conhecimentos básicos em HTML, CSS e JavaScript.
      Experiência com frameworks front-end como React, Angular ou Vue.js.
      Familiaridade com linguagens de back-end como Node.js, Python, Ruby ou PHP.
      Entendimento de bancos de dados relacionais e/ou não relacionais.
      Boa comunicação e capacidade de trabalhar em equipe.
      Vontade de aprender e se desenvolver na área de tecnologia.

      Diferenciais:
      Experiência com ferramentas de versionamento de código (ex: Git).
      Conhecimento em metodologias ágeis (Scrum, Kanban).
      Projetos pessoais ou contribuições para projetos open-source.
      Experiência prévia em desenvolvimento de aplicações web, mesmo que acadêmica ou em projetos pessoais.

      Benefícios:
      Salário competitivo.
      Plano de saúde e odontológico.
      Vale-refeição/alimentação.
      Programa de desenvolvimento profissional e mentoria.
      Ambiente de trabalho inclusivo e colaborativo.
      Flexibilidade de horário e possibilidade de trabalho remoto.

      Como se Candidatar:
      Se você se identifica com nossa missão e tem paixão por desenvolvimento web, envie seu currículo e portfólio para vagas@empresaexemplo.com com o assunto "Vaga Desenvolvedora Fullstack Júnior". Estamos ansiosos para conhecer você!
   `;

   return (
      <>
         <main className="flex justify-center p-10 bg-primary-foreground">
         <section className="m-10 mt-0 max-w-xl w-full">
               <Card>
                  <CardHeader className="text-center">
                     <CardTitle className="text-2xl font-bold tracking-tighter">Filtros</CardTitle>
                     <CardDescription><p>Busque vagas específicas para você</p></CardDescription>
                  </CardHeader>
                  <CardContent className="items-center">
                     <div className="flex w-full h-full">
                        <Input id="search" placeholder="Qual vaga você está desejando?" type="text" />
                        <Button className="w-15"><MagnifyingGlassIcon className="m-5"/></Button>
                     </div>
                     <div className="flex">
                        <div className="mt-5 ms-5">
                           <Label className="mb-3 text-center">Qual a modalidade da vaga?</Label>
                           <Select>
                              <SelectTrigger className="w-[180px] p">
                              <SelectValue placeholder="Modalidade" />
                              </SelectTrigger>
                              <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Modalidade</SelectLabel>
                                 <SelectItem value="presencial">Presencial</SelectItem>
                                 <SelectItem value="hibrido">Híbrido</SelectItem>
                                 <SelectItem value="remoto">Remoto</SelectItem>
                              </SelectGroup>
                              </SelectContent>
                           </Select>
                        </div>
                        <div className="mt-5 ms-5">
                           <Label className="mb-3 text-center">Período de trabalho</Label>
                           <Select>
                              <SelectTrigger className="w-[180px] p">
                              <SelectValue placeholder="Período" />
                              </SelectTrigger>
                              <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Modalidade</SelectLabel>
                                 <SelectItem value="integral">Tempo Integral</SelectItem>
                                 <SelectItem value="matutino">Matutino</SelectItem>
                                 <SelectItem value="vespertino">Vespertino</SelectItem>
                                 <SelectItem value="noturno">Noturno</SelectItem>
                              </SelectGroup>
                              </SelectContent>
                           </Select>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </section>
            <section className="m-10 mt-0">
               <Card>
                  <CardHeader className="text-center">
                     <CardTitle className="text-2xl font-bold tracking-tighter"><h1>Vagas Disponíveis</h1></CardTitle>
                     <CardDescription><p>Encontre as melhores vagas para mulheres no mercado de trabalho</p></CardDescription>
                  </CardHeader>
                  <CardContent>
                     <Card className="m-6">
                        <CardHeader>
                           <CardTitle>Desenvolvedora FullStack React | NodeJS Júnior</CardTitle>
                           <CardDescription className="flex"><p className="mr-2">Rocketseat Brasil </p><p> São Paulo - SP</p></CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p>{truncateText(fullJobDescription, 650)}</p>
                           <Button className="mt-4 text-right">Visuzalizar</Button>
                        </CardContent>
                     </Card>
                     <Card className="m-6">
                        <CardHeader>
                           <CardTitle>Desenvolvedora FullStack React | NodeJS Júnior</CardTitle>
                           <CardDescription className="flex"><p className="mr-2">Rocketseat Brasil </p><p> São Paulo - SP</p></CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p>{truncateText(fullJobDescription, 650)}</p>
                           <Button className="mt-4">Visuzalizar</Button>
                        </CardContent>
                     </Card>
                  </CardContent>
               </Card>
            </section>
         </main>
      </>
   );
}
