const initialState= {
  token: null,
  status: 'loading', /* - 'loading'
                        - 'request'
                        - 'idle'
                        - 'error-request-token'
                      */
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case 'REQUEST_ACCESS_TOKEN':
      return {
        ...state,
        status: 'request',
      }
    case 'RECEIVE_ACCESS_TOKEN':
      return {
        ...state,
        status: 'idle',
        token: action.token,
      }
    case 'RECEIVE_ACCESS_TOKEN_ERROR':
      return {
        ...state,
        status: 'error-request-token',
      }
    default:
      return state;
  };
};