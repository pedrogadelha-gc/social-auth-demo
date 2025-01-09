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
import NextLink from 'next/link'
import { MoveLeftIcon } from 'lucide-react'
import { useToast } from '@/ui/hooks/use-toast'
import { FIREBASE_ID_TOKEN } from '../_constants/firebase'
import { useRouter } from 'next/navigation'
import { authControllerSocialRegisterProvider } from '@/lib/http/routetracker/auth/auth'
import { SocialRegisterProviderRequestDtoUf } from '@/lib/http/routetracker/types'
import { HttpStatus } from '@/lib/http/constants'
import { StatefulButton } from '@/ui/components/stateful-button'

const registerProviderSchema = z.object({
  fullName: z.string().min(1, { message: 'Nome completo é obrigatório.' }),
  cpf: z.string().min(11, { message: 'CPF inválido.' }),
  phone: z.string().min(10, { message: 'Telefone inválido.' }),
  councilNumber: z
    .string()
    .min(1, { message: 'Número do conselho é obrigatório.' }),
  uf: z.string().min(1, { message: 'UF é obrigatório.' }),
})

type RegisterProviderSchema = z.infer<typeof registerProviderSchema>

export default function RegisterProviderForm() {
  const form = useForm<RegisterProviderSchema>({
    resolver: zodResolver(registerProviderSchema),
    defaultValues: {
      fullName: '',
      cpf: '',
      phone: '',
      councilNumber: '',
    },
  })

  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = async (data: RegisterProviderSchema) => {
    setLoading(true)
    const firebaseIdToken = localStorage.getItem(FIREBASE_ID_TOKEN)

    if (!firebaseIdToken) {
      router.replace('/')
    }

    const response = await authControllerSocialRegisterProvider(
      {
        ...data,
        uf: data.uf as SocialRegisterProviderRequestDtoUf,
        specialties: [1],
        firebaseIdToken: firebaseIdToken as string,
        providerTypeId: 1,
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
        <p>Sou paciente</p>
      </NextLink>
      <form
        className="w-96 flex p-6 rounded-lg border drop-shadow-sm flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormTitle>Registro de Profissional</FormTitle>
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

        <FormField
          control={form.control}
          name="councilNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número do Conselho</FormLabel>
              <FormControl>
                <Input placeholder="Digite o número do conselho" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="uf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UF</FormLabel>
              <FormControl>
                <Input placeholder="Digite a UF" {...field} />
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
