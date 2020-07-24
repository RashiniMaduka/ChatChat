import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

interface ChatViewProps {}

const ChatView = (props: ChatViewProps) => {
  return (
    <View style={styles.container}>
      <Text>ChatView</Text>
    </View>
  );
};

export default ChatView;

const styles = StyleSheet.create({
  container: {}
});
