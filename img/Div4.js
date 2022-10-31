import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Div4(){
    return(
      <View style={styles.viewprincipal}>
        <View style={styles.raiossolar}>
           <Text style={styles.indexuv}> Index uv  </Text>
           <Text style={styles.numero}> 2</Text>
          

        </View>
        <View style={styles.pressure}>
           <Text style={styles.textp}>PRESSURE   </Text>
           <Text style={styles.numerop}> 1014 mbar</Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    viewprincipal:{
       flexDirection:'row',
       height:50,
       width: 380,
       marginTop:2
    },
    raiossolar: {
        backgroundColor: '#008aff',
        margin:1,
        height:50,
        width: 180
    },
    pressure:{
        backgroundColor: '#008aff',
        margin: 1,
        height:50,
        width: 196
    },
    indexuv:{
        color: '#fff',
        fontSize: 15,
  
    },
    numero: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'

    },
    textp:{
        color: '#fff',
        fontSize: 15,
    },
    numerop:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'

    },
    imgb:{
        width:40,
        height:40
    }


})