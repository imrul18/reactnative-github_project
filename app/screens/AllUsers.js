import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";
import { getAllData } from "../redux/actionCreators";

import UsersList from "../component/UsersList";

import backgroundImage from "./../image/background.jpg";

const mapStateToProps = (state) => {
  return {
    allUsers: state.allUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllData: () => dispatch(getAllData()),
  };
};

const AllUsers = (props) => {
  const [username, setusername] = useState("");

  useEffect(() => {
    props.getAllData();
  }, []);

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ width: "100%", flex: 1 }}
      blurRadius={5}
    >
      <View
        style={{
          width: "80%",
          margin: 20,
          alignSelf: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            width: "60%",
            backgroundColor: "#eee",
            borderWidth: 1,
            borderColor: "#009688",
            borderRadius: 4,
            alignSelf: "center",
          }}
          placeholder="userId"
          onChangeText={setusername}
          value={username}
        />
        <View style={{ width: "40%", padding: 10 }}>
          <Button
            title="Show"
            onPress={() =>
              props.navigation.navigate("userdetails", { username: username })
            }
          />
        </View>
      </View>

      <View>
        <FlatList
          data={props.allUsers}
          renderItem={({ item }) => (
            <UsersList
              user={item}
              details={() =>
                props.navigation.navigate("userdetails", {
                  username: item.login,
                })
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
