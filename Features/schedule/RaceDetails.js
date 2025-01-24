import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function RaceDetails({ route }) {
  const { race } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{race.description}</Text>
      <Text style={styles.location}>Location: {race.location}</Text>
      <Text style={styles.date}>Date: {race.dateRange} {race.month}</Text>
      <Text style={styles.subtitle}>Results:</Text>
      <FlatList
        data={race.results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 16,
  },
  time: {
    fontSize: 16,
  },
});
