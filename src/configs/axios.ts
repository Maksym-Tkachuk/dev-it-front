import axios from 'axios'
import axiosRateLimit from 'axios-rate-limit'

import type { RateLimitedAxiosInstance } from 'axios-rate-limit'

export const getApi = (limit = 10, delay = 1000): RateLimitedAxiosInstance =>
  axiosRateLimit(axios.create({ baseURL: import.meta.env.VITE_API_URL }), {
    maxRequests: limit,
    perMilliseconds: delay,
  })
