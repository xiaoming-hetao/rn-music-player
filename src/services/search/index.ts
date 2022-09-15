import { request } from '../../utils/request'
import { KeywordSearchResult, HotSearchResult, HotTopicResult } from './data'
export * from './data.d'

/**
 * 关键词搜索
 */

export async function getKeywordSearch(
  keyword: string,
): Promise<{ result: KeywordSearchResult }> {
  return request(`/search?keywords=${keyword}`, {
    method: 'GET',
  })
}

/**
 * 热搜榜
 */

export async function getHotSearch(): Promise<{ data: HotSearchResult[] }> {
  return request('/search/hot/detail', {
    method: 'GET',
  })
}

/**
 * 话题榜
 */

export async function getHotTopicSearch(): Promise<{ hot: HotTopicResult[] }> {
  return request('/hot/topic', {
    method: 'GET',
  })
}
