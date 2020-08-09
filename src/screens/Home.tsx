import * as React from 'react';
import {   Image,StyleSheet } from 'react-native';
import Color from "../constants/Color";
import {
  Container,
  Content,
  Button,
  Text,
  View,
} from "native-base";
 
import Layout from "../constants/Layout";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View  style={{flex:1, justifyContent:'center', alignItems:'center', height:Layout.height * 0.4}}>
      <Image source={require('../../assets/letschat.png')} style={{height:80,width:80}}/>
      
        <Text style={{ fontSize: 25, fontWeight: "bold" ,  color:Color.LIGHTBLUE
               }}>Welcome</Text>
      
      <Text style={{ fontSize: 25, fontWeight: "bold" ,  color:Color.INDIGO
               }}> Let's chat chat</Text>
      
    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {}
});
