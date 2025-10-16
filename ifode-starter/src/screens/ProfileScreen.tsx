import React from 'react';
import { View, Text } from 'react-native';
import Button from '@/components/Button';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-black px-6 py-10">
      <Text className="text-white text-2xl font-bold mb-2">Your profile</Text>
      <Text className="text-[#9E9E9E] mb-6">Edit preferences, limits, and privacy.</Text>
      <View className="flex-1 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E]" />
      <Button label="Go to Feed" variant="secondary" />
    </View>
  );
}
