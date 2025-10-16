import React from 'react';
import { View, ScrollView } from 'react-native';
import ChatBubble from '@/components/ChatBubble';
import InputField from '@/components/InputField';

export default function ChatScreen() {
  return (
    <View className="flex-1 bg-black px-4 py-6">
      <ScrollView className="flex-1">
        <ChatBubble message="Hey, free tonight?" />
        <ChatBubble message="Yes, around 9pm works." fromMe />
      </ScrollView>
      <View className="flex-row items-center gap-2">
        <InputField placeholder="Type a message..." className="flex-1" />
      </View>
    </View>
  );
}
