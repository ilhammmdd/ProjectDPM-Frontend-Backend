import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

export default function OthersScreen() {
  const navigation = useNavigation(); 

  const openStore = () => {
    const storeUrl = 'https://f1store.formula1.com/en/';
    Linking.openURL(storeUrl).catch((err) => console.error('Failed to open URL:', err));
  };

  const openTickets = () => {
    const ticketsUrl = 'https://tickets.formula1.com/en';
    Linking.openURL(ticketsUrl).catch((err) => console.error('Failed to open URL:', err));
  };

  return ( 
    <ImageBackground
      source={require('../../Gambar/opening.png')} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.sectionTitle}>Explore</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <TouchableOpacity style={styles.menuItem} onPress={openTickets}>
              <FontAwesome name="ticket" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Tiket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="leaf" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Hospitality</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="star" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Experience</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={openStore}>
              <FontAwesome name="shopping-cart" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Store</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="certificate" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Authentics</Text>
            </TouchableOpacity>
            <TouchableOpacity
    style={styles.menuItem}
    onPress={() => navigation.navigate('FansCommunityForum')}
>
    <FontAwesome name="comments" size={20} color="white" style={styles.icon} />
    <Text style={styles.menuText}>Fans Community Forum</Text>
</TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Support & Legal</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="question-circle" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Pusat Bantuan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="gavel" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Pemberitahuan Hukum</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="lock" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Kebijakan Privasi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="shopping-bag" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Kebijakan Pembelian</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome name="cookie" size={20} color="white" style={styles.icon} />
              <Text style={styles.menuText}>Kebijakan Cookie</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  sectionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'left',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});
