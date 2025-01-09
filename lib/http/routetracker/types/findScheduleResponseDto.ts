/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Vexis API
 * API for VexisApp
 * OpenAPI spec version: 1.0
 */
import type { AppointmentTypeResponseDto } from './appointmentTypeResponseDto'
import type { FindScheduleResponseDtoAvailabilities } from './findScheduleResponseDtoAvailabilities'

export interface FindScheduleResponseDto {
  readonly appointmentInterval: number
  readonly appointmentTypes: readonly AppointmentTypeResponseDto[]
  readonly availabilities: FindScheduleResponseDtoAvailabilities
  readonly createdAt: string
  readonly durationTime: number
  readonly id: number
  readonly specialtyId: number
  readonly updatedAt: string
  readonly userId: number
}
