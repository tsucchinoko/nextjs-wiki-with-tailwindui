import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 't-t-wiki',
  apiKey: process.env.NEXT_PUBLIC_CMS_API_KEY || '',
})