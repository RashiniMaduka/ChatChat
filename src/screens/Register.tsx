import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Grid, Row, Form, Item, Input, Label, Button, Picker, Icon } from 'native-base';
import Layout from '../constants/Layout';
import Color from '../constants/Color';
import * as firebase from 'firebase';

interface RegisterProps { }

const Register = (props: RegisterProps) => {
  const [FName, setFName] = React.useState('')
  const [LName, setLName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [pwd, setPWD] = React.useState('')
  const [cpwd, setCPWD] = React.useState('')
  const [gender, setGender] = React.useState('Male')

  const register=()=>{

    // if(pwd!==cpwd)
    // {
    //   return false;
    // }
    firebase.auth().createUserWithEmailAndPassword(email,pwd)
    .then(()=>{
      const user = firebase.auth().currentUser;
      const token = user?.uid;
      user?.updateProfile({
        displayName:FName+" "+LName,
        photoURL:''
      })
      const ref = firebase.database();
      ref.ref('User/'+token+'/').set({
        email:email,
        fname:FName,
        lname:LName,
        phone:phone,
        gender:gender,
      }).catch(err=>alert(err))
    })
    .catch(err=>{
      console.log(err);
      alert(err)
    });
  }

  return (
    <Container>
      <Content>
        <Grid>
          <Row style={{ alignItems: 'center', justifyContent: 'center', height: Layout.height * 0.2, backgroundColor: Color.TRANSPARENT }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 30 }}>Register</Text>
          </Row>
          <Row style={{ height: Layout.height * 0.7, backgroundColor: Color.TRANSPARENT }}>
            <Form style={{ flex: 1, justifyContent: "center", marginHorizontal: 20 }}>
              <Item stackedLabel last>
                <Label >FirstName</Label>
                <Input
                  onChangeText={txt => { setFName(txt) }}
                  value={FName}
                />
              </Item>
              <Item stackedLabel last>
                <Label >LastName</Label>
                <Input
                  onChangeText={txt => setLName(txt)}
                  value={LName}
                />
              </Item>
              <Item stackedLabel last>
                <Label > Email</Label>
                <Input
                  onChangeText={txt => setEmail(txt)}
                  value={email}
                />
              </Item>
              <Item stackedLabel last>
                <Label > PhoneNumber</Label>
                <Input
                  onChangeText={txt => setPhone(txt)}
                  value={phone}
                />
              </Item>
              <Item picker style={{ marginVertical: 10 }}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Select your Gender"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={gender}
                  onValueChange={(value) => setGender(value)}
                >
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>

              </Item>
              <Item stackedLabel last>
                <Label >Password</Label>
                <Input multiline={false} secureTextEntry={true}
                  onChangeText={txt => setPWD(txt)}
                  value={pwd}
                />
              </Item>
              <Item stackedLabel last>
                <Label >Confirm Password</Label>
                <Input secureTextEntry
                  onChangeText={txt => setCPWD(txt)}
                  value={cpwd}
                />
              </Item>



            </Form>
          </Row>

          <Row style={{ height: Layout.height * 0.1, backgroundColor: Color.TRANSPARENT }} >
            <Button style={{ flex: 1, marginHorizontal: 75, borderRadius: 20, justifyContent: "center" }}
              onPress={()=>register()}
            >
              <Text style={{ color: Color.WHITE }}>Register</Text>
            </Button>
          </Row>
        </Grid>
      </Content>
    </Container>

  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
