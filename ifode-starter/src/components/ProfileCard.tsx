import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from './Button';
import { Flame } from 'lucide-react-native';

type Props = {
  name: string;
  age: number;
  distance: string;
  match: number;
  photo: any;
  onNow?: () => void;
  onLater?: () => void;
};

export default function ProfileCard({ name, age, distance, match, photo, onNow, onLater }: Props) {
  return (
    <View className="mb-6 rounded-2xl bg-[#1A1A1A] p-4 border border-[#2E2E2E]">
      <Image source={photo} className="w-full h-72 rounded-2xl mb-3" resizeMode="cover" />
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-white text-lg font-semibold">{name}, {age}</Text>
        <View className="flex-row items-center">
          <Flame color="#FF2B2B" size={18} />
          <Text className="text-red-500 ml-1">{match}%</Text>
        </View>
      </View>
      <Text className="text-[#9E9E9E] mb-3">{distance} away</Text>
      <View className="flex-row justify-between gap-3">
        <Button label="Now" variant="primary" onPress={onNow} />
        <Button label="Later" variant="secondary" onPress={onLater} />
      </View>
    </View>
  );
}
