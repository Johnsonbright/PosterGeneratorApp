import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/colors';

interface PromptInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onImagePress?: () => void;
}

const PromptInput: React.FC<PromptInputProps> = ({
  value,
  onChangeText,
  placeholder = "Describe your poster...",
  onImagePress,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        multiline
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
      />
      <TouchableOpacity style={styles.iconButton} onPress={onImagePress}>
        <Ionicons name="image-outline" size={20} color={Colors.gray} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
    position: 'relative',
  },
  input: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 22,
    minHeight: 60,
    paddingRight: 40,
  },
  iconButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default PromptInput;