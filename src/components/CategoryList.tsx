import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import CategoryCard from './CategoryCard';
import { PosterCategory } from '../types/index.';

interface CategoryListProps {
  categories: PosterCategory[];
  onCategoryPress?: (category: PosterCategory) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategoryPress }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          onPress={onCategoryPress}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  content: {
    paddingRight: 20,
  },
});

export default CategoryList;
