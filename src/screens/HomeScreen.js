import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";
import HabitCard from "../components/HabitCard";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  const { habits } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProjectBEAR Habit Tracker</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HabitCard habit={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: Colors.background },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
});
