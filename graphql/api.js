import axios from "axios";
import { CREATE_CLIENT, LOGIN, UPDATE_CLIENT } from "./mutations";
import { GET_ALL_CLIENTS } from "./queries";

export const endpoint = "https://tutor.dev.elenas.la/gql/";
export const POST = "POST";

export const api_login = async (cellphone, password) => {
  let apiResponse = await axios({
    url: endpoint,
    method: POST,
    data: {
      query: LOGIN,
      variables: {
        cellphone,
        password,
      },
    },
  })
    .then(({ data }) => data)
    .catch((err) => err);
  console.log(apiResponse);
  return apiResponse;
};
export const api_get_all_clients = async (page, token) => {
  let apiResponse = await axios({
    url: endpoint,
    method: POST,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      query: GET_ALL_CLIENTS,
      variables: {
        page,
      },
    },
  })
    .then(({ data }) => data)
    .catch((err) => err);
  console.log(apiResponse);
  return apiResponse;
};
export const api_get_one_client = async (id, token) => {
  let apiResponse = await axios({
    url: endpoint,
    method: POST,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      query: GET_ALL_CLIENTS,
      variables: {
        page: 0,
        ids:[id],
      },
    },
  })
    .then(({ data }) => data)
    .catch((err) => err);
  console.log(apiResponse);
  return apiResponse;
};
export const api_create_client = async (input, token) => {
  let apiResponse = await axios({
    url: endpoint,
    method: POST,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      query: CREATE_CLIENT,
      variables: {
        input: {
          ...input,
        },
      },
    },
  })
    .then(({ data }) => data)
    .catch((err) => err);
  console.log(apiResponse);
  return apiResponse;
};
export const api_update_client = async (id, input, token) => {
  let apiResponse = await axios({
    url: endpoint,
    method: POST,
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      query: UPDATE_CLIENT,
      variables: {
        id,
        input: {
          ...input,
        },
      },
    },
  })
    .then(({ data }) => data)
    .catch((err) => err);
  console.log(apiResponse);
  return apiResponse;
};
