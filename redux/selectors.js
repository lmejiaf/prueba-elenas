export const selectorAuthToken = (state) => state.authReducer.token;
export const selectorAuthUser = (state) => state.authReducer.user;
export const selectorAuthErrors = (state) => state.authReducer.errors;
export const selectorAuthErrorMessage = (state) => state.authReducer.errorMessage;
export const selectorAuthLoading = (state) => state.authReducer.loading;

export const selectorSelectedClient=(state)=> state.clientsReducer.selectedClient;
export const selectorClients=(state)=> state.clientsReducer.clients;
export const selectorClientInput=(state)=> state.clientsReducer.clientInput;
export const selectorClientsLoading=(state)=> state.clientsReducer.loading;
export const selectorClientsErrors=(state)=> state.clientsReducer.errors;
export const selectorClientsErrorMessage=(state)=> state.clientsReducer.errorMessage;
export const selectorCreatedClient=(state)=> state.clientsReducer.createdClient;
export const selectorUpdatedClient=(state)=> state.clientsReducer.updatedClient;
