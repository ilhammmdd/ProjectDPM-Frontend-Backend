import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Please check your inbox.");
      navigation.replace("Login"); // Arahkan kembali ke halaman login
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("No user found with this email.");
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>
        Enter your email address and we'll send you a link to reset your password.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Back to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'black' },
  title: { color: 'white', fontSize: 24, textAlign: 'center', marginBottom: 20 },
  description: { color: '#ccc', textAlign: 'center', marginBottom: 20 },
  input: { backgroundColor: '#333', color: 'white', padding: 10, marginBottom: 20, borderRadius: 5 },
  button: { backgroundColor: 'red', padding: 15, borderRadius: 5 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  link: { color: 'red', textAlign: 'center', marginTop: 20 },
});
export default ForgotPassword;