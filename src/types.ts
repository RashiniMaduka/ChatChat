export type AuthParamList={
    Login:undefined;
    Register:undefined;
}
export type BottomTabParamList={
    TabOne:undefined;
    TabTwo:undefined;
    TabThree:undefined;
}
export type TabOneParamList={
    ChatList:undefined;
    ChatView:{chatId:string};
    AddChat:undefined;
}
export type TabTwoParamList={
    Profile:undefined;
}
export type TabThreeParamList={
    NewFriends:undefined;
}

export type User ={
    uid?:string;
    email?:string;
    fname?:string;
    lname?:string;
    gender?:string;
    phone?:string;
    chats?:Array<string>;
    friends?:Array<string>;
}

