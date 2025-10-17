import React from 'react'
import { Link, useForm } from '@inertiajs/react'

import { cn } from '#ui/lib/utils'
import { Button } from '#ui/components/button'
import { Input } from '#ui/components/input'
import { Label } from '#ui/components/label'
import { toast } from '#ui/hooks/use-toast'

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const { data, setData, errors, post, reset } = useForm({
    email: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    post('/forgot-password', {
      onSuccess: () => {
        reset()

        toast('Email sent', {
          description: 'We have sent the link for password recovery.',
        })
      },
    })
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Forgot your password?</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to receive the recovery link.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <div>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(element) => setData('email', element.target.value)}
              placeholder="user@ufrrj.br"
              required
            />
            <p className="text-[0.8rem] font-medium text-destructive col-span-4 col-start-3">
              {errors?.email}
            </p>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Send
        </Button>
      </div>
      <div className="text-center text-sm">
        Remember your password?{' '}
        <Link href="/login" className="underline underline-offset-4">
          Log in
        </Link>
      </div>
    </form>
  )
}
