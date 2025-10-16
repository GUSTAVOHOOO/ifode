import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ProfileCard from '@/components/ProfileCard';
import { colors, spacing } from '@/theme/tokens';
import type { RootStackParamList } from '@/navigation/AppNavigator';

export default function FeedScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const profiles = [
    {
      id: '1',
      name: 'Lara',
      age: 27,
      distance: '2 km',
      match: 89,
      photo: {
        uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format',
      },
    },
    {
      id: '2',
      name: 'Rafael',
      age: 31,
      distance: '5 km',
      match: 92,
      photo: {
        uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format',
      },
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Available now</Text>
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            age={profile.age}
            distance={profile.distance}
            match={profile.match}
            photo={profile.photo}
            onNow={() => navigation.navigate('Match')}
            onLater={() => navigation.navigate('Schedule')}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing * 2,
    paddingVertical: spacing * 3,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: spacing * 2,
  },
});
