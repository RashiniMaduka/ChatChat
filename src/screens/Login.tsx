import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../types';
import { Container, Content, Grid, Row, Form, Item, Input,Label,Button } from 'native-base';
import Layout from '../constants/Layout';
import Color from '../constants/Color';

type LoginRouteProps = RouteProp<AuthParamList, 'Login'>
type LoginNavigationProps = StackNavigationProp<AuthParamList, 'Login'>;

type prop = {
    route: LoginRouteProps,
    navigation: LoginNavigationProps
}

const Login = ({ route, navigation }: prop) => {
    return (
        <Container>
            <Content>
                <Grid>
                    <Row style={{ alignItems: 'center', justifyContent: 'center', height: Layout.height * 0.3, backgroundColor: Color.TRANSPARENT }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 30 }}>Login</Text>
                    </Row>
                    <Row style={{ height: Layout.height * 0.4, backgroundColor: Color.TRANSPARENT }}>
                        <Form style={{flex:1,justifyContent:"center", marginHorizontal:20}}>
                         
                         <Item stackedLabel last>
                            <Label >Username</Label>
                            <Input/>
                         </Item>
                         <Item stackedLabel last>
                             <Label >Password</Label>
                             <Input/>
                         </Item>
                        </Form>
                        </Row>
                        <Row style={{ height: Layout.height * 0.2, backgroundColor: Color.TRANSPARENT }}>
                        <Button style={{flex:1,marginHorizontal:75,borderRadius:20,justifyContent:"center"}}>
                            <Text style={{color:Color.WHITE}}>Login</Text>

                        </Button>
                    </Row>
                    <Row style={{flex:1,justifyContent:'center', backgroundColor: Color.TRANSPARENT }}>
                        <Text>Haven't Registered Yet? </Text>
                         <Item onPress={()=>navigation.push('Register')}>
                             <Text style={{color:Color.tintColorLight}}>SignUp</Text>
                         </Item>
                    </Row>
                </Grid>
            </Content>
        </Container>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})