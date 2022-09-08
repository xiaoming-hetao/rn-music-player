import { request } from '../../utils/request'
import { SearchResult } from './data'
export * from './data.d'

/**
 * 关键词搜索
 */

export async function keywordSearch(
  keyword: string,
): Promise<{ result: SearchResult }> {
  return request(`/search?keywords=${keyword}`, {
    method: 'GET',
  })
}
