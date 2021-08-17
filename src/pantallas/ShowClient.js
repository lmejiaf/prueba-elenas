import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, Text } from "native-base";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { obtener_one_cliente } from "../../redux/actions";
import {
  selectorClientsLoading,
  selectorSelectedClient,
} from "../../redux/selectors";
import { ButtonBig, LoadingSpinner } from "../atomos";
import { RowInfoUser } from "../moleculas";

const ShowClient = ({ cliente, loading, traer_cliente }) => {
  const navigation = useNavigation();
  const { idCliente } = useRoute().params;

  useEffect(() => {
    if (idCliente) {
      traer_cliente(idCliente);
    }
  }, [idCliente]);
  if (loading) return <LoadingSpinner />;
  if (idCliente && cliente) {
    return (
      <ScrollView height="150%" safeArea padding="4%" bg="white">
        <Text bold fontSize="2xl" marginY={4}>
          Información del cliente
        </Text>
        <RowInfoUser name="Id" value={cliente.id} />
        <RowInfoUser name="Nombre" value={cliente.firstName} />
        <RowInfoUser name="Apellido" value={cliente.lastName} />
        <RowInfoUser name="Cédula" value={cliente.cedula} />
        <RowInfoUser name="Dirección" value={cliente.address} />
        <RowInfoUser name="Teléfono" value={cliente.cellphone} />
        <ButtonBig
          label="Editar al cliente"
          onPress={() => navigation.navigate("Formulario",{idCliente})}
        />
      </ScrollView>
    );
  } else {
    if (idCliente) {
      return <Text>No data</Text>;
    }
  }
};
const mapStateToProps = (state) => {
  return {
    cliente: selectorSelectedClient(state),
    loading: selectorClientsLoading(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    traer_cliente: (id) => dispatch(obtener_one_cliente(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowClient);
