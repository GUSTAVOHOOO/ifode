import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '@/theme/tokens';

type Props = TextInputProps;

export default function InputField({ style, ...rest }: Props) {
  return (
    <TextInput
      placeholderTextColor={colors.textSecondary}
      style={[styles.input, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surfaceMuted,
    color: colors.textPrimary,
    borderRadius: radius,
    paddingHorizontal: spacing * 2,
    paddingVertical: spacing * 1.5,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
