import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import {
  create_cliente,
  obtener_one_cliente,
  update_cliente,
} from "../../redux/actions";
import {
  selectorClientsLoading,
  selectorSelectedClient,
} from "../../redux/selectors";
import { ButtonBig } from "../atomos";
import { InputTextWithLabel } from "../moleculas";

const ClientForm = ({
  cliente,
  loading,
  traer_cliente,
  crear_cliente,
  actualizar_cliente,
}) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cc, setCC] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const navigation = useNavigation();
  const data = useRoute().params;
  useEffect(() => {
    if (data?.idCliente) {
      traer_cliente(data.idCliente);
      setNombre(cliente.firstName);
      setApellido(cliente.lastName);
      setCC(cliente.cedula);
      setDireccion(cliente.address);
      setTelefono(cliente.cellphone);
    }
  }, [data]);

  const verificarCamposVacios = () => {
    if (
      nombre.trim().length == 0 ||
      apellido.trim().length == 0 ||
      cc.trim().length == 0 ||
      direccion.trim().length == 0 ||
      telefono.trim().length == 0
    ) {
      return false;
    }
    return true;
  };
  return (
    <ScrollView height="150%" safeArea padding="4%" bg="white">
      <InputTextWithLabel label="Nombre" text={nombre} setText={setNombre} />
      <InputTextWithLabel
        label="Apellido"
        text={apellido}
        setText={setApellido}
      />
      <InputTextWithLabel label="Cédula" text={cc} setText={setCC} />
      <InputTextWithLabel
        label="Dirección"
        text={direccion}
        setText={setDireccion}
      />
      <InputTextWithLabel
        label="Teléfono"
        text={telefono}
        setText={setTelefono}
      />
      <ButtonBig
        label="Realizar"
        onPress={() => {
          if (verificarCamposVacios()) {
            data?.idCliente
              ? actualizar_cliente(data.idCliente, {
                  firstName: nombre,
                  lastName: apellido,
                  cedula: cc,
                  cellphone: telefono,
                  address: {
                    streetAddress: direccion,
                    city: "bogotá",
                    cityId: 1,
                    stateId: 1,
                  },
                })
              : crear_cliente({
                  firstName: nombre,
                  lastName: apellido,
                  cedula: cc,
                  cellphone: telefono,
                  address: {
                    streetAddress: direccion,
                    city: "bogotá",
                    cityId: 1,
                    stateId: 1,
                  },
                });
            navigation.navigate("Clientes");
          } else {
            Alert.alert("Error!", "No pueden haber campos vacíos", [
              {
                text: "OK",
              },
            ]);
          }
        }}
      />
    </ScrollView>
  );
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
    crear_cliente: (input) => dispatch(create_cliente(input)),
    actualizar_cliente: (id, input) => dispatch(update_cliente(id, input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm);
