import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking } from 'react-native';

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

const openURL = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url); // Membuka URL
    } else {
      alert("URL tidak dapat dibuka: " + url);
    }
  } catch (error) {
    console.error('Error opening URL:', error);
  }
};

export default function LiveScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        ListHeaderComponent={() => (
          <View>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.emptyView}></View>
              <Text style={styles.headerText}>MUST-SEE</Text>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>X</Text>
              </TouchableOpacity>
            </View>

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
            <Text style={styles.sectionTitle}>Video Terbaru</Text>
          </View>
        )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'black',
    paddingTop: 40,
  },
  emptyView: {
    width: 35,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
