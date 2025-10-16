import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '@/screens/Onboarding';
import VerifySelfie from '@/screens/VerifySelfie';
import FeedScreen from '@/screens/FeedScreen';
import MatchScreen from '@/screens/MatchScreen';
import ChatScreen from '@/screens/ChatScreen';
import ScheduleScreen from '@/screens/ScheduleScreen';
import FeedbackScreen from '@/screens/FeedbackScreen';
import ProfileScreen from '@/screens/ProfileScreen';

export type RootStackParamList = {
  Onboarding: undefined;
  VerifySelfie: undefined;
  Feed: undefined;
  Match: undefined;
  Chat: { matchId?: string } | undefined;
  Schedule: { matchId?: string } | undefined;
  Feedback: { matchId?: string } | undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="VerifySelfie" component={VerifySelfie} />
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Match" component={MatchScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
