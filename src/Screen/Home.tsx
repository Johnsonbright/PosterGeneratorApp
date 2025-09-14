import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { POSTER_CATEGORIES, POSTER_SIZES, POSTER_CATEGORIES_LIST } from '../constants';
import { Colors } from '../styles/colors';

// Components
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import PromptInput from '../components/PromptInput';
import SettingsSection from '../components/SettingsSection';
import GenerateButton from '../components/GenerateButton';
import { TabType } from '../types/index.';


export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TabType>('Smart script');
  const [selectedSize, setSelectedSize] = useState<string>(POSTER_SIZES[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>(POSTER_CATEGORIES_LIST[0]);
  const [promptText, setPromptText] = useState<string>(
    'stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting.'
  );

  const handleTabChange = (tab: TabType) => {
    setSelectedTab(tab);
  };

  const handleGenerate = () => {
    console.log('Generate poster with:', {
      tab: selectedTab,
      size: selectedSize,
      category: selectedCategory,
      prompt: promptText,
    });
  };

  const settings = [
    {
      label: 'Size',
      value: selectedSize,
      onPress: () => console.log('Open size selector'),
    },
    {
      label: 'Category',
      value: selectedCategory,
      onPress: () => console.log('Open category selector'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      
      {/* Safe area for top only */}
      <SafeAreaView edges={['top']} style={styles.topSafeArea}>
        <Header
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
          onClose={() => console.log('Close pressed')}
        />
      </SafeAreaView>

      {/* Main content */}
      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>What type of posters do you want to create?</Text>

        <CategoryList
          categories={POSTER_CATEGORIES}
          onCategoryPress={(category) => console.log('Category selected:', category)}
        />

        <PromptInput
          value={promptText}
          onChangeText={setPromptText}
          onImagePress={() => console.log('Image icon pressed')}
        />

        <SettingsSection title="Settings" settings={settings} />
        
        {/* Add spacing to prevent overlap */}
        <View style={styles.spacer} />
      </ScrollView>

      {/* Bottom container with safe area */}
      <SafeAreaView edges={['bottom']} style={styles.bottomSafeArea}>
        <View style={styles.bottomContainer}>
          <GenerateButton onPress={handleGenerate} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  topSafeArea: {
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    lineHeight: 30,
  },
  spacer: {
    height: 120, 
  },
  bottomSafeArea: {
    backgroundColor: Colors.black,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: Colors.black,
  },
});
