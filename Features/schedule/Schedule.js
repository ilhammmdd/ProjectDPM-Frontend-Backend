import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ComingSoon from './comingsoon';
import Finished from './FinishedSchedule';

const ScheduleScreen = () => {
  const [activeTab, setActiveTab] = useState('COMING_SOON');

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'COMING_SOON' && styles.activeTab]}
          onPress={() => setActiveTab('COMING_SOON')}
        >
          <Text style={[styles.tabText, activeTab === 'COMING_SOON' && styles.activeTabText]}>COMING SOON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'FINISHED' && styles.activeTab]}
          onPress={() => setActiveTab('FINISHED')}
        >
          <Text style={[styles.tabText, activeTab === 'FINISHED' && styles.activeTabText]}>FINISHED</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'COMING_SOON' && <ComingSoon />}
      {activeTab === 'FINISHED' && <Finished />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#222',
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: 'red',
  },
  tabText: {
    color: '#888',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: 'white',
  },
});

export default ScheduleScreen;
