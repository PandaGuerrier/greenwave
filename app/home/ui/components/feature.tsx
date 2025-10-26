import { Button } from '#ui/components/button'
import { Check } from 'lucide-react'

export default function FeatureSection() {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      subtitle: 'For start',
      features: ['Support par e-mail', '1 projet', '10 API call / months'],
      cta: 'Start',
      featured: false,
      onClick: () => {
        window.location.href = '/sign-up'
      },
    },
    {
      name: 'Pro',
      price: '€5',
      subtitle: 'For professionals',
      features: ['Priority support', '10 projects', '1k API call / months', 'Basic analytics'],
      cta: 'Free for a week !',
      featured: true,
      onClick: () => {
        window.location.href = '/stripe/sub/1'
      },
    },
    {
      name: 'Enterprise',
      price: 'CUSTOM',
      subtitle: 'Custom solution',
      features: ['24/7 support', 'Illimited projects', 'Illimited projects', 'SLA 99.9%'],
      cta: 'Commercial contact',
      featured: false,
      onClick: () => {
        window.location.href = '/contact'
      },
    },
  ]

  return (
    <section className="mt-24" id="features">
      <div className="mb-12 flex flex-col items-center gap-4">
        <h1 className="text-center text-3xl font-semibold lg:text-5xl">Green's experience</h1>
        <p className="text-center text-lg font-medium text-muted-foreground max-w-3xl">
          Choose the plan that best suits your needs and start optimizing your carbon footprint today.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm transition-transform duration-200 ${
                plan.featured ? 'scale-105 ring-2 ring-primary/30' : 'hover:translate-y-[-4px]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>
                  {plan.featured && (
                    <span className="ml-3 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Featured
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.price === 'Free' ? '' : '/mois'}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1 text-primary">
                        <Check size={18} />
                      </span>
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Button
                  className={`w-full py-2 rounded-md font-medium ${
                    plan.featured
                      ? 'bg-primary text-white hover:opacity-95'
                      : 'border border-gray-200 bg-white text-black hover:bg-gray-50'
                  }`}
                  aria-label={`${plan.cta} - ${plan.name}`}
                  onClick={plan.onClick}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
