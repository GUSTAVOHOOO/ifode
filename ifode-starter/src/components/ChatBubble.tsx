import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '@/theme/tokens';

type Props = { message: string; fromMe?: boolean };

export default function ChatBubble({ message, fromMe }: Props) {
  return (
    <View style={[styles.bubble, fromMe ? styles.fromMe : styles.fromOther]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    paddingHorizontal: spacing * 1.5,
    paddingVertical: spacing,
    borderRadius: radius * 1.5,
    marginBottom: spacing,
    maxWidth: '80%',
  },
  fromMe: {
    backgroundColor: colors.accent,
    alignSelf: 'flex-end',
  },
  fromOther: {
    backgroundColor: colors.surfaceMuted,
    alignSelf: 'flex-start',
  },
  text: {
    color: colors.textPrimary,
  },
});
