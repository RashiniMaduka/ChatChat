import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { BottomTabParamList, TabOneParamList, TabTwoParamList,TabThreeParamList } from '../types';
import { ChatList, ChatView, AddChat } from '../screens/Chat';
import Profile from '../screens/Profile';
import Color from '../constants/Color';
import EditProfile from '../screens/EditProfile';
import ProfileSetting from '../screens/ProfileSettings';
import Home from '../screens/Home';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(){
    return(
        <BottomTab.Navigator 
        initialRouteName='TabThree'
         tabBarOptions={{activeTintColor:Color.tintColorLight}}>
            <BottomTab.Screen
             name='TabOne' 
             component={TabOne}
             options={{
            tabBarLabel:'Chats',
             tabBarIcon:({color})=><TabBarIcon name='ios-chatbubbles' color={color}/>}}
             
             />
            <BottomTab.Screen
             name='TabTwo' 
             component={TabTwo}
             options={{
                tabBarLabel:'Profile',
                tabBarIcon:({color})=><TabBarIcon name='md-person' color={color}/>}}
             />
              <BottomTab.Screen
             name='TabThree' 
             component={TabThree}
             options={{
                tabBarLabel:'Home',
                tabBarIcon:({color})=><TabBarIcon name='md-home' color={color}/>}}
             />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOne(){
    return(
        <TabOneStack.Navigator initialRouteName='ChatList'>
            <TabOneStack.Screen
             name='ChatList' 
             component={ChatList}
             options={{
                 title:'Chats',
                 headerTitleContainerStyle:{alignItems: 'center',}
             }}
            />
            <TabOneStack.Screen
             name='ChatView'
             component={ChatView}
             options={({route})=>({ title: route.params.title })}
            />
            <TabOneStack.Screen
             name='AddChat' 
             component={AddChat}
             options={{
                 title:'Make Chat'
             }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwo(){
    return(
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen name='Profile' component={Profile} options={{title:'Profile', headerTitleContainerStyle:{alignItems: 'center',}}}/>
            <TabTwoStack.Screen name='EditProfile' component={EditProfile} options={{title:'Edit Profile'}}/>
            <TabTwoStack.Screen name='ProfileSetting' component={ProfileSetting} options={{title:'Setting', headerTitleContainerStyle:{alignItems: 'center',}}}/>
        </TabTwoStack.Navigator>
    );
}

const TabThreeStack=createStackNavigator<TabThreeParamList>();
function TabThree(){
    return(
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen name='Home' component={Home} options={{title:'Home'}}/>
        </TabThreeStack.Navigator>
    );
}
