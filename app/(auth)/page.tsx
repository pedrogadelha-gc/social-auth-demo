import { FormTitle } from './_components/form-title'
import { SocialLoginButton } from './_components/social-login-button'

export default function AuthPage() {
  return (
    <div className="w-96 flex p-6 rounded-lg border drop-shadow-sm flex-col gap-4">
      <FormTitle>VexisApp - Social auth demo</FormTitle>
      <SocialLoginButton />
    </div>
  )
}
