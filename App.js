import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Divgrande from './Divgrande';
import Divtemperatura from './Divtemperatura';
import Div3 from './img/Div3';
import Div4 from './img/Div4';
import Name from './name';

export default function App() {
  return (
    <View style={styles.container}>
      <Divgrande/>
      <Divtemperatura/>
      <Div3/>
      <Div4/>
      <Name/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  }
    
  
});
