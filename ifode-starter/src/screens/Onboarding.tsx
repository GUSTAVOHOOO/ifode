import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Button from '@/components/Button';
import { colors, radius, spacing } from '@/theme/tokens';
import type { RootStackParamList } from '@/navigation/AppNavigator';

export default function Onboarding() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://dummyimage.com/200x200/000/fff&text=ifode' }}
          style={styles.logo}
        />
        <Text style={styles.headline}>Sincerity comes first.</Text>
        <Text style={styles.description}>Quick, consensual, and discreet connections.</Text>
        <View style={styles.buttonWrapper}>
          <Button label="Start" onPress={() => navigation.navigate('VerifySelfie')} style={styles.fullWidth} />
        </View>
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
  logo: {
    width: 160,
    height: 160,
    borderRadius: radius * 2,
  },
  headline: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
    marginTop: spacing * 3,
    textAlign: 'center',
  },
  description: {
    color: colors.textSecondary,
    marginTop: spacing * 1.5,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginTop: spacing * 4,
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
});
