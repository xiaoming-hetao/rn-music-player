import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { styles } from './Welcome.style'

const Welcome = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>网易云音乐</Text>
    </View>
  )
}

export default Welcome
