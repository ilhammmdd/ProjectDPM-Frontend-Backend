import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function OpeningScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../Gambar/opening.png')} // Gambar latar belakang
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Tambahkan Logo */}
        <Image
          source={require('../Gambar/Header/logo.png')} // Gambar logo
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>AEROSTREAM</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Explore Now</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>
          Automotive Schedule App — Discover the latest racing information, get notifications, and mark your favorites.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  logoImage: { width: 259, height: 280, marginBottom: 20 }, 
  logoText: { fontSize: 36, color: 'white', fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: 'red', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  footer: { color: 'white', textAlign: 'center', marginTop: 20, fontSize: 12 },
});
