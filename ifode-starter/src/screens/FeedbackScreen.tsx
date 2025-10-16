import React from 'react';
import { View, Text } from 'react-native';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';

export default function FeedbackScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-4">How was it?</Text>
      <Text className="text-[#9E9E9E] mb-6">Rate Quality ⭐, Respect ✅, and Discretion 🔒.</Text>
      <View className="flex-1 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E]" />
      <View className="mt-6">
        <Button label="Submit" onPress={() => navigation.navigate('Profile' as never)} />
      </View>
    </View>
  );
}
