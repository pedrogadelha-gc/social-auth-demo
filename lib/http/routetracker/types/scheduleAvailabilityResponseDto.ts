/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Vexis API
 * API for VexisApp
 * OpenAPI spec version: 1.0
 */
import type { ScheduleAvailabilitySlotDto } from './scheduleAvailabilitySlotDto'
import type { SpecialtyResponseDto } from './specialtyResponseDto'

export interface ScheduleAvailabilityResponseDto {
  readonly availableSlots: readonly ScheduleAvailabilitySlotDto[]
  readonly providerAvatarUrl: string
  readonly providerId: number
  readonly providerName: string
  readonly scheduleId: number
  readonly specialty: SpecialtyResponseDto
}