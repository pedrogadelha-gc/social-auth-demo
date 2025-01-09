import { cn } from '@/ui/lib/utils'

export function FormTitle({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLHeadingElement>) {
  return (
    <p className={cn('text-xl text-center font-bold', className)} {...props}>
      {children}
    </p>
  )
}
