import React from 'react';
import { View, Text } from 'react-native';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';

export default function ScheduleScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-2">Schedule</Text>
      <Text className="text-[#9E9E9E] mb-6">Pick a time and a public place.</Text>
      <View className="flex-1 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E]" />
      <View className="mt-6">
        <Button label="Confirm" onPress={() => navigation.navigate('Feedback' as never)} />
      </View>
    </View>
  );
}
