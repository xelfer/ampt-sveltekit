import type { PageLoad } from './$types'

export const load: PageLoad = ({  data }) => {
    let { url } = data
    return {
        url
    }
  }