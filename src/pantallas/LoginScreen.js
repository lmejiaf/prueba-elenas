import React, { useEffect, useState } from "react";
import { Text, ScrollView } from "native-base";
import { ButtonBig, LoadingSpinner } from "../atomos";
import { InputTextWithLabel } from "../moleculas";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { selectorAuthLoading, selectorAuthToken } from "../../redux/selectors";
import { iniciar_sesion, obtener_token } from "../../redux/actions";

const LoginScreen = ({ login, loading, token, buscar_token }) => {
  const navigation = useNavigation();
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      navigation.navigate("Clientes");
    } else {
      buscar_token();
    }
  }, [token]);

  if (loading) return <LoadingSpinner />;
  return (
    <ScrollView height="150%" safeArea padding="4%">
      <Text textAlign="center" bold fontSize="5xl" marginY={8}>
        ELENA'S APP
      </Text>
      <InputTextWithLabel
        label="Teléfono asociado"
        text={cellphone}
        setText={setCellphone}
      />
      <InputTextWithLabel
        label="Contraseña"
        text={password}
        setText={setPassword}
        password={true}
      />
      <ButtonBig
        label="Iniciar sesión"
        onPress={() => login(cellphone, password)}
      />
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return {
    token: selectorAuthToken(state),
    loading: selectorAuthLoading(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (cellphone, password) => dispatch(iniciar_sesion(cellphone, password)),
    buscar_token: () => dispatch(obtener_token()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
