import AppLayout from '#common/ui/components/app_layout'

import { Main } from '#common/ui/components/main'
import GreenWaveStepper from '#dashboard/components/rapport-stepper'

export default function Rapport() {
  return (
    <AppLayout breadcrumbs={[{ label: 'Dashboard' }]} layout={"sidebar"}>
      <Main>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <GreenWaveStepper />
        </div>
      </Main>
    </AppLayout>
  )
}
