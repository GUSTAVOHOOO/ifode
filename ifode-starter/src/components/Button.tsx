import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onPress?: () => void;
};

export default function Button({ label, variant = 'primary', onPress }: Props) {
  const base = 'px-5 py-3 rounded-xl items-center justify-center';
  const styles = {
    primary: 'bg-[#FF2B2B]',
    secondary: 'bg-[#2E2E2E]',
    ghost: 'border border-white/80'
  }[variant];

  return (
    <Pressable className={`${base} ${styles}`} onPress={onPress}>
      <Text className="text-white font-medium">{label}</Text>
    </Pressable>
  );
}
