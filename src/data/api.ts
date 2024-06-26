import { env } from '@/app/env'

function withDelay<T>(fn: () => Promise<T>, delay: number = 1000): Promise<T> {
  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => setTimeout(() => resolve(fn()), delay))
  } else {
    return fn()
  }
}

export async function api(path: string, init?: RequestInit) {
  const baseURL = env.NEXT_PUBLIC_BASE_URL
  const prefixApi = '/api'
  const url = new URL(`${prefixApi}/${path}`, baseURL)

  return withDelay(() => fetch(url, init), 1000)
}
