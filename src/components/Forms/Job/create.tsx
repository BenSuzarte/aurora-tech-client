import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { JobSchema } from '@/schema/Job';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Tiptap from '@/components/Tiptap';

export const FormCreateJob = () => {

  const form = useForm<z.infer<typeof JobSchema>> ({
    mode: 'onChange',
    resolver: zodResolver(JobSchema),
    defaultValues: {
      titulo: '',
      descricao: '',
      localidade: '',
      modalidade: '',
      periodo: ''
    }
  })

  function onSubmitJob(data: z.infer<typeof JobSchema>) {
    console.log(data)
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
            <FormItem className="mt-2">
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Tiptap description={'Descreva sobre a vaga que deseja anunciar'} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className=''>Adicionar</Button>
      </form>
    </Form>
  );
}
