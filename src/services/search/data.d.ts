interface SongsResult {
  id: string
  name: string
  artists: any[]
  album: any
}

export interface KeywordSearchResult {
  songs: SongsResult[]
}

export interface HotSearchResult {
  searchWord: string
}

export interface HotTopicResult {
  actId: number
  title: string
}
