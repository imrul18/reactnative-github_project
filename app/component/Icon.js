import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <Ionicons name={props.name} color={props.color} size={props.size} />
    </TouchableOpacity>
  );
};

export default Icon;
