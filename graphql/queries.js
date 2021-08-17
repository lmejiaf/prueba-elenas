export const GET_ALL_CLIENTS = `
query GetAllClients($page: Int!, $ids:[Int!]) {
  clientsSearch(page: $page, perPage: 5, ids:$ids) {
    ... on ClientPagination {
      results {
        id
        firstName
        lastName
        cellphone
        address
        cedula
      }
    }
  }
}
`;
