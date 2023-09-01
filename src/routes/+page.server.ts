import type { PageServerLoad } from './$types'
import { params } from '@ampt/sdk'

export const load: PageServerLoad = () => {
    return {
        url: params("AMPT_URL")
    };
  }