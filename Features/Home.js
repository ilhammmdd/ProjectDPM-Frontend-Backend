import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, Linking } from 'react-native';

export default function HomeScreen() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 60,
    seconds: 6,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
          return prevTime;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require('../Gambar/loby.png')} // Pastikan path dan nama folder benar
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerSection}>
            <Text style={styles.eventTitle}>MEXICO 2024</Text>
            <View style={styles.timerContainer}>
              <Text style={styles.timerText}>
                {String(timeLeft.hours).padStart(2, '0')}
              </Text>
              <Text style={styles.colon}>:</Text>
              <Text style={styles.timerText}>
                {String(timeLeft.minutes).padStart(2, '0')}
              </Text>
              <Text style={styles.colon}>:</Text>
              <Text style={styles.timerText}>
                {String(timeLeft.seconds).padStart(2, '0')}
              </Text>
            </View>
            <Text style={styles.timerLabel}>HRS   MINS   SECS</Text>
          </View>

          <ScrollView style={styles.newsSection} showsVerticalScrollIndicator={false}>
            <Text style={styles.sectionTitle}>Top Stories</Text>
            <TouchableOpacity style={styles.newsCard} onPress={() => openURL('https://www.formula1.com/en/latest/article/max-verstappen-10-f1-seasons-ranked-red-bull-toro-rosso.1T5S43hfEnKdnAyPGCTa74')}>
              <Image
                source={require('../Gambar/home1.jpeg')}
                style={styles.newsImage}
              />
              <Text style={styles.newsText}>
                Leclerc takes pole for the 2023 Mexico City Grand Prix!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsCard} onPress={() => openURL('https://www.formula1.com/en/latest/article/who-are-the-2025-f1-team-principals.2GSAsHzQG3pHubcnxBOV8t')}>
              <Image
                source={require('../Gambar/HOME2.jpeg')}
                style={styles.newsImage}
              />
              <Text style={styles.newsText}>
                Verstappen's 10 F1 Seasons Ranked from Red Bull to Toro Rosso
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsCard} onPress={() => openURL('https://www.formula1.com/en/latest/article/analysis-why-red-bull-chose-lawson-instead-of-tsunoda-as-perez-replacement-verstappen-team-mate.4ml79nWhjLDL0BIvZDj37F')}>
              <Image
                source={require('../Gambar/home3.jpeg')}
                style={styles.newsImage}
              />
              <Text style={styles.newsText}>
                Leclerc takes pole for the 2023 Mexico City Grand Prix!
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newsCard} onPress={() => openURL('https://www.formula1.com/en/latest/article/horner-admits-early-perez-contract-extension-in-2024-didnt-work-as-red-bull.kx8pPSzGvuNwEf6wniKe9')}>
              <Image
                source={require('../Gambar/home4.jpeg')}
                style={styles.newsImage}
              />
              <Text style={styles.newsText}>
                Leclerc takes pole for the 2023 Mexico City Grand Prix!
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
  },
  headerSection: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 40,
  },
  eventTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  timerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  colon: {
    color: 'white',
    fontSize: 28,
    marginHorizontal: 5,
  },
  timerLabel: {
    color: '#ccc',
    fontSize: 12,
  },
  newsSection: {
    flex: 1,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  newsCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 150,
  },
  newsText: {
    color: 'white',
    padding: 10,
    fontSize: 14,
  },
});
