import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { obtener_token } from "../../redux/actions";
import { selectorAuthToken } from "../../redux/selectors";
import ClientForm from "./ClientForm";
import ClientsScreen from "./ClientsScreen";
import LoginScreen from "./LoginScreen";
import ShowClient from "./ShowClient";

const Stack = createNativeStackNavigator();
const Flow = ({ token, buscar_token }) => {
  useEffect(() => {
    if (!token) {
      buscar_token();
    }
  }, [token]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {!token ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Clientes" component={ClientsScreen} />
            <Stack.Screen name="Formulario" component={ClientForm} />
            <Stack.Screen name="ClientData" component={ShowClient} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    token: selectorAuthToken(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buscar_token: () => dispatch(obtener_token()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Flow);
