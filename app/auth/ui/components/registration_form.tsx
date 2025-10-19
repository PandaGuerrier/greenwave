import React from 'react'
import { Link, useForm } from '@inertiajs/react'

import { cn } from '#ui/lib/utils'
import { Button } from '#ui/components/button'
import { Input } from '#ui/components/input'
import { Label } from '#ui/components/label'

export function RegistrationForm({ className, ...props }: React.ComponentPropsWithoutRef<'form'>) {
  const { data, setData, errors, post } = useForm({
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    post('/sign-up')
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Account creation</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Create an account to manage your projects and settings.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email address</Label>
          <div>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              placeholder="contact@domain.fr"
              className={`${errors?.email ? 'border-red-500' : ''}`}
              required
            />
            <p className="text-[0.8rem] font-medium text-destructive">{errors?.email}</p>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div>
            <Input
              id="password"
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              placeholder="S!ecureP@ssw0rd"
              className={`${errors?.password ? 'border-red-500' : ''}`}
              required
            />
            <p className="text-[0.8rem] font-medium text-destructive">{errors?.password}</p>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="passwordConfirmation">Password confirmation</Label>
          <div>
            <Input
              id="passwordConfirmation"
              type="password"
              value={data.passwordConfirmation}
              onChange={(e) => setData('passwordConfirmation', e.target.value)}
              placeholder="Repeat your password"
              required
            />
            <p className="text-[0.8rem] font-medium text-destructive">
              {errors?.passwordConfirmation}
            </p>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Create my account
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account ?{' '}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  )
}
