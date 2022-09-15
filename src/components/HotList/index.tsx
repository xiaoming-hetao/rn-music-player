import React from 'react'
import { View, Text } from 'react-native'
import { HotListTitle } from './constant'
import { HotSearchResult, HotTopicResult } from '../../services/search'

import { styles } from './HotList.style'

interface Props {
  hotListTitle: HotListTitle
  hotListData: Array<Partial<HotSearchResult & HotTopicResult>>
}

// 热榜
const HotList = (props: Props) => {
  const { hotListTitle, hotListData } = props

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{hotListTitle}</Text>
      </View>
      <View style={styles.hotContent}>
        {hotListData.map((item, index) => (
          <View style={styles.hotItem} key={item.actId || index}>
            <Text
              style={[
                styles.hotItemNumber,
                index < 3 ? styles.top3HotItemNumber : {},
              ]}>
              {index + 1}
            </Text>
            <Text
              style={[
                styles.hotItemText,
                index < 3 ? styles.top3HotItemText : {},
              ]}>
              {/* 热搜榜 */}
              {hotListTitle === HotListTitle.hotSearch
                ? item?.searchWord?.split(' ')[0]
                : null}
              {/* 话题榜 */}
              {hotListTitle === HotListTitle.hotTopic ? item.title : null}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default HotList
