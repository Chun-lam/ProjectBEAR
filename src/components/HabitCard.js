import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export default function HabitCard({ habit }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{habit.title}</Text>
      <Text>Streak: {habit.streak}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mark Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: Colors.card,
    borderRadius: 8,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  button: {
    marginTop: 8,
    padding: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
