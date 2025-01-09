'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/components/form'
import { Input } from '@/ui/components/input'
import React from 'react'
import { FormTitle } from '../_components/form-title'
import { MoveLeftIcon } from 'lucide-react'
import NextLink from 'next/link'
import { authControllerSocialRegisterPatient } from '@/lib/http/routetracker/auth/auth'
import { StatefulButton } from '@/ui/components/stateful-button'
import { HttpStatus } from '@/lib/http/constants'
import { FIREBASE_ID_TOKEN } from '../_constants/firebase'
import { useRouter } from 'next/navigation'
import { useToast } from '@/ui/hooks/use-toast'

const registerPatientSchema = z.object({
  fullName: z.string().min(1, { message: 'Nome completo é obrigatório.' }),
  cpf: z.string().min(11, { message: 'CPF inválido.' }),
  phone: z.string().min(10, { message: 'Telefone inválido.' }),
})

type RegisterPatientSchema = z.infer<typeof registerPatientSchema>

export default function RegisterPatientForm() {
  const form = useForm<RegisterPatientSchema>({
    resolver: zodResolver(registerPatientSchema),
    defaultValues: {
      fullName: '',
      cpf: '',
      phone: '',
    },
  })

  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = async (data: RegisterPatientSchema) => {
    setLoading(true)
    const firebaseIdToken = localStorage.getItem(FIREBASE_ID_TOKEN)

    if (!firebaseIdToken) {
      router.replace('/')
    }

    const response = await authControllerSocialRegisterPatient(
      {
        ...data,
        firebaseIdToken: firebaseIdToken as string,
      },
      {
        credentials: 'include',
      },
    )

    if (response.status != HttpStatus.CREATED) {
      setLoading(false)
      setSuccess(false)
      return toast({
        title: 'Autenticação falhou',
        description: (
          <pre>
            <code>{JSON.stringify(response.data)}</code>
          </pre>
        ),
      })
    }

    setLoading(false)
    setSuccess(true)
    setTimeout(() => router.replace('/profile'), 1 * 1000)
    setTimeout(() => setSuccess(false), 10 * 1000)
  }

  return (
    <Form {...form}>
      <NextLink
        className="p-4 flex gap-2 items-center hover:underline"
        href={'/patient'}
      >
        <MoveLeftIcon size={20} />
        <p>Sou profissional</p>
      </NextLink>
      <form
        className="w-96 flex p-6 rounded-lg border drop-shadow-sm flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormTitle>Registro de paciente</FormTitle>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu CPF" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <StatefulButton
          loading={loading}
          success={success}
          type="submit"
          className="btn btn-primary"
        >
          Registrar
        </StatefulButton>
      </form>
    </Form>
  )
}
