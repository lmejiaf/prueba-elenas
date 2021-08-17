import { Box, Text } from "native-base";
import React from "react";
import { ButtonBig, InputLabel, InputText } from "../atomos";

export const InputTextWithLabel = ({ label, text, setText, password }) => {
  return (
    <InputLabel label={label}>
      <InputText text={text} setText={setText} password={password} />
    </InputLabel>
  );
};
export const ItemClientRender = ({ item, navigation }) => {
  return (
    <Box flexDirection="column" marginY={2}>
      <Text>Nombre: {item.firstName}</Text>
      <Text>Apellido: {item.lastName}</Text>
      <Text>Teléfono: {item.cellphone}</Text>
      <Text>Id: {item.id}</Text>
      <ButtonBig
        label="Ver cliente"
        onPress={() =>
          navigation.navigate("ClientData", { idCliente: item.id })
        }
      />
    </Box>
  );
};
export const RowInfoUser = ({ name, value }) => {
  return (
    <Box
      paddingX={2}
      marginY={2}
      flexDirection="row"
      justifyContent="space-between"
      borderWidth={2}
      borderRadius={6}
      borderColor="#6F55D2"
    >
      <Text bold>{name}</Text>
      <Text>{value}</Text>
    </Box>
  );
};
