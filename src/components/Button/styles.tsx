import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    height: 60,
    width: '22%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    aspectRatio: 1 // Makes buttons square
  },
  label: {
    color: '#fff',
    fontSize:20,
    fontWeight: 700
  },
  operator: {
    color: '#505050',
    fontSize:20,
    fontWeight: 700
  }
})