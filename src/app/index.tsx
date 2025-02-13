import {View, Text} from "react-native"
import {styles} from './styles'
import Button from '@/src/components/Button/Button'

export default function Index (){
  return(
    <View style={styles.container}>
      <Text>My calculator</Text>
      <View style={styles.containerBtn}>
        <Button label={'1'} onPress={()=>{}}></Button>
        <Button label={'2'} onPress={()=>{}}></Button>
        <Button label={'3'} onPress={()=>{}}></Button>
        <Button label={'='} onPress={()=>{}}></Button>
        <Button label={'+'} onPress={()=>{}}></Button>
      </View>
    </View>
  )
}