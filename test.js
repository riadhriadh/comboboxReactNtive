import React, { Component } from "react";
import { View } from "react-native";
import Combobox from "./index";
import datac from "./data";
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center"
        }} >
        <Combobox data={datac} title={"combobox"} />
      </View>
    );
  }
}
