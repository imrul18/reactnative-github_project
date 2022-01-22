import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { connect } from "react-redux";
import backgroundImage from "./image/background.jpg";
import { setAuth } from "./redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    Auth: state.loginAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (username) => dispatch(setAuth(username)),
  };
};

const Auth = (props) => {
  const [username, setusername] = useState("");

  const funclogin = () => {
    if (username === "") {
      alert("Empty Username...");
    } else {
      props.navigation.navigate("Home");
      props.setAuth(username);
    }
  };
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ width: "100%", flex: 1 }}
      blurRadius={5}
    >
      <View style={styles.loginView}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnStyle}>GitHub Project</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Login as ..."
          value={username}
          onChangeText={setusername}
        />

        <TouchableOpacity style={styles.loginbtnContainer}>
          <Text style={styles.loginbtn} onPress={() => funclogin()}>
            Login
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
  input: {
    width: "85%",
    padding: 5,
    marginTop: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#009688",
    borderRadius: 4,
  },
  btnStyle: {
    fontSize: 24,
    color: "#fff",
    alignSelf: "center",
  },
  loginbtn: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: 200,
    paddingVertical: 5,
    backgroundColor: "#009688",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
