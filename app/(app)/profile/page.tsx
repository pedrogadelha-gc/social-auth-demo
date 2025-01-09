'use client'

import { HttpStatus } from '@/lib/http/constants'
import {
  profileControllerGetProfile,
  profileControllerGetProfileResponse,
} from '@/lib/http/routetracker/profile/profile'
import { LoadingAnimation } from '@/ui/icons/loading'
import React from 'react'

export default function Page() {
  const [profileResponse, setProfileResponse] =
    React.useState<profileControllerGetProfileResponse | null>(null)

  const [error, setError] = React.useState<number | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      const response = await profileControllerGetProfile({
        credentials: 'include',
      })

      console.log(response.data)

      if (response.status == HttpStatus.UNAUTHORIZED) {
        return setError(HttpStatus.UNAUTHORIZED)
      }
      setProfileResponse(response)
      setError(null)
      setLoading(false)
    }

    fetchProfile()
  }, [])

  if (error == HttpStatus.UNAUTHORIZED) {
    return <p>Erro 401 - Unauthorized</p>
  }

  if (loading || !profileResponse) {
    return <LoadingAnimation />
  }

  const profile = profileResponse.data

  return (
    <div className="w-full max-w-lg p-6 rounded-lg border drop-shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Seu perfil</h2>
      <div className="overflow-auto max-h-96 bg-gray-900 text-white rounded-lg p-4">
        <pre className="whitespace-pre-wrap break-words">
          <code>{JSON.stringify(profile, null, 2)}</code>
        </pre>
      </div>
    </div>
  )
}
