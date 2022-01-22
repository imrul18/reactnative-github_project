import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const UsersList = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.details}>
      <View style={style.container}>
        <Image style={style.image} source={{ uri: props.user.avatar_url }} />
        <View style={style.details}>
          <Text style={style.name}>{props.user.login}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    padding: 15,
  },

  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontWeight: "500",
  },
});

export default UsersList;
