interface SongsResult {
  id: string
  name: string
  artists: any[]
  album: any
}

export interface SearchResult {
  songs: SongsResult[]
}
