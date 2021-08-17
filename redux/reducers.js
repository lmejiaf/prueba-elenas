
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

const authInitialState = {
  token: null,
  user: null,
  loading: false,
  errors: null,
  errorMessage: null,
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case INICIAR_SESION:
      return {
        ...state,
        loading: true,
        errors: null,
        errorMessage: null,
      };
    case INICIAR_SESION_CORRECTO:
      return {
        ...state,
        loading: false,
        errors: null,
        errorMessage: null,
        token: action.payload.data.token,
        user: action.payload.data.user,
      };
    case INICIAR_SESION_ERRONEO:
      return {
        ...state,
        loading: false,
        errors: action.payload.data.errors,
        errorMessage: action.payload.data.message,
        token: null,
        user: null,
      };
    case PONER_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
    case OBTENER_TOKEN:
      return {
        ...state,
        loading: true,
      };
    case QUITAR_TOKEN:
      return {
        ...state,
        token: null,
        user: null,
      };

    default:
      return { ...state };
  }
};

const clientsInitialState = {
  selectedClient: null,
  clients: [],
  clientInput: null,
  loading: false,
  errors: null,
  errorMessage: null,
  createdClient: null,
  updatedClient: null,
};
export const clientsReducer = (state = clientsInitialState, action) => {
  switch (action.type) {
    case OBTENER_CLIENTES:
      return {
        ...state,
        loading: true,
        errors: null,
        errorMessage: null,
      };
    case OBTENER_CLIENTES_CORRECTO:
      return {
        ...state,
        clients: action.payload.data,
        loading: false,
      };

    case OBTENER_CLIENTES_ERRONEO:
      return {
        ...state,
        errors: action.payload.data.errors,
        errorMessage: action.payload.data.message,
        loading: false,
      };
    case OBTENER_ONE_CLIENTE:
      return {
        ...state,
        loading: true,
        errors: null,
        errorMessage: null,
        selectedClient:null
      };
    case OBTENER_ONE_CLIENTE_CORRECTO:
      return {
        ...state,
        selectedClient: action.payload.data,
        loading: false,
      };

    case OBTENER_ONE_CLIENTE_ERRONEO:
      return {
        ...state,
        errors: action.payload.data.errors,
        errorMessage: action.payload.data.message,
        loading: false,
      };

    case CREATE_CLIENT:
      return {
        ...state,
        loading: true,
        errors: null,
        errorMessage: null,
        createdClient: null,
        clientInput: action.payload.data,
      };

    case CREATE_CLIENT_CORRECTO:
      return {
        ...state,
        createdClient: action.payload.data,
        loading: false,
      };

    case CREATE_CLIENT_ERRONEO:
      return {
        ...state,
        errors: action.payload.data.errors,
        errorMessage: action.payload.data.message,
        loading: false,
      };

    case UPDATE_CLIENT:
      return {
        ...state,
        loading: true,
        errors: null,
        errorMessage: null,
        createdClient: null,
        clientInput: action.payload.data,
      };

    case UPDATE_CLIENT_CORRECTO:
      return {
        ...state,
        updatedClient: action.payload.data,
        loading: false,
      };

    case UPDATE_CLIENT_ERRONEO:
      return {
        ...state,
        errors: action.payload.data.errors,
        errorMessage: action.payload.data.message,
        loading: false,
      };

    default:
      return { ...state };
  }
};
