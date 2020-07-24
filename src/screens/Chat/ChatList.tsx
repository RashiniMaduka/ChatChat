import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import { Container, Content, Grid, Row, Form, Item, Input, Label, Button, Picker, Icon,List,ListItem,Left,Thumbnail,Body,Right,Text} from 'native-base';
import {FloatingAction} from 'react-native-floating-action';
import Color from '../../constants/Color';
import { RouteProp } from '@react-navigation/native';
import { TabOneParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

type ChatListRouteProps = RouteProp<TabOneParamList,'ChatList'>;
type ChatListNavigationProps = StackNavigationProp<TabOneParamList,'ChatList'>;

type Props = {
  route:ChatListRouteProps;
  navigation:ChatListNavigationProps;
}

interface ChatListProps {}

const ChatList = (props: Props) => {

  return (
    <Container>
     
    <Content>
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: 'https://notednames.com/ImgProfile/hkoh_Amy%20Acker.jpg' }} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>
            <Text note>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
      </List>
    </Content>
    <FloatingAction
      floatingIcon={<Icon name='md-add' style={{color:Color.WHITE}}/>}
      onPressMain={()=>props.navigation.push('AddChat')}
      showBackground={false}
    />
  </Container>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {}
});
