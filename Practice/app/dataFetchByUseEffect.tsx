import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DependencyExample = () => {
  const [count, setCount] = useState(0);
  const [effectRuns, setEffectRuns] = useState(0);

  useEffect(() => {
    setEffectRuns((prev) => prev + 1);
  }, [count]); 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>Effect Runs: {effectRuns}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default DependencyExample;