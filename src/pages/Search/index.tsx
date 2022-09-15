import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { getKeywordSearch } from '../../services/search'
import { SongsResult } from '../../services/search/data'
import HotList from '../../components/HotList'
import { HotListTitle } from '../../components/HotList/constant'

import BaseTextInput from '../../components/TextInput'

import { styles } from './Search.style'

const Search = ({ route, navigation }: { route: any; navigation: any }) => {
  const [searchResult, setSearchResult] = useState<Array<SongsResult>>([])

  const { hotSearchResult, hotTopicResult } = route.params
  const handleInputChange = async (text: string) => {
    const { result } = await getKeywordSearch(text)
    const { songs } = result
    setSearchResult(songs)
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <Text style={styles.back} onPress={() => navigation.goBack()}>
            返回
          </Text>
        </View>
        <View>
          <BaseTextInput
            placeholder="搜索"
            onChangeText={handleInputChange}
            autoFocus
          />
        </View>
        <View>
          <Text style={styles.searchText}>搜索</Text>
        </View>
      </View>

      {/* 搜索历史 */}
      <View>
        <Text>历史</Text>
      </View>
      {/* 热榜 */}
      <ScrollView>
        <ScrollView horizontal>
          <View style={styles.hotSearch}>
            <HotList
              hotListTitle={HotListTitle.hotSearch}
              hotListData={hotSearchResult}
            />
          </View>
          <View style={styles.hotTopic}>
            <HotList
              hotListTitle={HotListTitle.hotTopic}
              hotListData={hotTopicResult}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search
