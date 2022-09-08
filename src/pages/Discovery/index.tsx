import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import BaseTextInput from '../../components/TextInput'
import { keywordSearch } from '../../services/search'
import { SongsResult } from '../../services/search/data'

import { styles } from './Discovery.style'

const Discovery = () => {
  const [searchResult, setSearchResult] = useState<Array<SongsResult>>([])

  const handleInputChange = async (text: string) => {
    const { result } = await keywordSearch(text)
    const { songs } = result
    setSearchResult(songs)
  }

  useEffect(() => {}, [])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BaseTextInput placeholder="搜索" onChangeText={handleInputChange} />

        <View>
          {searchResult.map((item: SongsResult) => (
            <Text>{item.name}</Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Discovery
