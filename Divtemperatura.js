import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Divtemperatura(){
    return (
        <View style={styles.card}>
          <Image style={styles.img} source={require('./img/nuvem.png')}/>
         <Text style={styles.clima}>  chuva</Text>
         <Text style={styles.data}> dez, Outubro </Text>
         <Text style={styles.temperatura}>  25°</Text>
        
        
         
      </View>
  );
    }
    
const styles = StyleSheet.create({
        card: {
            backgroundColor: '#008aff',
            paddingRight: 10,
            paddingBottom:300,
            paddingLeft:10,
            borderRadius: 6,
            marginVertical: 7,
            width: 380,
            height:20,
            alignItems:'center',
            marginBottom: 1
           },
           clima:{
            color: '#fff',
            fontSize: 25,
            fontWeight: 'bold'
           },
           img: {
            width:200,
            height:200
          },
          data: {
            color: '#fff',
            fontSize: 15,
          },
          temperatura: {
            color: '#fff',
            fontSize: 25,
            fontWeight: 'bold'
          }
          

        });