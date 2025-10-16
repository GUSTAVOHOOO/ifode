import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Button from '@/components/Button';
import { colors, spacing } from '@/theme/tokens';
import type { RootStackParamList } from '@/navigation/AppNavigator';

export default function MatchScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>Delivery match confirmed</Text>
        <Text style={styles.subtitle}>Say hi and set the plan.</Text>
        <Button label="Start Chat" onPress={() => navigation.navigate('Chat')} style={styles.button} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing * 3,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: spacing * 1.5,
  },
  subtitle: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing * 4,
  },
  button: {
    minWidth: 200,
  },
});
