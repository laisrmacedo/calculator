import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
    gap: 16,
    justifyContent: 'flex-end',
  },
  keypad:{
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8

  },
  display: {
    // borderColor: 'gray', 
    // borderWidth: 1,
    borderRadius: 10,
    color: '#000',
    fontSize: 20,
    textAlign: 'right',
    padding: 20
  },
  currentNumber: {
    color: 'black', 
    textAlign: 'right',
    fontSize: 70
  },
  previousNumber: {
    color: '#000',
    fontSize: 40,
    textAlign: 'right'
  },
  operator: {
    color: 'red',
    fontSize: 36,
    textAlign: 'right'
  }
})