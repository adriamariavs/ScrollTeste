import { ScrollView, View} from "react-native";
import { styles } from "./src/styles/Styles";

export default function App(){
  return(
    <View style={styles.container}> 
     <View style={styles.cabeçalho}> </View>
     <ScrollView horizontal={false}>
      <View style={styles.cont}>
      <View style={[styles.body, {backgroundColor: 'red'}]} />
      <View style={[styles.body, {backgroundColor: 'orange'}]} />
      <View style={[styles.body, {backgroundColor: 'yellow'}]} />
      <View style={[styles.body, {backgroundColor: 'green'}]} />
      <View style={[styles.body, {backgroundColor: 'blue'}]} />
      <View style={[styles.body, {backgroundColor: 'purple'}]} />

      </View>
      </ScrollView>
      <View style={styles.rodape}> </View>
    </View>
  )
}
