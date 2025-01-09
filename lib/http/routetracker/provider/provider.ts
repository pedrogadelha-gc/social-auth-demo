/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Vexis API
 * API for VexisApp
 * OpenAPI spec version: 1.0
 */
import { useQuery } from '@tanstack/react-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import type {
  HealthCouncilResponseDto,
  ProviderControllerSearchParams,
  ProviderResponseDto,
  ProviderTypeResponseDto,
  SearchProviderResponseDto,
  SpecialtyResponseDto,
} from '.././types'

/**
 * @summary Lists the supported provider types
 */
export type providerControllerListProviderTypesResponse = {
  data: ProviderTypeResponseDto[]
  status: number
  headers: Headers
}

export const getProviderControllerListProviderTypesUrl = () => {
  return `http://localhost:3001/provider/types`
}

export const providerControllerListProviderTypes = async (
  options?: RequestInit,
): Promise<providerControllerListProviderTypesResponse> => {
  const res = await fetch(getProviderControllerListProviderTypesUrl(), {
    ...options,
    method: 'GET',
  })
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}

export const getProviderControllerListProviderTypesQueryKey = () => {
  return [`http://localhost:3001/provider/types`] as const
}

export const getProviderControllerListProviderTypesQueryOptions = <
  TData = Awaited<ReturnType<typeof providerControllerListProviderTypes>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerListProviderTypes>>,
    TError,
    TData
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getProviderControllerListProviderTypesQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof providerControllerListProviderTypes>>
  > = ({ signal }) =>
    providerControllerListProviderTypes({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerListProviderTypes>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ProviderControllerListProviderTypesQueryResult = NonNullable<
  Awaited<ReturnType<typeof providerControllerListProviderTypes>>
>
export type ProviderControllerListProviderTypesQueryError = unknown

/**
 * @summary Lists the supported provider types
 */

export function useProviderControllerListProviderTypes<
  TData = Awaited<ReturnType<typeof providerControllerListProviderTypes>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerListProviderTypes>>,
    TError,
    TData
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getProviderControllerListProviderTypesQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Lists the supported health councils
 */
export type providerControllerListHealthCouncilsResponse = {
  data: HealthCouncilResponseDto[]
  status: number
  headers: Headers
}

export const getProviderControllerListHealthCouncilsUrl = () => {
  return `http://localhost:3001/provider/health-councils`
}

export const providerControllerListHealthCouncils = async (
  options?: RequestInit,
): Promise<providerControllerListHealthCouncilsResponse> => {
  const res = await fetch(getProviderControllerListHealthCouncilsUrl(), {
    ...options,
    method: 'GET',
  })
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}

export const getProviderControllerListHealthCouncilsQueryKey = () => {
  return [`http://localhost:3001/provider/health-councils`] as const
}

export const getProviderControllerListHealthCouncilsQueryOptions = <
  TData = Awaited<ReturnType<typeof providerControllerListHealthCouncils>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerListHealthCouncils>>,
    TError,
    TData
  >
  fetch?: RequestInit
}) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getProviderControllerListHealthCouncilsQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof providerControllerListHealthCouncils>>
  > = ({ signal }) =>
    providerControllerListHealthCouncils({ signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerListHealthCouncils>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ProviderControllerListHealthCouncilsQueryResult = NonNullable<
  Awaited<ReturnType<typeof providerControllerListHealthCouncils>>
>
export type ProviderControllerListHealthCouncilsQueryError = unknown

/**
 * @summary Lists the supported health councils
 */

export function useProviderControllerListHealthCouncils<
  TData = Awaited<ReturnType<typeof providerControllerListHealthCouncils>>,
  TError = unknown,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerListHealthCouncils>>,
    TError,
    TData
  >
  fetch?: RequestInit
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getProviderControllerListHealthCouncilsQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Lists the specialties of the provider
 */
export type providerControllerListProviderSpecialtiesResponse = {
  data: SpecialtyResponseDto[]
  status: number
  headers: Headers
}

export const getProviderControllerListProviderSpecialtiesUrl = (
  userId: number,
) => {
  return `http://localhost:3001/provider/${userId}/specialties`
}

export const providerControllerListProviderSpecialties = async (
  userId: number,
  options?: RequestInit,
): Promise<providerControllerListProviderSpecialtiesResponse> => {
  const res = await fetch(
    getProviderControllerListProviderSpecialtiesUrl(userId),
    {
      ...options,
      method: 'GET',
    },
  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}

export const getProviderControllerListProviderSpecialtiesQueryKey = (
  userId: number,
) => {
  return [`http://localhost:3001/provider/${userId}/specialties`] as const
}

export const getProviderControllerListProviderSpecialtiesQueryOptions = <
  TData = Awaited<ReturnType<typeof providerControllerListProviderSpecialties>>,
  TError = unknown,
>(
  userId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof providerControllerListProviderSpecialties>>,
      TError,
      TData
    >
    fetch?: RequestInit
  },
) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getProviderControllerListProviderSpecialtiesQueryKey(userId)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof providerControllerListProviderSpecialties>>
  > = ({ signal }) =>
    providerControllerListProviderSpecialties(userId, {
      signal,
      ...fetchOptions,
    })

  return {
    queryKey,
    queryFn,
    enabled: !!userId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerListProviderSpecialties>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ProviderControllerListProviderSpecialtiesQueryResult = NonNullable<
  Awaited<ReturnType<typeof providerControllerListProviderSpecialties>>
>
export type ProviderControllerListProviderSpecialtiesQueryError = unknown

/**
 * @summary Lists the specialties of the provider
 */

export function useProviderControllerListProviderSpecialties<
  TData = Awaited<ReturnType<typeof providerControllerListProviderSpecialties>>,
  TError = unknown,
>(
  userId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof providerControllerListProviderSpecialties>>,
      TError,
      TData
    >
    fetch?: RequestInit
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getProviderControllerListProviderSpecialtiesQueryOptions(
    userId,
    options,
  )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Lists providers for the provided specialty
 */
export type providerControllerListProvidersBySpecialtyResponse = {
  data: ProviderResponseDto[]
  status: number
  headers: Headers
}

export const getProviderControllerListProvidersBySpecialtyUrl = (
  specialtyId: number,
) => {
  return `http://localhost:3001/provider/${specialtyId}`
}

export const providerControllerListProvidersBySpecialty = async (
  specialtyId: number,
  options?: RequestInit,
): Promise<providerControllerListProvidersBySpecialtyResponse> => {
  const res = await fetch(
    getProviderControllerListProvidersBySpecialtyUrl(specialtyId),
    {
      ...options,
      method: 'GET',
    },
  )
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}

export const getProviderControllerListProvidersBySpecialtyQueryKey = (
  specialtyId: number,
) => {
  return [`http://localhost:3001/provider/${specialtyId}`] as const
}

export const getProviderControllerListProvidersBySpecialtyQueryOptions = <
  TData = Awaited<
    ReturnType<typeof providerControllerListProvidersBySpecialty>
  >,
  TError = unknown,
>(
  specialtyId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof providerControllerListProvidersBySpecialty>>,
      TError,
      TData
    >
    fetch?: RequestInit
  },
) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ??
    getProviderControllerListProvidersBySpecialtyQueryKey(specialtyId)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof providerControllerListProvidersBySpecialty>>
  > = ({ signal }) =>
    providerControllerListProvidersBySpecialty(specialtyId, {
      signal,
      ...fetchOptions,
    })

  return {
    queryKey,
    queryFn,
    enabled: !!specialtyId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerListProvidersBySpecialty>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ProviderControllerListProvidersBySpecialtyQueryResult = NonNullable<
  Awaited<ReturnType<typeof providerControllerListProvidersBySpecialty>>
>
export type ProviderControllerListProvidersBySpecialtyQueryError = unknown

/**
 * @summary Lists providers for the provided specialty
 */

export function useProviderControllerListProvidersBySpecialty<
  TData = Awaited<
    ReturnType<typeof providerControllerListProvidersBySpecialty>
  >,
  TError = unknown,
>(
  specialtyId: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof providerControllerListProvidersBySpecialty>>,
      TError,
      TData
    >
    fetch?: RequestInit
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions =
    getProviderControllerListProvidersBySpecialtyQueryOptions(
      specialtyId,
      options,
    )

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Lists the providers with the provided properties
 */
export type providerControllerSearchResponse = {
  data: SearchProviderResponseDto[]
  status: number
  headers: Headers
}

export const getProviderControllerSearchUrl = (
  params?: ProviderControllerSearchParams,
) => {
  const normalizedParams = new URLSearchParams()

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  })

  return normalizedParams.size
    ? `http://localhost:3001/provider?${normalizedParams.toString()}`
    : `http://localhost:3001/provider`
}

export const providerControllerSearch = async (
  params?: ProviderControllerSearchParams,
  options?: RequestInit,
): Promise<providerControllerSearchResponse> => {
  const res = await fetch(getProviderControllerSearchUrl(params), {
    ...options,
    method: 'GET',
  })
  const data = await res.json()

  return { status: res.status, data, headers: res.headers }
}

export const getProviderControllerSearchQueryKey = (
  params?: ProviderControllerSearchParams,
) => {
  return [
    `http://localhost:3001/provider`,
    ...(params ? [params] : []),
  ] as const
}

export const getProviderControllerSearchQueryOptions = <
  TData = Awaited<ReturnType<typeof providerControllerSearch>>,
  TError = unknown,
>(
  params?: ProviderControllerSearchParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof providerControllerSearch>>,
      TError,
      TData
    >
    fetch?: RequestInit
  },
) => {
  const { query: queryOptions, fetch: fetchOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getProviderControllerSearchQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof providerControllerSearch>>
  > = ({ signal }) =>
    providerControllerSearch(params, { signal, ...fetchOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof providerControllerSearch>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type ProviderControllerSearchQueryResult = NonNullable<
  Awaited<ReturnType<typeof providerControllerSearch>>
>
export type ProviderControllerSearchQueryError = unknown

/**
 * @summary Lists the providers with the provided properties
 */

export function useProviderControllerSearch<
  TData = Awaited<ReturnType<typeof providerControllerSearch>>,
  TError = unknown,
>(
  params?: ProviderControllerSearchParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof providerControllerSearch>>,
      TError,
      TData
    >
    fetch?: RequestInit
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getProviderControllerSearchQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
