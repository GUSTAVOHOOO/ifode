import React from 'react';
import { Pressable, Text, PressableProps, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { colors, radius, spacing } from '@/theme/tokens';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = Omit<PressableProps, 'children' | 'style'> & {
  label: string;
  variant?: Variant;
  style?: StyleProp<ViewStyle>;
};

const variantBackgrounds: Record<Variant, ViewStyle> = {
  primary: { backgroundColor: colors.accent },
  secondary: { backgroundColor: colors.surfaceMuted },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.textPrimary,
  },
};

const textColors: Record<Variant, string> = {
  primary: colors.textPrimary,
  secondary: colors.textPrimary,
  ghost: colors.textPrimary,
};

export default function Button({
  label,
  variant = 'primary',
  style,
  disabled,
  ...rest
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variantBackgrounds[variant],
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
      {...rest}
    >
      <Text style={[styles.label, { color: textColors[variant] }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius,
    paddingHorizontal: spacing * 2,
    paddingVertical: spacing * 1.5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.6,
  },
});
