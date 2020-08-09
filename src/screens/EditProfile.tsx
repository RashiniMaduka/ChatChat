import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Picker, Icon, View, Button, Text} from 'native-base';
import * as firebase from 'firebase';
import { User, TabTwoParamList } from '../types';
import Loading from './Loading';
import Color from '../constants/Color';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type EditProfileRouteProps = RouteProp<TabTwoParamList,'EditProfile'>;
type EditProfileNavigationProps = StackNavigationProp<TabTwoParamList,'EditProfile'>;

type Props = {
    route:EditProfileRouteProps;
    navigation:EditProfileNavigationProps;
} 

interface EditProfileProps { }

const EditProfile = (props: Props) => {

    const user = firebase.auth().currentUser;
    const ref = firebase.database();
    const [FName, setFName] = React.useState<string|undefined>('')
    const [LName, setLName] = React.useState<string|undefined>('')
    const [email, setEmail] = React.useState<string|undefined>('')
    const [phone, setPhone] = React.useState<string|undefined>('')
    const [gender, setGender] = React.useState<string|undefined>('')
    const [isLoading, setLoading] = React.useState<boolean>(true)
    const [title, setTitle] = React.useState<string|undefined>('')

    React.useEffect(()=>{
        loadData();
    },[])

    const loadData=()=>{
        ref.ref('/User/'+user?.uid+'/').once('value')
        .then(snapshot=>{
            if (!snapshot.exists()) {
                setLoading(false);
                alert('Usernot found!')
            }
            const data:User = snapshot.val();
            setFName(data.fname?data.fname:undefined);
            setLName(data.lname?data.lname:undefined);
            setEmail(data.email?data.email:undefined);
            setPhone(data.phone?data.phone:undefined);
            setGender(data.gender?data.gender:undefined);
            setTitle(data.tittle?data.tittle:undefined);
            setLoading(false);
        })
        .catch(error=>{
            setLoading(false);
            alert(error.message);
        })
    }

    const update = () =>{
        setLoading(true);
        if(!validation()){
            setLoading(false);
            return;
        }
        const newData:User = {
            fname:FName,
            lname:LName,
            phone:phone,
            gender:gender,
            tittle:title,
        }

        ref.ref('/User/'+user?.uid+'/').update(newData)
        .then(()=>{
            setLoading(false);
            props.navigation.pop();
        })
        .catch(error=>{
            setLoading(false);
            alert(error.message);
        })
    }

    const validation = () =>{
        if(!FName){
            alert('First Name cannot be empty!');
            return false;
        }
        if(!LName){
            alert('Last Name cannot be empty!');
            return false;
        }
        if(!phone){
            alert('Phone Number cannot be empty!');
            return false;
        }
        else{
            const reg:RegExp = new RegExp('^0+[0-9]{9}$');
            if (!reg.test(phone)) {
                alert('Phone number badly formatted!');
                return false;
            }
        }
        return true;
    }

    if (isLoading) {
        return(
            <Loading/>
        )
    }

    return (
        <Container>
            <Content>
                <Form style={{ flex: 1, justifyContent: "center", marginHorizontal: 20, marginVertical: 10 }}>
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
                    <Item stackedLabel last disabled>
                        <Label style={{color:Color.GRAY}} > Email</Label>
                        <Input
                            style={{color:Color.GRAY}}
                            disabled
                            onChangeText={txt => setEmail(txt)}
                            value={email}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label >Title</Label>
                        <Input
                            onChangeText={txt => setTitle(txt)}
                            value={title}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label > PhoneNumber</Label>
                        <Input
                            keyboardType='phone-pad'
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
                </Form>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Button
                     rounded 
                     style={{width:200, justifyContent:'center', marginVertical:30}}
                     onPress={()=>update()}
                    >
                        <Text>update</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {}
});
