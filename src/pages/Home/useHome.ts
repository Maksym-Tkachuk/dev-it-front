import pLimit from 'p-limit'
import { useCallback, useRef, useState } from 'react'

import type { RateLimitedAxiosInstance } from 'axios-rate-limit'

import { getApi } from 'src/configs/axios'

export const useHome = () => {
  const [list, setList] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const api = useRef<RateLimitedAxiosInstance>()

  const sendRequest = async (index: number): Promise<void> => {
    try {
      if (!api.current) return

      const res = await api.current<{ index: number }>(`api?index=${index}`)

      setList(prev => [...prev, res.data.index])
    } catch (error) {
      console.error('Error sending request:', error)
    }
  }

  const sendRequests = useCallback(async (concurrency: number): Promise<void> => {
    if (!concurrency) return

    setIsLoading(true)

    const limit = pLimit(concurrency)
    api.current = getApi(concurrency)
    const requests = Array.from(Array(1000).keys())

    await Promise.all(requests.map(request => limit(() => sendRequest(request))))

    setIsLoading(false)
  }, [])

  return {
    sendRequests,
    list,
    isLoading,
  }
}
