import _ from 'lodash'
import { RunsPage } from '@/types'
import { queryKey } from './queryKey'

export const queryOptions = {
  queryKey,
  initialPageParam: undefined,
  getNextPageParam: (lastPage: RunsPage) => {
    if (!lastPage.hasNextPage) return null

    return lastPage.lastId
  },
  limit: 10,
}
