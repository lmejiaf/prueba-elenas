import {
  CREATE_CLIENT,
  CREATE_CLIENT_CORRECTO,
  CREATE_CLIENT_ERRONEO,
  INICIAR_SESION,
  INICIAR_SESION_CORRECTO,
  INICIAR_SESION_ERRONEO,
  OBTENER_CLIENTES,
  OBTENER_CLIENTES_CORRECTO,
  OBTENER_CLIENTES_ERRONEO,
  OBTENER_ONE_CLIENTE,
  OBTENER_ONE_CLIENTE_CORRECTO,
  OBTENER_ONE_CLIENTE_ERRONEO,
  OBTENER_TOKEN,
  PONER_TOKEN,
  QUITAR_TOKEN,
  UPDATE_CLIENT,
  UPDATE_CLIENT_CORRECTO,
  UPDATE_CLIENT_ERRONEO,
} from "./actionTypes";

export const iniciar_sesion = (cellphone, password) => {
  return {
    type: INICIAR_SESION,
    payload: {
      cellphone,
      password,
    },
  };
};
export const iniciar_sesion_correcto = (data) => {
  return {
    type: INICIAR_SESION_CORRECTO,
    payload: {
      data,
    },
  };
};
export const iniciar_sesion_erroneo = (data) => {
  return {
    type: INICIAR_SESION_ERRONEO,
    payload: {
      data,
    },
  };
};
export const poner_token = (token) => {
  return {
    type: PONER_TOKEN,
    payload: {
      token,
    },
  };
};
export const obtener_token = () => {
  return {
    type: OBTENER_TOKEN,
    payload: {},
  };
};
export const quitar_token = () => {
  return {
    type: QUITAR_TOKEN,
    payload: {},
  };
};
export const obtener_clientes = (page) => {
  return {
    type: OBTENER_CLIENTES,
    payload: {
      page,
    },
  };
};
export const obtener_clientes_correcto = (data) => {
  return {
    type: OBTENER_CLIENTES_CORRECTO,
    payload: { data },
  };
};
export const obtener_clientes_erroneo = (data) => {
  return {
    type: OBTENER_CLIENTES_ERRONEO,
    payload: { data },
  };
};
export const obtener_one_cliente = (id) => {
  return {
    type: OBTENER_ONE_CLIENTE,
    payload: {
      id,
    },
  };
};
export const obtener_one_cliente_correcto = (data) => {
  return {
    type: OBTENER_ONE_CLIENTE_CORRECTO,
    payload: { data },
  };
};
export const obtener_one_cliente_erroneo = (data) => {
  return {
    type: OBTENER_ONE_CLIENTE_ERRONEO,
    payload: { data },
  };
};
export const create_cliente = (data) => {
  return {
    type: CREATE_CLIENT,
    payload: {
      data,
    },
  };
};
export const create_cliente_correcto = (data) => {
  return {
    type: CREATE_CLIENT_CORRECTO,
    payload: { data },
  };
};
export const create_cliente_erroneo = (data) => {
  return {
    type: CREATE_CLIENT_ERRONEO,
    payload: { data },
  };
};
export const update_cliente = (id, data) => {
  return {
    type: UPDATE_CLIENT,
    payload: {
      id,
      data,
    },
  };
};
export const update_cliente_correcto = (data) => {
  return {
    type: UPDATE_CLIENT_CORRECTO,
    payload: { data },
  };
};
export const update_cliente_erroneo = (data) => {
  return {
    type: UPDATE_CLIENT_ERRONEO,
    payload: { data },
  };
};
