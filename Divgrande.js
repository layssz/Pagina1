import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Divgrande(){
    return (
        <View style={styles.card}>
         <Text style={styles.texto}> Maceió, Alagoas</Text>
         
      </View>
  );
    }
    
const styles = StyleSheet.create({
        card: {
            backgroundColor: '#fff',
            padding: 12,
            borderRadius: 12,
            marginVertical: 7,
            width: 500,
            borderColor: '#fff',
            borderWidth: 5
           },
           texto:{
            color: '#000000',
            fontSize: 18,
            fontWeight: 'bold'
           },
       
    });