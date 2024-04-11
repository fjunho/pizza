import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const entrarForm = z.object({
  email: z.string().email(),
})

type EntrarForm = z.infer<typeof entrarForm>

export function Entrar() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EntrarForm>()

  async function handleEntrar(data: EntrarForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autenticacao para seu email.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleEntrar(data),
        },
      })
    } catch {
      toast.error('credenciais invalidas')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/cadastrar">Novo estabelecimento</Link>
        </Button>
        <div className="flex w-[350px] flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar Painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>

        <form onSubmit={handleSubmit(handleEntrar)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Acessar painel
          </Button>
          <Button className="w-full" type="submit">
            Acessar com o GOOGLE
          </Button>
        </form>
      </div>
    </>
  )
}
