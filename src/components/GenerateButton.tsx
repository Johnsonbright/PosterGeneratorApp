import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../styles/colors';

interface GenerateButtonProps {
  onPress?: () => void;
  disabled?: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.icon} />
      <Text style={styles.text}>Generate</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  disabled: {
    opacity: 0.6,
  },
  icon: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.blue,
    marginRight: 8,
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GenerateButton;