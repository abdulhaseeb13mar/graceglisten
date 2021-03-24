import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from 'react-redux';
import HomeStack from "./HomeStack";
import Navigator from "../utils/Navigator"

const AuthLoading = (props) => {
  return (
    <NavigationContainer ref={(navigatorRef) => {
      Navigator.setTopLevelNavigator(navigatorRef);
    }}>
      <HomeStack/>
    </NavigationContainer>
  );
};

export default AuthLoading;
