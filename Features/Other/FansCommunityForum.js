import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  increment,
} from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Pastikan path firebaseConfig.js benar
import { auth } from "../../firebaseConfig"; // Tambahkan auth untuk mengambil email pengguna

const FansCommunityForum = () => {
  const navigation = useNavigation();

  // State untuk forum dan input
  const [forums, setForums] = useState([]);
  const [message, setMessage] = useState("");

  // Mengambil data forum secara real-time dari Firestore
  useEffect(() => {
    const q = query(collection(db, "forumChats"), orderBy("time", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chats = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setForums(chats); // Update state dengan data dari Firestore
    });

    return () => unsubscribe(); // Bersihkan listener saat komponen di-unmount
  }, []);

  // Fungsi untuk menambahkan pesan baru
  const addChat = async () => {
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    try {
      await addDoc(collection(db, "forumChats"), {
        email: auth.currentUser.email, // Ambil email pengguna yang login
        content: message, // Isi pesan
        time: new Date(), // Timestamp
        responses: 0, // Jumlah respons awal
      });
      setMessage(""); // Kosongkan input setelah mengirim pesan
      alert("Message added successfully!");
    } catch (error) {
      console.error("Error adding chat: ", error);
      alert("Failed to add message.");
    }
  };

  // Fungsi untuk menambah respons
  const addResponse = async (id) => {
    try {
      const chatRef = doc(db, "forumChats", id); // Referensi dokumen berdasarkan ID
      await updateDoc(chatRef, {
        responses: increment(1), // Tambahkan 1 ke jumlah respons
      });
      alert("Response added!");
    } catch (error) {
      console.error("Error adding response: ", error);
      alert("Failed to add response.");
    }
  };

  // Fungsi untuk menghapus pesan
  const deleteChat = async (id) => {
    try {
      await deleteDoc(doc(db, "forumChats", id)); // Hapus dokumen berdasarkan ID
      alert("Message deleted!");
    } catch (error) {
      console.error("Error deleting chat: ", error);
      alert("Failed to delete message.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Community Forum</Text>
        <FontAwesome name="user-circle" size={24} color="white" style={{ opacity: 0 }} />
      </View>
      <FlatList
        data={forums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.userInfo}>
              <Image
                source={{ uri: "https://placekitten.com/64/64" }}
                style={styles.avatar}
              />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{item.email}</Text>
                <Text style={styles.postTime}>
                  {new Date(item.time.seconds * 1000).toLocaleString()}
                </Text>
              </View>
            </View>
            <Text style={styles.postContent}>{item.content}</Text>
            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.responseButton}
                onPress={() => addResponse(item.id)}
              >
                <FontAwesome name="commenting-o" size={16} color="white" />
                <Text style={styles.responseCount}>{item.responses}</Text>
                <Text style={styles.responseText}>klik, jika pesan membantu</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.likeButton}
                onPress={() => deleteChat(item.id)}
              >
                <MaterialCommunityIcons name="delete-outline" size={16} color="red" />
                <Text style={styles.likeText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your message..."
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.button} onPress={addChat}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: "black",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  postContainer: {
    backgroundColor: "#333",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  postTime: {
    color: "#bbb",
    fontSize: 14,
  },
  postContent: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  responseButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f00",
    padding: 8,
    borderRadius: 5,
  },
  responseText: {
    color: "white",
    marginLeft: 5,
    fontSize: 16,
  },
  responseCount: {
    color: "white",
    fontSize: 16,
    marginRight: 5,
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeText: {
    color: "red",
    marginLeft: 5,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#444",
  },
  input: {
    flex: 1,
    backgroundColor: "#333",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FansCommunityForum;
