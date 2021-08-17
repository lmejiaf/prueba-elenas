export const LOGIN = `
  mutation Login($cellphone: String!, $password: String!) {
    login(cellphone: $cellphone, password: $password) {
      ... on AuthInfo {
        token
        user {
          firstName
          lastName
        }
      }
      ... on ValidationErrors {
        errors {
          message
          field
        }
        message
      }
    }
  }
`;
export const CREATE_CLIENT = `
mutation CreateClient($input: ClientInput!){
  createClient(input:$input){
    ... on Client{
      id
      firstName
      lastName
      cedula
    }
    ... on ValidationErrors{
      errors {
        message
        field
      }
      message
    }
  }
}
`;
export const UPDATE_CLIENT = `
mutation UpdateClient($id: Int!, $input: ClientInput!){
  updateClient(id:$id, input:$input){
    ... on Client{
      firstName
      lastName
    	id
      cellphone
    }
    ... on ValidationErrors{
      errors{
       message
       field
      }
      message
    }
  }
}
`;
