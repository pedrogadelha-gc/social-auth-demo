/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Vexis API
 * API for VexisApp
 * OpenAPI spec version: 1.0
 */
import type { AgreementResponseDto } from './agreementResponseDto'

export interface UserProfileResponseDto {
  readonly agreements: readonly AgreementResponseDto[]
  readonly avatarUrl: string
  readonly cpf: string
  readonly email: string
  readonly fullName: string
  readonly id: number
  readonly phone: string
  readonly role: string
}
