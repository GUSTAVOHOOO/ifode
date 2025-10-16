import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';

export default function Onboarding() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black items-center justify-center px-6">
      <Image source={{ uri: 'https://dummyimage.com/200x200/000/fff&text=ifode' }} style={{ width: 160, height: 160, borderRadius: 32 }} />
      <Text className="text-white text-3xl font-bold mt-6">Sincerity comes first.</Text>
      <Text className="text-[#9E9E9E] mt-2 text-center">Quick, consensual, and discreet connections.</Text>
      <View className="mt-8 w-full">
        <Button label="Start" onPress={() => navigation.navigate('VerifySelfie' as never)} />
      </View>
    </View>
  );
}
