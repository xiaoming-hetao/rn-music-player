import React, { useState, useEffect } from 'react'
import { View, SafeAreaView } from 'react-native'
import BaseTextInput from '../../components/TextInput'

import { RouteName } from '../../routes'
import {
  getHotSearch,
  getHotTopicSearch,
  HotTopicResult,
  HotSearchResult,
} from '../../services/search'

import { styles } from './Discovery.style'

const Discovery = ({ navigation }: { navigation: any }) => {
  const [hotSearchResult, setHotSearchResult] = useState<
    Array<HotSearchResult>
  >([])
  const [hotTopicResult, setHotTopicResult] = useState<Array<HotTopicResult>>(
    [],
  )

  const handleHotSearch = async () => {
    const { data } = await getHotSearch()
    const { hot } = await getHotTopicSearch()
    setHotSearchResult(data)
    setHotTopicResult(hot)
  }

  useEffect(() => {
    handleHotSearch()
  }, [])

  const handleFocus = () => {
    navigation.navigate(RouteName.search, { hotSearchResult, hotTopicResult })
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BaseTextInput placeholder="搜索" onFocus={handleFocus} />
      </View>
    </SafeAreaView>
  )
}

export default Discovery
