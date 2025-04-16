import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../style/styles';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Wypełnij wszystkie pola');
      return;
    }

    try {
      const existing = await AsyncStorage.getItem(`user:${email}`);
      if (existing) {
        Alert.alert('Użytkownik już istnieje');
        return;
      }

      await AsyncStorage.setItem(`user:${email}`, JSON.stringify({ password }));
      Alert.alert('Rejestracja udana');
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Błąd rejestracji');
      console.error(error);
    }
  };

  return (
      <KeyboardAvoidingView
          style={styles.authFlex}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.authContainer}>
            <Text style={styles.authTitle}>Rejestracja</Text>
            <TextInput
                placeholder="Email"
                style={styles.authInput}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor={styles.authInputPlaceholder?.color}
            />
            <TextInput
                placeholder="Hasło"
                style={styles.authInput}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor={styles.authInputPlaceholder?.color}
            />
            <TouchableOpacity style={styles.authButton} onPress={handleRegister}>
              <Text style={styles.authButtonText}>Zarejestruj się</Text>
            </TouchableOpacity>
            <Text
                onPress={() => navigation.navigate('Login')}
                style={styles.authLink}
            >
              Masz konto? <Text style={styles.authLinkBold}>Zaloguj się</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}