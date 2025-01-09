import { CheckIcon } from 'lucide-react'
import { Button, ButtonProps } from './button'
import { LoadingAnimation } from '../icons/loading'

export interface StatefulButtonProps extends ButtonProps {
  success: boolean
  loading: boolean
}

export function StatefulButton({
  success,
  loading,
  children,
  ...props
}: StatefulButtonProps) {
  return (
    <Button disabled={loading || success} {...props}>
      {success ? <CheckIcon /> : loading ? <LoadingAnimation /> : children}
    </Button>
  )
}
