import React from 'react';
import { TextInput } from 'react-native';

type Props = React.ComponentProps<typeof TextInput> & { className?: string };

export default function InputField(props: Props) {
  return (
    <TextInput
      placeholderTextColor="#9E9E9E"
      className={`bg-[#2E2E2E] text-white border border-white/20 rounded-xl px-4 py-3 ${props.className || ''}`}
      {...props}
    />
  );
}
