import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import { connect } from "react-redux";

import { getFavouriteData } from "../redux/actionCreators";

import UsersList from "../component/UsersList";

import backgroundImage from "./../image/background.jpg";

const mapStateToProps = (state) => {
  return {
    favouriteUsers: state.favouriteUsers,
    Auth: state.loginAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFavouriteData: (Auth) => dispatch(getFavouriteData(Auth)),
  };
};

const FavUsers = (props) => {
  useEffect(() => {
    props.getFavouriteData(props.Auth);
  });

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ width: "100%", flex: 1 }}
      blurRadius={5}
    >
      <View>
        <FlatList
          data={props.favouriteUsers}
          renderItem={({ item }) => (
            <UsersList user={item} details={() => true} />
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavUsers);
