import * as React from 'react';
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { User } from '../../types';
import { Container, Content, List, Text, View, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import Color from '../../constants/Color';
import Loading from '../Loading';

interface AddChatProps {}

const AddChat = (props: AddChatProps) => {
  const user = firebase.auth().currentUser;
  const ref = firebase.database();
  const [userList, setUserList] = React.useState<Array<User>>([])
  const [isLoading, setLoading] = React.useState<boolean>(true)
React.useEffect(()=>{
  loadData()
},[])
  const loadData = () =>{
    setLoading(true);
    ref.ref('/User/').once('value')
    .then((snapshot)=>{
      setUserList([]);
      const userData = snapshot.val()
      let friends:Array<string> = [];
      let myData:User = {};
      if(user?.uid){
        myData = userData[user?.uid]
        friends = myData.friends?myData.friends:[]
      }
      else{
        setLoading(false);
        alert('Error occured!')
        return;
      }
      if(friends.length!==0){
        friends.map((value,i)=>{
          delete userData[value]
        })
      }
      for(let key in userData){
        if(key!==user.uid){
          let tempUser:User = userData[key];
          setUserList(prevState=>[...prevState,tempUser])
          setLoading(false);
        }
      }
    })
    .catch((error)=>{
      setLoading(false);
      alert(error.message)
    })
  }
  if(isLoading){
    return(
      <Loading/>
    )
  }
  return (
    <Container>
      <Content>
        <List style={{flex:1}}>
          {
            userList.length === 0 ?
             <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
               <Text style={{color:Color.NAVYBLUE, fontWeight:'bold'}}>No Users Available!</Text>
             </View>
             :
             userList.map((value,i)=>{
               return(
                 <ListItem key={i} noIndent style={{borderColor:Color.NAVYBLUE, borderWidth:1, borderRadius:10, marginVertical:5, marginHorizontal:10}}>
                   <Left style={{alignItems:'center'}}>
                    <Thumbnail source={{uri:'https://randomuser.me/api/portraits/women/65.jpg'}} />
                    <Body>
                      <Text>{value.fname + " "+ value.lname}</Text>
                      <Text note>{value.email}</Text>
                    </Body>
                   </Left>
                   <Right>
                     <Button bordered style={{borderRadius:10}}>
                       <Text>Add</Text>
                     </Button>
                   </Right>
                 </ListItem>
               )
             })
          }
        </List>
      </Content>
    </Container>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container: {}
});
