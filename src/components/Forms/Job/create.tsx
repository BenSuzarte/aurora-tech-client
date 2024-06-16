import { useState } from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { JobSchema } from '@/schema/Job';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Tiptap from '@/components/Tiptap';

export const FormCreateJob = () => {
  const [err, setError] = useState('');

  const id = localStorage.getItem('idUsuario');

  if (!id) {
    return
  }

  const form = useForm<z.infer<typeof JobSchema>> ({

    mode: 'onChange',
    resolver: zodResolver(JobSchema),
    defaultValues: {
      idUsuario: id,
      titulo: '',
      descricao: '',
      localidade: '',
      modalidade: '',
      periodo: ''
    }
  })

  async function onSubmitJob(data: z.infer<typeof JobSchema>) {
    try {
      
      const response = await axios.post(`http://localhost:3000/job/create/:${id}`, data)

      if (response.status === 201) {
        window.location.reload();
        setError('Vaga criada com sucesso!')
      }

    } catch (error) {
      console.log(error)
      setError('Ocorreu um erro ao criar sua nova vaga!')
    }


  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitJob)}>
      <FormField 
          control={form.control}
          name = 'titulo'
          render={({ field }) => (
            <FormItem className="mt-2">
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Desenvolvedor Front-End React JR'></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name = 'modalidade'
          render={({ field }) => (
            <FormItem className="mt-2">
              <FormLabel>Modalidade</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Híbrido'></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name = 'periodo'
          render={({ field }) => (
            <FormItem className="mt-2">
              <FormLabel>Período</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Matutino'></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name = 'localidade'
          render={({ field }) => (
            <FormItem className="mt-2">
              <FormLabel>Localidade</FormLabel>
              <FormControl>
                <Input {...field} placeholder='São Paulo - SP'></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name = 'descricao'
          render={({ field }) => (
            <FormItem className="mt-2 h-max">
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Tiptap description={'Descreva sobre a vaga que deseja anunciar'} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>{err}</p>
        <Button className=''>Adicionar</Button>
      </form>
    </Form>
  );
}
