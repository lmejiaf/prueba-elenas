import React, { useEffect, useState } from "react";
import { Box, Text } from "native-base";
import { FlatList } from "react-native";
import { ItemClientRender } from "../moleculas";
import { useNavigation } from "@react-navigation/native";
import { selectorClients, selectorClientsLoading } from "../../redux/selectors";
import { obtener_clientes } from "../../redux/actions";
import { connect } from "react-redux";
import { LoadingSpinner } from "../atomos";

const ClientsScreen = ({ lista, loading, traer_clientes }) => {
  const [page, setPage] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    traer_clientes(page);
  }, [page, setPage]);
  return (
    <Box safeArea padding="4%" flex={1} bg="white">
      <Box
        flex={0.05}
        padding={2}
        bg="lightyellow"
        justifyContent="space-between"
        flexDirection="row"
        borderRadius={4}
      >
        <Text bold fontSize="2xl">
          Clientes
        </Text>
        <Text
          bold
          paddingX={2}
          fontSize="2xl"
          borderColor="#6F55D2"
          borderWidth={2}
          borderRadius={6}
          onPress={() => navigation.navigate("Formulario")}
        >
          Crear un cliente
        </Text>
      </Box>
      <Box flex={0.83} padding={2}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={lista}
            renderItem={({ item }) => (
              <ItemClientRender item={item} navigation={navigation} />
            )}
          />
        )}
      </Box>
      <Box
        flex={0.12}
        padding={2}
        bg="lightyellow"
        justifyContent="center"
        borderRadius={4}
      >
        <Text
          bold
          paddingX={2}
          marginY={2}
          fontSize="2xl"
          borderColor="#6F55D2"
          textAlign="center"
          borderWidth={2}
          borderRadius={6}
          onPress={() => traer_clientes(0)}
        >
          Actualizar
        </Text>
        <Box flexDirection="row" justifyContent="space-between">
          <Text
            bold
            fontSize="2xl"
            onPress={() => setPage(page - 1 >= 0 ? page - 1 : page)}
          >
            {"<- Anterior"}
          </Text>
          <Text onPress={() => setPage(page + 1)} bold fontSize="2xl">
            {"Siguiente ->"}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => {
  return {
    lista: selectorClients(state),
    loading: selectorClientsLoading(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    traer_clientes: (page) => dispatch(obtener_clientes(page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClientsScreen);
