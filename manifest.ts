import { lazy } from 'react'
import type { ModuleConfig } from 'shared'

export default {
  name: 'API Endpoint Explorer',
  icon: 'mynaui:api',
  routes: {
    '/': lazy(() => import('@'))
  },
  category: 'Information'
} satisfies ModuleConfig
