/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Vexis API
 * API for VexisApp
 * OpenAPI spec version: 1.0
 */
import type { AgreementResponseDto } from './agreementResponseDto'
import type { ProfessionDto } from './professionDto'

export interface ProviderProfileResponseDto {
  readonly agreements: readonly AgreementResponseDto[]
  readonly avatarUrl: string
  readonly cpf: string
  readonly email: string
  readonly fullName: string
  readonly id: number
  readonly phone: string
  readonly professions: readonly ProfessionDto[]
  readonly role: string
}
