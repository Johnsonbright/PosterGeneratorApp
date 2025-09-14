import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Colors } from '../styles/colors';
import { TabType } from '../types/index.';

interface TabSelectorProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ selectedTab, onTabChange }) => {
  const tabs: TabType[] = ['Smart script', 'Advanced script'];

  return (
    <View style={styles.container}>
      <View style={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => onTabChange(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
   
      <View style={styles.indicatorContainer}>
        <View 
          style={[
            styles.indicator,
            { 
              left: selectedTab === 'Smart script' ? '0%' : '50%',
              width: '50%', 
            }
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tabsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8E8E93', 
    textAlign: 'center',
  },
  activeTabText: {
    color: Colors.white,
    fontWeight: '600',
  },
  indicatorContainer: {
    width: '100%',
    height: 2,
    position: 'relative',
    marginTop: 4,
  },
  indicator: {
    position: 'absolute',
    height: 2,
    backgroundColor: '#007AFF',
    borderRadius: 1,
  },
});

export default TabSelector;