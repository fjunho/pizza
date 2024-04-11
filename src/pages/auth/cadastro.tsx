import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const cadastrarForm = z.object({
  nomeRestaurante: z.string(),
  nomeGerente: z.string(),
  fone: z.string(),
  email: z.string().email(),
})

type CadastrarForm = z.infer<typeof cadastrarForm>

export function Cadastrar() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CadastrarForm>()

  async function handleCadastrar(data: CadastrarForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso.', {
        action: {
          label: 'login',
          onClick: () => navigate('/entrar'),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Helmet title="Cadastrar" />

      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/entrar">Fazer Login</Link>
        </Button>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar contra gratis
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>

        <form onSubmit={handleSubmit(handleCadastrar)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nomeRestaurante">Nome do estabelecimento</Label>
            <Input
              id="nomeRestaurante"
              type="text"
              {...register('nomeRestaurante')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nomeGerente">Seu nome</Label>
            <Input
              id="nomeGerente"
              type="nomeGerente"
              {...register('nomeGerente')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fone">Seu celular</Label>
            <Input id="fone" type="fone" {...register('fone')} />
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Finalizar Cadastro
          </Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar você concorda com os nossos servicos e politicas de
            privacidade
          </p>
        </form>
      </div>
    </>
  )
}
