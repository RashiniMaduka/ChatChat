import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Grid, Row, Form, Item, Input, Label, Button, Picker, Icon } from 'native-base';
import Layout from '../constants/Layout';
import Color from '../constants/Color';

interface RegisterProps { }

const Register = (props: RegisterProps) => {
  const [gender, setGender] = React.useState('')
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
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label >LastName</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label > Email</Label>
                <Input />
              </Item>
              <Item picker style={{marginVertical:10}}>
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
                  <Picker.Item label="Male" value="key0" />
                  <Picker.Item label="Female" value="key1" />
                </Picker>

              </Item>
              <Item stackedLabel last>
                <Label >Password</Label>
                <Input multiline={false} secureTextEntry={true} />
              </Item>
              <Item stackedLabel last>
                <Label >Confirm Password</Label>
                <Input />
              </Item>



            </Form>
          </Row>

          <Row style={{ height: Layout.height * 0.1, backgroundColor: Color.TRANSPARENT }} >
          <Button style={{flex:1,marginHorizontal:75,borderRadius:20,justifyContent:"center"}}>
                            <Text style={{color:Color.WHITE}}>Register</Text>

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
