import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Button from '@/components/Button';
import { colors, radius, spacing } from '@/theme/tokens';
import type { RootStackParamList } from '@/navigation/AppNavigator';

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Your profile</Text>
          <Text style={styles.subtitle}>Edit preferences, limits, and privacy.</Text>
        </View>
        <View style={styles.placeholder} />
        <Button
          label="Go to Feed"
          variant="secondary"
          onPress={() => navigation.navigate('Feed')}
          style={styles.fullWidth}
        />
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
    paddingHorizontal: spacing * 3,
    paddingVertical: spacing * 5,
    justifyContent: 'space-between',
  },
  title: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    marginTop: spacing,
  },
  placeholder: {
    flex: 1,
    marginTop: spacing * 3,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  fullWidth: {
    marginTop: spacing * 3,
    width: '100%',
  },
});
