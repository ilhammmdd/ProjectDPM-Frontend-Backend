import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import Features
import OpeningScreen from './Features/Opening';
import LoginScreen from './Features/authentication/SignIn';
import SignUpScreen from './Features/authentication/SignUp';
import HomeScreen from './Features/Home';
import LiveScreen from './Features/Live/Live';
import ScheduleScreen from './Features/schedule/Schedule';
import FinishedScheduleScreen from './Features/schedule/FinishedSchedule';
import RaceDetailsScreen from './Features/schedule/RaceDetails';
import StandingsScreen from './Features/Standing';
import OthersScreen from './Features/Other/Others';
import SeeAllVideos from './Features/Live/SeeAllVideos';
import ForgotPasswordScreen from './Features/authentication/ForgotPassword';
import ProfileScreen from './Features/Profile'; // Import halaman Profile
import FansCommunityForum from './Features/Other/FansCommunityForum'; // Sesuaikan path


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Komponen Header dengan navigasi ke Profile
const Header = () => {
  const navigation = useNavigation(); // Akses navigasi
  return (
    <View style={styles.header}>
      <Image source={require('./Gambar/Header/logofi.png')} style={styles.logo} />
      <Image source={require('./Gambar/Header/logo.png')} style={[styles.logo, styles.centerLogo]} />
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require('./Gambar/Header/return.png')} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

// Fungsi untuk mendapatkan ikon tab
const getTabIcon = (route, focused) => {
  switch (route.name) {
    case 'Home':
      return focused
        ? require('./Gambar/Footer/homered.png')
        : require('./Gambar/Footer/homewhite.png');
    case 'Live':
      return focused
        ? require('./Gambar/Footer/live-red.png')
        : require('./Gambar/Footer/live-white.png');
    case 'Schedule':
      return focused
        ? require('./Gambar/Footer/schedule-red.png')
        : require('./Gambar/Footer/schedule-white.png');
    case 'Standings':
      return focused
        ? require('./Gambar/Footer/standing-red.png')
        : require('./Gambar/Footer/standing-white.png');
    case 'Others':
      return focused
        ? require('./Gambar/Footer/homered.png')
        : require('./Gambar/Footer/homewhite.png');
    default:
      return null;
  }
};

// Bottom Tab Navigator
function TabNavigator() {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const iconSource = getTabIcon(route, focused);
            return <Image source={iconSource} style={{ width: 25, height: 25 }} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: { backgroundColor: 'black' },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Live" component={LiveScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ headerShown: false }} />
        
        <Tab.Screen name="Standings" component={StandingsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Others" component={OthersScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </>
  );
}

// Root Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Opening">
        <Stack.Screen name="Opening" component={OpeningScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="SeeAllVideos" component={SeeAllVideos} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="FinishedSchedule"
          component={FinishedScheduleScreen}
          options={{ title: 'Finished Races' }}
        />
        <Stack.Screen
          name="RaceDetails"
          component={RaceDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="FansCommunityForum" 
        component={FansCommunityForum} 
        options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: 'black',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  centerLogo: {
    width: 40,
    height: 40,
  },
});
