'use client'

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '@/lib/firebase/app'
import { useToast } from '@/ui/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { StatefulButton } from '@/ui/components/stateful-button'
import { SiGoogle } from 'react-icons/si'

import React from 'react'
import { authControllerSocialLogin } from '@/lib/http/routetracker/auth/auth'
import { FIREBASE_ID_TOKEN } from '../_constants/firebase'

export function SocialLoginButton() {
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const { toast } = useToast()
  const auth = getAuth(app)
  const router = useRouter()

  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const firebaseIdToken = await result.user.getIdToken()

      localStorage.setItem(FIREBASE_ID_TOKEN, firebaseIdToken)

      const socialLoginResponse = await authControllerSocialLogin(
        { firebaseIdToken },
        { credentials: 'include' },
      )

      const userIsRegistered = socialLoginResponse.status == 200

      if (userIsRegistered) {
        setSuccess(true)
        setTimeout(() => {
          router.replace('/profile')
        }, 1000)
        return
      }

      router.replace('/setup')
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        toast({
          title: 'Authentication error',
          description: error.message,
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <StatefulButton
      type="button"
      variant="outline"
      className="w-full"
      loading={loading}
      success={success}
      onClick={handleGoogleLogin}
    >
      <div className="flex items-center justify-center">
        <SiGoogle className="m-2" />
        Continue with Google
      </div>
    </StatefulButton>
  )
}
