import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from '../styles/colors';
import { PosterCategory, PosterType } from '../types/index.';

interface CategoryCardProps {
  category: PosterCategory;
  onPress?: (category: PosterCategory) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  const getBackgroundColor = (type: PosterType): string => {
    switch (type) {
      case 'display':
        return Colors.brown;
      case 'promotion':
        return Colors.darkBrown;
      case 'branding':
        return Colors.green;
      case 'announcement':
        return Colors.blue;
      case 'business':
        return Colors.orange;
      default:
        return Colors.darkBrown;
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: getBackgroundColor(category.type) },
        pressed && styles.pressedContainer
      ]}
      onPress={() => onPress?.(category)}
    >
      <Text style={styles.title}>{category.title}</Text>
      <Text style={styles.type}>{category.type}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
    padding: 10,
    justifyContent: 'flex-end',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  pressedContainer: {
    borderColor: Colors.white,
  },
  title: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 2,
  },
  type: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 8,
    textTransform: 'capitalize',
  },
});

export default CategoryCard;