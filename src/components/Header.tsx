import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/colors';
import TabSelector from './TabSelector';
import { TabType } from '../types/index.';

interface HeaderProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({ selectedTab, onTabChange, onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TabSelector selectedTab={selectedTab} onTabChange={onTabChange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;