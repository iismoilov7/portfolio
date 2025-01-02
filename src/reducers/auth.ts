import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    RESET_LOGIN_ERROR
  } from '@src/actions/actionTypes';

interface User {
    name: string;
    username: string;
    picture_url: string;
    role: string;
}

interface AuthState {
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    user: User | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null
};
  
export type AuthAction = 
    | { type: typeof LOGIN_REQUEST }
    | { type: typeof LOGIN_SUCCESS, payload: User }
    | { type: typeof LOGIN_FAILURE, payload: string }
    | { type: typeof LOGOUT }
    | { type: typeof RESET_LOGIN_ERROR };
  

const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null,
                user: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload,
                loading: false,
                user: null
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        case RESET_LOGIN_ERROR:
            return {
                ...state,
                error: null,
                loading: false
            };
        default:
            return state;
    }
};

export default authReducer;
