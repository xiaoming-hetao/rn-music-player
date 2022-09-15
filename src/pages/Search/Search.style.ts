import { StyleSheet } from 'react-native'
import margin from '../../styles/margin'

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },

  back: {
    fontSize: 16,
  },
  searchText: {
    fontSize: 16,
  },
  hotSearch: {
    marginLeft: margin.bodyMargin,
  },
  hotTopic: {
    marginLeft: margin.bodyMargin,
    marginRight: margin.bodyMargin,
  },
})
