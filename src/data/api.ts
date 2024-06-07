import { env } from '@/app/env'

export function api(path: string, init?: RequestInit) {
  const baseURL = env.NEXT_PUBLIC_BASE_URL
  const prefixApi = '/api'
  const url = new URL(`${prefixApi}/${path}`, baseURL)

  return fetch(url, init)
}
