import AppLayout from '#common/ui/components/app_layout'
import { Link } from '@inertiajs/react'


export default function Failure() {
  return (
    <>
      <AppLayout layout={'header'} breadcrumbs={[]}>
        <div className="w-screen">
          <div className="flex flex-col justify-center items-center space-y-12 pt-16 min-h-screen">
              <h1 className={"text-4xl font-black flex "}><p className={"animate-spin text-primary"}>O</p>ops...</h1>
              <p>Something went wrong while processing your request.</p>
              <Link href={"/"} className={"text-primary"}>Back to home</Link>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
