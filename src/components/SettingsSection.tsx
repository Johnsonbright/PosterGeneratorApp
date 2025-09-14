import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styles/colors';
import SettingRow from './SettingRow';

interface Setting {
  label: string;
  value: string;
  onPress?: () => void;
}

interface SettingsSectionProps {
  title: string;
  settings: Setting[];
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ title, settings }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {settings.map((setting, index) => (
        <SettingRow
          key={index}
          label={setting.label}
          value={setting.value}
          onPress={setting.onPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    color: Colors.gray,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
});

export default SettingsSection;