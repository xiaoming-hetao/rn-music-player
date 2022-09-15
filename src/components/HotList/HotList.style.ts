import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 270,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 20,
  },

  title: {
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  hotContent: {
    paddingTop: 10,
  },
  hotItem: {
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  hotItemNumber: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 5,
    width: 30,
    color: '#7b7b7b',
  },
  top3HotItemNumber: {
    color: '#fc3c3b',
    fontWeight: '900',
  },
  hotItemText: {
    fontSize: 16,
    color: '#323232',
  },
  top3HotItemText: {
    color: '#2c2c2c',
    fontWeight: '900',
  },
})
