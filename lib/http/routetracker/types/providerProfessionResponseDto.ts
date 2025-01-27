/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Vexis API
 * API for VexisApp
 * OpenAPI spec version: 1.0
 */
import type { ProviderTypeResponseDto } from './providerTypeResponseDto'
import type { SpecialtyResponseDto } from './specialtyResponseDto'
import type { ProviderProfessionResponseDtoUf } from './providerProfessionResponseDtoUf'

export interface ProviderProfessionResponseDto {
  readonly councilNumber: string
  readonly id: number
  readonly providerType: ProviderTypeResponseDto
  readonly rqe: number
  readonly specialties: readonly SpecialtyResponseDto[]
  readonly uf: ProviderProfessionResponseDtoUf
}
