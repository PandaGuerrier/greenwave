import AuthLayout from '#auth/ui/components/layout'
import { FullNameForm } from '#auth/ui/components/full_name_form'

export default function FullNamePage() {
  return (
    <AuthLayout center type={"login"}>
      <FullNameForm />
    </AuthLayout>
  )
}
