import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const driverStandings = [
  { position: 1, name: 'Max Verstappen', team: 'Red Bull Racing', points: 437, image: require('../Gambar/opening.png') },
  { position: 2, name: 'Lando Norris', team: 'McLaren', points: 374 },
  { position: 3, name: 'Charles Leclerc', team: 'Ferrari', points: 356 },
  { position: 4, name: 'Oscar Piastri', team: 'McLaren', points: 292 },
  { position: 5, name: 'Carlos Sainz', team: 'Ferrari', points: 290 },
  { position: 6, name: 'George Russell', team: 'Mercedes', points: 245 },
  { position: 7, name: 'Lewis Hamilton', team: 'Mercedes', points: 223 },
  { position: 8, name: 'Sergio Perez', team: 'Red Bull Racing', points: 152 },
  { position: 9, name: 'Fernando Alonso', team: 'Aston Martin', points: 70 },
];

const constructorStandings = [
  { position: 1, team: 'McLaren', drivers: 'Norris / Piastri', points: 666 },
  { position: 2, team: 'Ferrari', drivers: 'Leclerc / Sainz', points: 652 },
  { position: 3, team: 'Red Bull Racing', drivers: 'Verstappen / Perez', points: 589 },
  { position: 4, team: 'Mercedes', drivers: 'Hamilton / Russell', points: 468 },
  { position: 5, team: 'Aston Martin', drivers: 'Alonso / Stroll', points: 94 },
  { position: 6, team: 'Alpine', drivers: 'Gasly / Doohan', points: 65 },
  { position: 7, team: 'Haas', drivers: 'Hulkenberg / Magnussen', points: 58 },
  { position: 8, team: 'RB', drivers: 'Tsunoda / Lawson', points: 46 },
  { position: 9, team: 'Williams', drivers: '', points: 17 },
];

const lineColors = ['red', 'blue', 'green', 'orange', 'purple', 'yellow', 'pink', 'brown', 'cyan']; // Warna untuk garis vertikal

export default function StandingsScreen() {
  const [selectedTab, setSelectedTab] = useState('Drivers');

  const renderDrivers = () => (
    <ScrollView style={styles.listContainer}>
      {driverStandings.map((driver, index) => (
        <View
          key={driver.position}
          style={[
            styles.itemContainer,
            driver.position === 1 && styles.firstPositionContainer,
          ]}
        >
          <View style={styles.positionContainer}>
            <Text
              style={[
                styles.position,
                driver.position === 1 && styles.firstPositionText,
              ]}
            >
              {driver.position}
            </Text>
            <View
              style={[
                styles.verticalLine,
                { borderRightColor: lineColors[index % lineColors.length] },
              ]}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text
              style={[
                styles.name,
                driver.position === 1 && styles.firstPositionName,
              ]}
            >
              {driver.name}
            </Text>
            <Text style={styles.team}>{driver.team}</Text>
          </View>
          <Text style={styles.points}>{driver.points} PTS</Text>
        </View>
      ))}
    </ScrollView>
  );

  const renderConstructors = () => (
    <ScrollView style={styles.listContainer}>
      {constructorStandings.map((constructor, index) => (
        <View
          key={constructor.position}
          style={[
            styles.itemContainer,
            constructor.position === 1 && styles.firstPositionContainer,
          ]}
        >
          <View style={styles.positionContainer}>
            <Text
              style={[
                styles.position,
                constructor.position === 1 && styles.firstPositionText,
              ]}
            >
              {constructor.position}
            </Text>
            <View
              style={[
                styles.verticalLine,
                { borderRightColor: lineColors[index % lineColors.length] },
              ]}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text
              style={[
                styles.name,
                constructor.position === 1 && styles.firstPositionName,
              ]}
            >
              {constructor.team}
            </Text>
            <Text style={styles.team}>{constructor.drivers}</Text>
          </View>
          <Text style={styles.points}>{constructor.points} PTS</Text>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      {/* Header STANDINGS */}
      <View style={styles.standingsHeaderContainer}>
        <Text style={styles.header}>STANDINGS</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Drivers' && styles.activeTab]}
          onPress={() => setSelectedTab('Drivers')}
        >
          <Text style={styles.tabText}>Drivers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Constructors' && styles.activeTab]}
          onPress={() => setSelectedTab('Constructors')}
        >
          <Text style={styles.tabText}>Constructors</Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'Drivers' ? renderDrivers() : renderConstructors()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' }, // Latar belakang keseluruhan hitam
  standingsHeaderContainer: {
    backgroundColor: 'red', // Menambahkan latar belakang merah pada header "STANDINGS"
    paddingVertical: 7,
    alignItems: 'flex-start', // Geser header ke kiri atas
    paddingLeft: 15, // Menambahkan padding kiri untuk header
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabContainer: { flexDirection: 'row', justifyContent: 'center', backgroundColor: 'red' },
  tab: { flex: 1, padding: 15, alignItems: 'center' },
  activeTab: { borderBottomWidth: 3, borderBottomColor: 'white' },
  tabText: { color: 'white', fontWeight: 'bold' },
  listContainer: { padding: 10 },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white', // Latar belakang dalam tetap putih
    borderRadius: 8,
    marginBottom: 10,
    position: 'relative', // Agar garis vertikal bisa diatur posisinya secara konsisten
  },
  firstPositionContainer: {
    backgroundColor: '#A9A9A9', // Abu-abu tua untuk posisi pertama
    borderWidth: 2,
    borderColor: '#000',
    padding: 15,
  },
  positionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 10, // Geser angka sedikit ke kanan
  },
  position: { color: 'black', fontSize: 18, fontWeight: 'bold', marginRight: 10 },
  firstPositionText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  verticalLine: {
    width: 2, // Lebar garis vertikal lebih tipis
    height: 30, // Tinggi garis vertikal lebih pendek
    borderRightWidth: 2, // Lebar garis vertikal
    marginLeft: 10,
  },
  detailsContainer: { flex: 1, marginLeft: 50 }, // Memberikan ruang agar teks tidak terlalu rapat dengan garis
  name: { color: 'black', fontSize: 16, fontWeight: 'bold' },
  firstPositionName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  team: { color: 'gray', fontSize: 14 },
  points: { color: 'black', fontSize: 16, fontWeight: 'bold' },
});
