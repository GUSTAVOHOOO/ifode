import React from 'react';
import { View, Text } from 'react-native';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';

export default function MatchScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black items-center justify-center px-6">
      <Text className="text-white text-3xl font-bold mb-2">Delivery match confirmed</Text>
      <Text className="text-[#9E9E9E] mb-6">Say hi and set the plan.</Text>
      <Button label="Start Chat" onPress={() => navigation.navigate('Chat' as never)} />
    </View>
  );
}
