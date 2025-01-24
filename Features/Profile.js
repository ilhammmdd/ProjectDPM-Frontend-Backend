import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  ImageBackground 
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [currentScreen, setCurrentScreen] = useState('profile'); // State untuk mengatur tampilan

  // Fungsi Logout
  const handleLogout = () => {
    // Navigasi ke halaman login
    navigation.replace('Login'); // Pastikan halaman Login ada di navigator Anda
  };

  // Fungsi render berdasarkan state
  const renderContent = () => {
    switch (currentScreen) {
      case 'profile':
        return renderProfile();
      case 'account':
        return renderAccount();
      case 'help':
        return renderHelp();
      case 'about':
        return renderAbout();
      case 'feedback':
        return renderFeedback();
      default:
        return renderProfile();
    }
  };

  // Tampilan Utama Profil
  const renderProfile = () => (
    <ImageBackground
      source={require('../Gambar/opening.png')}
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Selamat datang di Aerostream App</Text>
        <View style={styles.profileSection}>
          <Image
            source={require('../Gambar/opening.png')} // Gambar profil dari folder assets
            style={styles.profileImage}
          />
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>Email</Text>
        </View>

        {/* Pengaturan Akun */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pengaturan Akun</Text>
          <TouchableOpacity style={styles.item} onPress={() => setCurrentScreen('account')}>
            <Text style={styles.itemText}>Akun Saya</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Preferensi App */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferensi App</Text>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Notifikasi</Text>
            <Text style={styles.arrow}>On</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Pengaturan Cookie</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Dukungan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dukungan</Text>
          <TouchableOpacity style={styles.item} onPress={() => setCurrentScreen('help')}>
            <Text style={styles.itemText}>Help</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => setCurrentScreen('about')}>
            <Text style={styles.itemText}>About</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => setCurrentScreen('feedback')}>
            <Text style={styles.itemText}>Feedback</Text>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Logout */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );

  // Tampilan Akun Saya
  const renderAccount = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Akun Saya</Text>
      <Text style={styles.content}>Pengaturan detail akun Anda.</Text>
      <TouchableOpacity onPress={() => setCurrentScreen('profile')}>
        <Text style={styles.back}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );

  // Tampilan Help
  const renderHelp = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Help</Text>
      <Text style={styles.content}>Bantuan dan informasi lebih lanjut.</Text>
      <TouchableOpacity onPress={() => setCurrentScreen('profile')}>
        <Text style={styles.back}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );

  // Tampilan About
  const renderAbout = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.content}>Tentang aplikasi Aerostream App.</Text>
      <TouchableOpacity onPress={() => setCurrentScreen('profile')}>
        <Text style={styles.back}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );

  // Tampilan Feedback
  const renderFeedback = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Feedback</Text>
      <Text style={styles.content}>Berikan masukan Anda tentang aplikasi ini.</Text>
      <TouchableOpacity onPress={() => setCurrentScreen('profile')}>
        <Text style={styles.back}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );

  return <View style={styles.container}>{renderContent()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    color: 'white',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  itemText: {
    fontSize: 16,
    color: 'white',
  },
  arrow: {
    fontSize: 16,
    color: 'gray',
  },
  logoutContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  back: {
    fontSize: 16,
    color: 'red',
  },
});
