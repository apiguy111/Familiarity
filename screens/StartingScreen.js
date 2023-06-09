import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import React from "react";

const StartingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("WelcomeScreen");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoContainer}
        source={require("../assets/logo.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#683647",
    flex: 1,
  },

  logoContainer: {
    position: "absolute",
    width: 332,
    height: 260,
    left: 16,
    top: 265,
  },
});

export default StartingScreen;
