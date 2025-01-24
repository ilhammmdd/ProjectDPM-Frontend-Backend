import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigation.replace("Login"); // Arahkan ke layar login setelah registrasi
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use. Please use another email.");
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>


      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType='Email-address'
        placeholderTextColor="#ccc"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#ccc"
        secureTextEntry
      />

      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholderTextColor="#ccc"
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}
      >
        <Text style={styles.buttonText} onPress={handleRegister}>Sign Up</Text>
      </TouchableOpacity>

      {/* Link ke Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>
          Already have an account? <Text style={styles.boldText}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  boldText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
export default SignUp;