import React from 'react';
import { View, ScrollView, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatBubble from '@/components/ChatBubble';
import InputField from '@/components/InputField';
import { colors, spacing } from '@/theme/tokens';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={spacing * 2}
      >
        <View style={styles.container}>
          <ScrollView
            style={styles.messages}
            contentContainerStyle={styles.messagesContent}
            showsVerticalScrollIndicator={false}
          >
            <ChatBubble message="Hey, free tonight?" />
            <ChatBubble message="Yes, around 9pm works." fromMe />
          </ScrollView>
          <View style={styles.inputRow}>
            <InputField placeholder="Type a message..." style={styles.input} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing * 2,
    paddingVertical: spacing * 3,
    gap: spacing * 2,
  },
  messages: {
    flex: 1,
  },
  messagesContent: {
    paddingBottom: spacing,
    gap: spacing,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
});
