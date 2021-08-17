import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  api_create_client,
  api_get_all_clients,
  api_get_one_client,
  api_login,
  api_update_client,
} from "../graphql/api";
import { getToken, storeData } from "../localStorage";
import {
  create_cliente_correcto,
  create_cliente_erroneo,
  iniciar_sesion_correcto,
  iniciar_sesion_erroneo,
  obtener_clientes_correcto,
  obtener_clientes_erroneo,
  obtener_one_cliente_correcto,
  obtener_one_cliente_erroneo,
  poner_token,
  update_cliente_correcto,
  update_cliente_erroneo,
} from "./actions";
import {
  INICIAR_SESION,
  OBTENER_CLIENTES,
  OBTENER_TOKEN,
  UPDATE_CLIENT,
  CREATE_CLIENT,
  OBTENER_ONE_CLIENTE,
} from "./actionTypes";

export function* iniciar_sesion_saga({ payload }) {
  try {
    const apiResponse = yield call(
      api_login,
      payload.cellphone,
      payload.password
    );
    if (apiResponse?.data?.login?.errors || apiResponse?.data?.login?.message) {
      yield put(iniciar_sesion_erroneo(apiResponse.data.login));
    } else {
      if (apiResponse.data.login.token && apiResponse.data.login.user) {
        yield put(iniciar_sesion_correcto(apiResponse.data.login));
        yield call(storeData, "token", apiResponse.data.login.token);
      }
    }
  } catch (error) {
    yield put(iniciar_sesion_erroneo({ errors: error, message: error }));
    console.log("Ha ocurrido un error", error);
  }
}
export function* obtener_token_from_storage_saga() {
  try {
    const response = yield call(getToken);
    yield put(poner_token(response));
  } catch (error) {
    console.log(error);
  }
}
export function* obtener_clientes_saga({ payload }) {
  try {
    const token = yield call(getToken);
    const apiResponse = yield call(api_get_all_clients, payload.page, token);
    if (
      apiResponse?.data?.clientsSearch?.errors ||
      apiResponse?.data?.clientsSearch?.message
    ) {
      yield put(obtener_clientes_erroneo(apiResponse.data.clientsSearch));
    } else {
      if (apiResponse?.data?.clientsSearch?.results) {
        yield put(
          obtener_clientes_correcto(apiResponse.data.clientsSearch.results)
        );
      }
    }
  } catch (error) {
    yield put(obtener_clientes_erroneo({ errors: error, message: error }));
    console.log(error);
  }
}
export function* obtener_one_cliente_saga({ payload }) {
  try {
    const token = yield call(getToken);
    const apiResponse = yield call(api_get_one_client, payload.id, token);
    if (
      apiResponse?.data?.clientsSearch?.errors ||
      apiResponse?.data?.clientsSearch?.message
    ) {
      yield put(obtener_one_cliente_erroneo(apiResponse.data.clientsSearch));
    } else {
      if (apiResponse?.data?.clientsSearch?.results) {
        yield put(
          obtener_one_cliente_correcto(
            apiResponse.data.clientsSearch.results[0]
          )
        );
        console.log("un solo cliente response=> ", apiResponse);
      }
    }
  } catch (error) {
    yield put(obtener_clientes_erroneo({ errors: error, message: error }));
    console.log(error);
  }
}
export function* crear_cliente_saga({ payload }) {
  try {
    const token = yield call(getToken);
    const apiResponse = yield call(api_create_client, payload.data, token);
    if (
      apiResponse?.data?.createClient?.errors ||
      apiResponse?.data?.createClient?.message
    ) {
      yield put(create_cliente_erroneo(apiResponse.data.createClient));
    } else {
      if (apiResponse?.data?.createClient?.id) {
        yield put(create_cliente_correcto(apiResponse.data.createClient));
      }
    }
  } catch (error) {
    yield put(create_cliente_erroneo({ errors: error, message: error }));
    console.log("Ha ocurrido un error", error);
  }
}
export function* actualizar_cliente_saga({ payload }) {
  try {
    const token = yield call(getToken);
    const apiResponse = yield call(
      api_update_client,
      payload.id,
      payload.data,
      token
    );

    if (
      apiResponse?.data?.updateClient?.errors ||
      apiResponse?.data?.updateClient?.message
    ) {
      yield put(update_cliente_erroneo(apiResponse.data.updateClient));
    } else {
      if (apiResponse?.data?.updateClient?.id) {
        yield put(update_cliente_correcto(apiResponse.data.updateClient));
      }
    }
  } catch (error) {
    yield put(update_cliente_erroneo({ errors: error, message: error }));
    console.log("Ha ocurrido un error", error);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(INICIAR_SESION, iniciar_sesion_saga),
    takeEvery(OBTENER_CLIENTES, obtener_clientes_saga),
    takeEvery(CREATE_CLIENT, crear_cliente_saga),
    takeEvery(UPDATE_CLIENT, actualizar_cliente_saga),
    takeEvery(OBTENER_TOKEN, obtener_token_from_storage_saga),
    takeEvery(OBTENER_ONE_CLIENTE, obtener_one_cliente_saga),
  ]);
}
