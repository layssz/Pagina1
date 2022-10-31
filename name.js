import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity,Linking } from "react-native";
export default function Name(){
    return (
        <View style={styles.card}>
         <TouchableOpacity style={styles.botao} 
              activeOpacity={0.5} onPress={() => Linking.openURL('http://google.com')}
              > 
          <Text style={styles.textin}>Próximos 7 dias</Text>    
         <Image style={styles.img} source={require('./img/seta.png')}/>
         </TouchableOpacity>
         </View>
    );
    }

const styles = StyleSheet.create({
        card: {
            backgroundColor: '#fff',
            padding: 5,
            borderRadius: 6,
            marginVertical: 7,
            width: 380,
            
            alignItems: 'right',
            
        },

         img: {
            width:20,
            height:20
          },
          botao:{
            width:200,
            height:200,
            color:'#fff'
          },
          textin:{
            
            fontSize: 20,
            color: '#000000'
          }

    });