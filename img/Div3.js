import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Div3(){
    return(
      <View style={styles.viewprincipal}>
    
        <View style={styles.vento}>
           <Text style={styles.wind}> Vento  </Text>
           <Text style={styles.tempwind}> 19.2km/j </Text>
           
          

        </View>
        <View style={styles.temperatura}>
           <Text style={styles.feelslike}>parece   </Text>
           <Text style={styles.temperaturaint}> 25°</Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    viewprincipal:{
       flexDirection:'row',
       height:50,
       width: 380
    },
    vento: {
        backgroundColor: '#008aff',
        margin:1,
        height:50,
        width: 180
    },
    temperatura:{
        backgroundColor: '#008aff',
        margin: 1,
        height:50,
        width: 196
    },
    wind:{
        color: '#fff',
        fontSize: 15,
  
    },
    tempwind: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'

    },
    feelslike:{
        color: '#fff',
        fontSize: 15,
    },
    temperaturaint:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'

    },
    img:{
        width:20,
        height:20
    }


})