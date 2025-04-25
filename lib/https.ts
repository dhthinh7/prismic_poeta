/* eslint-disable @typescript-eslint/no-explicit-any */
type CustomOptions = Omit<RequestInit, 'method'> & {
  baseUrl?: string
}

type TMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

type TStatus = 'success' | 'error'

type EntityErrorPayload = {
  message: string
  errors: {
    field: string
    message: string
  }[]
}

const ENTITY_ERROR_STATUS = 422
// const AUTHENTICATION_ERROR_STATUS = 401;

class HttpError extends Error {
  status: number
  data: Record<string, any>

  constructor(status: number, data: Record<string, any>) {
    super()
    this.status = status
    this.data = data
  }
}

class EntityError extends HttpError {
  constructor(data: EntityErrorPayload) {
    super(ENTITY_ERROR_STATUS, data)
  }
}

export class https {
  // private isClient(): boolean {
  //   return typeof window !== 'undefined'
  // }

  // private buildHeader(options?: CustomOptions): Record<string, string> {
  //   const headers: Record<string, string> = options?.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }

  //   if (this.isClient()) {
  //     const sessionToken = localStorage.getItem('sessionToken');
  //     if (sessionToken) {
  //       headers.Authorization = `Bearer ${sessionToken}`;
  //     }
  //   }

  //   return {
  //     ...headers,
  //     ...(options?.headers ?? {}),
  //   } as never
  // }

  private buildUrl(url: string, baseUrl?: string): string {
    const apiUrl = baseUrl ? baseUrl : process.env.NEXT_PUBLIC_API_ENDPOINT
    const fullUrl = url.startsWith('/') ? `${apiUrl}${url}` : `${apiUrl}/${url}`

    return fullUrl
  }

  private async request<Response>(
    method: TMethod,
    url: string,
    options?: CustomOptions
  ): Promise<{ status: TStatus; data: Response | null; error?: string }> {
    const body =
      options?.body instanceof FormData ? options.body : options?.body ? JSON.stringify(options.body) : undefined

    // const headers = this.buildHeader(options)
    const fullUrl = this.buildUrl(url, options?.baseUrl)

    const res = await fetch(fullUrl, {
      ...options,
      method,
      body
      // headers
    })

    const data: Response = await res.json()

    if (!res.ok) {
      if (res.status === ENTITY_ERROR_STATUS) {
        throw new EntityError(data as EntityErrorPayload)
      }

      // if (res.status === AUTHENTICATION_ERROR_STATUS) {
      //   await this.handleAuthenticationError(options, headers);
      // }

      // throw new HttpError(res.status, data);

      const errors = new EntityError(data as EntityErrorPayload)

      return {
        status: 'error',
        data: null,
        error: errors.message
      }
    }

    return {
      status: 'success',
      data
    }
  }

  protected get<Response>(
    url: string,
    query?: object,
    options?: Omit<CustomOptions, 'body'>
  ): Promise<{ status: TStatus; data: Response | null; error?: string }> {
    let queryUrl = url
    if (query) {
      const queryString = new URLSearchParams(
        Object.entries(query).reduce(
          (acc, [key, value]) => {
            if (value !== undefined && value !== null) {
              acc[key] = String(value)
            }
            return acc
          },
          {} as Record<string, string>
        )
      ).toString()

      queryUrl = `${url}?${queryString}`
    }

    return this.request<Response>('GET', queryUrl, {
      ...options
    })
  }

  protected post<Response>(
    url: string,
    body?: any,
    options?: Omit<CustomOptions, 'body'>
  ): Promise<{ status: TStatus; data: Response | null; error?: string }> {
    return this.request<Response>('POST', url, {
      ...options,
      body
    })
  }

  protected put<Response>(
    url: string,
    body?: any,
    options?: Omit<CustomOptions, 'body'>
  ): Promise<{ status: TStatus; data: Response | null; error?: string }> {
    return this.request<Response>('PUT', url, {
      ...options,
      body
    })
  }

  protected delete<Response>(
    url: string,
    options?: Omit<CustomOptions, 'body'>
  ): Promise<{ status: TStatus; data: Response | null; error?: string }> {
    return this.request<Response>('DELETE', url, options)
  }
}
