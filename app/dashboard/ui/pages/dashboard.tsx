import AppLayout from '#common/ui/components/app_layout'

import { Main } from '#common/ui/components/main'
import { Link } from '@inertiajs/react'

export default function Page() {
  return (
    <AppLayout breadcrumbs={[{ label: 'Dashboard' }]} layout={"sidebar"}>
      <Main>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Link href={"/dashboard/rapport"} className="flex-1 p-5 hover:border-primary border duration-200 rounded-xl bg-muted/50">
            <div className={"w-full flex justify-center items-center h-full"}>
              <h1 className={"text-primary text-3xl font-bold p-4"}>
                Website's rapport
              </h1>
            </div>
            <div className={"w-full flex justify-center items-center h-full"}>
              <h1 className={"text-foreground/50 text-center p-4"}>
                Click here to access your website's green wave rapport.
              </h1>
            </div>
          </Link>
        </div>
      </Main>
    </AppLayout>
  )
}
