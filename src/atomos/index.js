import { Box, FormControl, Input, Spinner, Text, Button } from "native-base";
import React, { useEffect, useState } from "react";

export const LoadingSpinner = () => {
  return (
    <Box bg="white" flex={1} justifyContent="center" alignItems="center">
      <Spinner color="#6F55D2" size="lg" />
      <Text bold>Cargando...</Text>
    </Box>
  );
};
export const InputText = ({ text, setText, password }) => {
  return (
    <Input
      value={text}
      keyboardType="name-phone-pad"
      onChangeText={(value) => setText(value)}
      width="100%"
      secureTextEntry={password}
    />
  );
};
export const InputLabel = ({ label, children }) => {
  return (
    <FormControl width="100%" marginY={2}>
      <FormControl.Label>
        <Text bold>{label}</Text>
      </FormControl.Label>
      {children}
    </FormControl>
  );
};
export const ButtonBig = ({ onPress, label }) => {
  return (
    <Button
      onPress={onPress}
      bg="#6F55D2"
      width="100%"
      marginY={2}
      _pressed={{ backgroundColor: "white" }}
    >
      <Text color="white" bold>
        {label}
      </Text>
    </Button>
  );
};
