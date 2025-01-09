import { Button } from '@/ui/components/button'
import { FormTitle } from '../_components/form-title'
import Link from 'next/link'

export default function SetupPage() {
  return (
    <div className="flex flex-col m-auto gap-4">
      <FormTitle>VexisApp - Social auth demo</FormTitle>
      <div className="flex justify-between">
        <Button asChild>
          <Link href="/patient">Paciente</Link>
        </Button>

        <Button asChild>
          <Link href="/provider">Profissional</Link>
        </Button>
      </div>
    </div>
  )
}
