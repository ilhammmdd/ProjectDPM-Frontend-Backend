import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const finishedRaces = [
  { 
    round: 'ROUND 24', 
    location: 'Abu Dhabi', 
    dateRange: '06-08', 
    month: 'DEC', 
    description: 'FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2024',
    results: [
      { name: 'Lando NORRIS', time: '1:26:33.291' },
      { name: 'Carlos SAINZ', time: '+5.832' },
      { name: 'Charles LECLERC', time: '+31.928' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 22', 
    location: 'Las Vegas', 
    dateRange: '21-23', 
    month: 'NOV', 
    description: 'FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024',
    results: [
      { name: 'George RUSSEL', time: '1:22:05.969' },
      { name: 'Lewis HAMILTON', time: '+7.323' },
      { name: 'Carloz SAINZ', time: '+11.906' },
    ],
  },

  { 
    round: 'ROUND 21', 
    location: 'Brazil', 
    dateRange: '01-03', 
    month: 'NOV', 
    description: 'FORMULA 1 LENOVO GRANDE PREMIO DE SAO PAOLO 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '2:06:54.430' },
      { name: 'Esteban OCON', time: '19.447' },
      { name: 'Pierre GASLY', time: '22.532' },
    ],
  },
  { 
    round: 'ROUND 20', 
    location: 'Mexico', 
    dateRange: '25-27', 
    month: 'OCT', 
    description: 'FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MEXICO 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 19', 
    location: 'UNITED STATES', 
    dateRange: '18-20', 
    month: 'OCT', 
    description: 'FORMULA 1 PIRELLI UNITED STATE GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 18', 
    location: 'SINGAPORE', 
    dateRange: '20-22', 
    month: 'NOV', 
    description: 'FORMULA 1 SINGAPORE AIRLANES SINGAPORE GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 17', 
    location: 'ITALY', 
    dateRange: '30-31', 
    month: 'AUG', 
    description: 'FORMULA 1 PIRELLI GRAN PREMIO D`ITALIA 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 16', 
    location: 'AZERBAIJAN', 
    dateRange: '13-15', 
    month: 'SEP', 
    description: 'FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 15', 
    location: 'NETHERLANDS', 
    dateRange: '23-25', 
    month: 'AUG', 
    description: 'FORMULA 1 HIENEKEN DUTCH GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 14', 
    location: 'Belgium', 
    dateRange: '26-28', 
    month: 'JUL', 
    description: 'FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 13', 
    location: 'Hungari', 
    dateRange: '26-28', 
    month: 'JUL', 
    description: 'FORMULA 1 HUNGARIAN GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
  { 
    round: 'ROUND 23', 
    location: 'Qatar', 
    dateRange: '29-30', 
    month: 'NOV', 
    description: 'FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024',
    results: [
      { name: 'Max VERSTAPPEN', time: '1:31:05.323' },
      { name: 'Charles LLECRERC', time: '+6.031' },
      { name: 'Oscar PIASTRI', time: '+6.819' },
    ],
  },
];

export default function FinishedSchedule() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={finishedRaces}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RaceDetails', item)}
          >
            <View style={styles.card}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateRange}>{item.dateRange}</Text>
                <Text style={styles.month}>{item.month}</Text>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.round}>{item.round}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    padding: 15,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  dateRange: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  month: {
    backgroundColor: '#EAEAEA',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  round: {
    color: '#FF0000',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 3,
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
});
