import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Image,
  Text,
  Button,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";

import { getTargetData, addFavourite } from "../redux/actionCreators";

import backgroundImage from "./../image/background.jpg";
import Icon from "./Icon";

const mapStateToProps = (state) => {
  return {
    targetUser: state.targetUser,
    loginAuth: state.loginAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTargetData: (username) => dispatch(getTargetData(username)),
    addFavourite: (username, loginAuth) =>
      dispatch(addFavourite(username, loginAuth)),
  };
};

const UserDetails = (props) => {
  useEffect(() => {
    props.getTargetData(props.route.params.username);
  }, []);

  const user = props.targetUser;

  return (
    <Modal>
      <ImageBackground
        source={backgroundImage}
        style={{ width: "100%", flex: 1 }}
        blurRadius={5}
      >
        <View style={style.container}>
          <Text style={style.name}>{user.name}</Text>
          <Image source={{ uri: user.avatar_url }} style={style.image} />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            props.addFavourite(props.route.params.username, props.loginAuth);
            alert("Added to Favourite");
            props.navigation.navigate("Favourite Users");
          }}
        >
          <View style={style.icon}>
            <Icon name="md-heart" size={40} color="red" />
          </View>
        </TouchableWithoutFeedback>
        <View style={style.details}>
          <View style={{ marginRight: 10 }}>
            <Text>Username </Text>
            <Text>ID </Text>
            <Text>Email </Text>
            <Text>Company</Text>
            <Text>Public Repository </Text>
            <Text>Followers </Text>
            <Text>Membaer Since </Text>
          </View>
          <View>
            <Text>: {user.login}</Text>
            <Text>: {user.id}</Text>
            <Text>: {user.email}</Text>
            <Text>: {user.company}</Text>
            <Text>: {user.public_repos}</Text>
            <Text>: {user.followers}</Text>
            <Text>{user.created_at}</Text>
          </View>
        </View>

        <View style={style.container}>
          <Button
            title="close"
            onPress={() => props.navigation.navigate("All Users")}
          ></Button>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  name: {
    fontWeight: "500",
    marginTop: 50,
    fontSize: 24,
  },
  details: {
    margin: 30,
    fontSize: 30,
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginBottom: 0,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
