import { useForm } from '@inertiajs/react'
import useUser from '#auth/ui/hooks/use_user'
import { cn } from '#ui/lib/utils'
import { Label } from '#ui/components/label'
import { Input } from '#ui/components/input'
import { Button } from '#ui/components/button'
import { useEffect, useState } from 'react'
import { CircleCheck, LoaderCircle } from 'lucide-react'

export default function ContactSection() {
  const user = useUser()
  const [valid, setValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { data, setData, errors, post } = useForm({
    email: user?.email || '',
    fullName: user?.fullName || '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setLoading(true)

    // attendre 3 secondes avant d'envoyer la requête
    await new Promise((res) => setTimeout(res, 3000))

    await post('/contact', {
      onSuccess: () => {
        setSubmitted(true)
        setData('message', '')
      },
      onError: () => {
        setSubmitted(false)
      },
      onFinish: () => {
        setLoading(false)
      },
      async: true,
    })
  }

  useEffect(() => {
    if (data.fullName.trim() !== '') {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [data])

  return (
    <section className="mt-24 w-2/3 mx-auto" id="features">
      <div className="mb-24 flex flex-col items-center gap-6">
        <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">Contact us</h1>
        <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
          Have questions or need assistance? We're here to help. Reach out to us anytime!
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className={cn('flex flex-col gap-6')}>
          <div className="grid gap-6">
            <div className={"flex gap-4 flex-col md:flex-row w-1/2"}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <div>
                  <Input
                    type="text"
                    placeholder="john.doe@greenwave.fr"
                    className={`${errors?.email ? 'border-red-500' : ''}`}
                    disabled={user && true}
                    value={data.email}
                    onChange={(element) => setData('email', element.target.value)}
                    required
                  />

                  <p className="text-[0.8rem] font-medium text-destructive col-span-4 col-start-3">
                    {errors?.fullName}
                  </p>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <div>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className={`${errors?.fullName ? 'border-red-500' : ''}`}
                    disabled={user && true}
                    value={data.fullName}
                    onChange={(element) => setData('fullName', element.target.value)}
                    required
                  />

                  <p className="text-[0.8rem] font-medium text-destructive col-span-4 col-start-3">
                    {errors?.fullName}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Your message</Label>
              <div>
                <textarea
                  placeholder="I would like to know more about..."
                  className={cn(
                    'w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-32',
                    errors?.message ? 'border-red-500' : ''
                  )}
                  value={data.message}
                  onChange={(element) => setData('message', element.target.value)}
                  required
                ></textarea>

                <p className="text-[0.8rem] font-medium text-destructive col-span-4 col-start-3">
                  {errors?.message}
                </p>
              </div>
            </div>

            <div className={'w-full'}>
              <Button type="submit" className="w-full" disabled={!valid || loading}>
                {submitted ? (
                  <div>
                    <CircleCheck className={"rotate-360 transition-all duration-200"} />
                  </div>
                ) : loading ? (
                  <div>
                    <LoaderCircle className={"animate-spin"} />
                  </div>
                ) : (
                  'Send message'
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
