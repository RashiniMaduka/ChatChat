import * as React from 'react';
import {   StyleSheet } from 'react-native';
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
      <Text style={{ fontSize: 25, fontWeight: "bold" ,  
             color:Color.INDIGO }}>Index no:17000998</Text>
      <Text style={{ fontSize: 25, fontWeight: "bold" ,  color:Color.INDIGO
               }}>Name:G.R.Maduka</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {}
});
