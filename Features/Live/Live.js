import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, Linking } from 'react-native';

const videos = [
  {
    id: '1',
    title: 'Red Bull Garage Watches Dramatic Final Lap | 2021 Abu Dhabi Grand Prix',
    duration: '1:55',
    thumbnail: require('../../Gambar/Live/LiveAssets/livee1.jpeg'),
    url: 'https://youtu.be/0MVbz9WEU0o?si=3SkXxRaBm_k-94P_',
  },
  {
    id: '2',
    title: 'Extended Race Highlights | 2023 Las Vegas Grand Prix',
    duration: '22:52',
    thumbnail: require('../../Gambar/Live/LiveAssets/liveee2.jpg'),
    url: 'https://youtu.be/Q6InUqrk9F4?si=3G4idUwPm0rQVTAj',
  },
];

export default function LiveScreen({ navigation }) {
  const openURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Must-see</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SeeAllVideos')}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Video Highlight */}
        <TouchableOpacity 
          style={styles.highlightContainer}
          onPress={() => openURL('https://www.youtube.com/watch?v=9pEqyr_uT-k')}
        >
          <Image
            source={require('../../Gambar/Live/LiveAssets/livee3.jpeg')}
            style={styles.highlightImage}
          />
          <Text style={styles.highlightDuration}>12:04</Text>
          <Text style={styles.highlightText}>
          World's Fastest Camera Drone Vs F1 Car (ft. Max Verstappen)
          </Text>
        </TouchableOpacity>

        {/* List Video Terbaru */}
        <Text style={styles.sectionTitle}>Video Terbaru</Text>
        <FlatList
          data={videos}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.videoContainer}
              onPress={() => openURL(item.url)}
            >
              <Image source={item.thumbnail} style={styles.videoThumbnail} />
              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>{item.title}</Text>
                <Text style={styles.videoDuration}>{item.duration}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'red',
    fontSize: 16,
  },
  highlightContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  highlightImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  highlightDuration: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
  },
  highlightText: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  videoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  videoThumbnail: {
    width: 100,
    height: 60,
    borderRadius: 5,
  },
  videoInfo: {
    marginLeft: 10,
    flex: 1,
  },
  videoTitle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  videoDuration: {
    color: 'gray',
    fontSize: 12,
  },
});
