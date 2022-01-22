import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import backgroundImage from "./../image/background.jpg";

const Settings = (props) => {
  const logout = () => {
    props.navigation.navigate("Auth");
  };
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ width: "100%", flex: 1 }}
      blurRadius={5}
    >
      <View style={styles.loginView}>
        <TouchableOpacity style={styles.loginbtnContainer}>
          <Text style={styles.loginbtn} onPress={() => logout()}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loginbtn: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  },
  loginbtnContainer: {
    flexDirection: "row",
    width: 100,
    paddingVertical: 5,
    backgroundColor: "#009688",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
