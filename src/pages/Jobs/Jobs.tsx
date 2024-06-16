import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FormCreateJob } from "@/components/Forms/Job/create";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GetJobs from "@/components/GetJobs";

const Jobs = () => {

   //const response = await axios.get('http://localhost:3000/jobs');
   //const jobs = response.data;

   //console.log(jobs);

   const [id, setId] = useState(true);
   const [title, setTitle] = useState('Nova Vaga');
   const [subTitle, setSubTitle] = useState('Não possui uma conta?');

   let idUser = localStorage.getItem('idUsuario');

   if (idUser === undefined) {
      setTitle('Entre ou Cadastre-se')
      setSubTitle('Você precisa estar logado para publicar uma vaga.')
      setId(false)
   }

   const navigate = useNavigate();

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
               <div className="mt-5 w-full">
                  <Dialog>
                     <DialogTrigger asChild className="w-full h-15 bg-primary text-white">
                     <Button variant="outline"> <PlusCircledIcon className="mr-2" /> Anuncie uma nova vaga aqui</Button>
                     </DialogTrigger>
                     <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader className="text-center items-center">
                           <DialogTitle>{title}</DialogTitle>
                           <DialogDescription>
                              {subTitle}
                           </DialogDescription>
                           {id && (
                              <div className="flex">
                                 <Button variant="outline"   className="w-full ms-2 hover:bg-primary hover:text-white" onClick={() => navigate('/')}>Entrar</Button>
                                 <Button variant="outline"   className=" w-full ms-2 hover:bg-primary hover:text-white" onClick={() => navigate('/register')}>Cadastrar</Button>
                              </div>
                           )}
                        </DialogHeader>
                        <FormCreateJob/>
                     </DialogContent>
                  </Dialog>
               </div>
            </section>
            <section className="m-10 mt-0">
               <Card>
                  <CardHeader className="text-center">
                     <CardTitle className="text-2xl font-bold tracking-tighter"><h1>Vagas Disponíveis</h1></CardTitle>
                     <CardDescription><p>Encontre as melhores vagas para mulheres no mercado de trabalho</p></CardDescription>
                  </CardHeader>
                  <CardContent>
                     <GetJobs />
                  </CardContent>
               </Card>
            </section>
         </main>
      </>
   );
}

export default Jobs;