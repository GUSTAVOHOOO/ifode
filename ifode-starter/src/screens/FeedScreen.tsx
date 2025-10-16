import React from 'react';
import { Text, ScrollView } from 'react-native';
import ProfileCard from '@/components/ProfileCard';
import { useNavigation } from '@react-navigation/native';

export default function FeedScreen() {
  const navigation = useNavigation();
  const profiles = [
    { id: '1', name: 'Lara', age: 27, distance: '2 km', match: 89, photo: { uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format' } },
    { id: '2', name: 'Rafael', age: 31, distance: '5 km', match: 92, photo: { uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format' } },
  ];

  return (
    <ScrollView className="flex-1 bg-black px-4 py-6">
      <Text className="text-white text-2xl font-bold mb-4">Available now</Text>
      {profiles.map(p => (
        <ProfileCard
          key={p.id}
          name={p.name}
          age={p.age}
          distance={p.distance}
          match={p.match}
          photo={p.photo}
          onNow={() => navigation.navigate('Match' as never)}
          onLater={() => navigation.navigate('Schedule' as never)}
        />
      ))}
    </ScrollView>
  );
}
