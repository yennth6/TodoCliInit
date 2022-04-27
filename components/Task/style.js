import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10
  },
  textIndex: {
    color: 'white',
    fontWeight: '800'
  },
  even: {
    backgroundColor: '#2d4f87'
  },
  odd: {
    backgroundColor: '#56a3d6'
  },
  index: {
    // backgroundColor: '#56a3d6',
    marginHorizontal: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  todoDetail: {
    width: '80%'
  }
})

export default styles;