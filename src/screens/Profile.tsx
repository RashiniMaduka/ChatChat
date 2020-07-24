import * as React from 'react';
import { Avatar, colors } from 'react-native-elements';

import { Container, Content, Grid, Row, Text, List, ListItem, Left, Button, Icon, Body, Right, Switch } from 'native-base';
import Layout from '../constants/Layout';
import Color from '../constants/Color';
import { ImageBackground, StyleSheet, View } from "react-native";

const image = { uri: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg" };


interface ProfileProps { }

const Profile = (props: ProfileProps) => {
  return (
    <Container>
      <Content>
        <Grid>
          <Row style={{ height: Layout.height * 0.3, }}>
            
            <ImageBackground source={image} style={styles.image}>
              <Avatar rounded size='xlarge' containerStyle={{ marginTop: 60, borderWidth: 4, borderColor: Color.WHITE }} source={{ uri: "https://randomuser.me/api/portraits/women/65.jpg" }} />
              
            </ImageBackground>
          </Row>
          <Row style={{ height: Layout.height * 0.05, flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Alice Tall</Text>

          </Row>
          <Row style={{ height: Layout.height * 0.05, flex: 1, justifyContent: "center" }}>
            <Text note>Freelance Developer</Text>
          </Row>
          <Row style={{ height: Layout.height * 0.4 }}>
            <List>
            <ListItem icon noBorder style={{width:Layout.width}} noIndent>
                <Left>
                  <Icon active style={{ color: Color.GRAY }} name="ios-person" />
                </Left>
                <Body>
                  <Text style={{ color: Color.BLACK }}>FirstName:Alice</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder style={{width:Layout.width}} noIndent>
                <Left>
                  <Icon active style={{ color: Color.GRAY }} name="ios-person" />
                </Left>
                <Body>
                  <Text style={{ color: Color.BLACK }}>LastName:Tall</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder style={{width:Layout.width}} noIndent>
                <Left>
                  <Icon active style={{ color: Color.GRAY }} name="ios-mail" />
                </Left>
                <Body>
                  <Text style={{ color: Color.BLACK }}>Email:avhfrgh100@gmail.com</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder style={{width:Layout.width}} noIndent>
                <Left>
                  <Icon active style={{ color: Color.GRAY }} name="ios-call" />
                </Left>
                <Body>
                  <Text style={{ color: Color.BLACK }}>PhoneNumber:11287000364</Text>
                </Body>
              </ListItem>
               

            </List>
          </Row>
          <Row style={{ height: Layout.height * 0.2}} >

          </Row>


        </Grid>
      </Content>

    </Container>
  );
};



export default Profile;

const styles = StyleSheet.create({
  container: {},
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center'
  },
});
