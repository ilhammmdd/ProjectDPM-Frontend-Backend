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
  // Additional race data...
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
            onPress={() => navigation.navigate('RaceDetails', { race: item })}
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
