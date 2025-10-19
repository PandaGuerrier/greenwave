import { Link } from '@inertiajs/react'

import { Button } from '#ui/components/button'
import useSettings from '#home/ui/hooks/use_settings'

export default function HeroSection() {
  const settings = useSettings()
  return (
    <section className="overflow-hidden py-32 w-screen">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute border-primary left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            >
              <div className="size-full border-primary/50 rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border-primary/30 border"></div>
              </div>
            </div>
            <h2 className="mx-auto mt-8 md:mt-16 max-w-screen-lg text-balance text-center text-3xl font-medium md:text-6xl">
              {settings.name}
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-muted-foreground md:text-lg">
              The future, <span className={"text-primary"}>Your future.</span>
            </p>
            <div className="mx-auto text-xs w-1/3 text-center text-muted-foreground">
              {settings.description}
            </div>
            <div className="flex flex-col items-center justify-center gap-3 pb-12 pt-3">
              <Button size="lg" asChild>
                <Link href="/login">Discover our solutions</Link>
              </Button>

            </div>
          </div>
      </div>
    </section>
  )
}
