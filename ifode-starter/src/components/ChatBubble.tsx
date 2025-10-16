import React from 'react';
import { View, Text } from 'react-native';

type Props = { message: string; fromMe?: boolean };

export default function ChatBubble({ message, fromMe }: Props) {
  const base = 'p-3 rounded-2xl max-w-[80%] mb-2';
  const bg = fromMe ? 'bg-[#B91C1C] ml-auto' : 'bg-[#2E2E2E]';
  return (
    <View className={`${base} ${bg}`}>
      <Text className="text-white">{message}</Text>
    </View>
  );
}
