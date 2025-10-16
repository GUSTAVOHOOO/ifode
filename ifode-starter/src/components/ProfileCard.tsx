import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import Button from './Button';
import { Flame } from 'lucide-react-native';
import { colors, radius, spacing } from '@/theme/tokens';

type Props = {
  name: string;
  age: number;
  distance: string;
  match: number;
  photo: ImageSourcePropType;
  onNow?: () => void;
  onLater?: () => void;
};

export default function ProfileCard({ name, age, distance, match, photo, onNow, onLater }: Props) {
  return (
    <View style={styles.card}>
      <Image source={photo} style={styles.photo} resizeMode="cover" />
      <View style={styles.headerRow}>
        <Text style={styles.nameText}>
          {name}, {age}
        </Text>
        <View style={styles.matchBadge}>
          <Flame color={colors.accent} size={18} />
          <Text style={styles.matchText}>{match}%</Text>
        </View>
      </View>
      <Text style={styles.metaText}>{distance} away</Text>
      <View style={styles.actions}>
        <Button label="Now" variant="primary" onPress={onNow} style={styles.actionButton} />
        <Button label="Later" variant="secondary" onPress={onLater} style={styles.actionButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius,
    padding: spacing * 2,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing * 3,
  },
  photo: {
    width: '100%',
    height: 288,
    borderRadius: radius,
    marginBottom: spacing * 1.5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing,
  },
  nameText: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
  matchBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  matchText: {
    color: colors.accent,
    marginLeft: spacing / 2,
    fontWeight: '600',
  },
  metaText: {
    color: colors.textSecondary,
    marginBottom: spacing * 1.5,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing * 1.5,
  },
  actionButton: {
    flex: 1,
  },
});
