import { AppDispatch, RootState } from "@src/store";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { AxiosError } from "axios"; 

import { LoginRequest, LoginResponse, User} from "@src/models/auth";
import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
  } from "@src/actions/actionTypes";
  
import { EndPoints } from "@src/config";
import { apiServer } from "@src/utils/api";
import { AuthAction } from "@src/reducers/auth";
import { setCookie } from "@src/utils/cookie";

export const loginRequest = (): AuthAction => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (loginResponse: User): AuthAction => ({
  type: LOGIN_SUCCESS,
  payload: loginResponse,
});

export const loginFailure = (error: string): AuthAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = (): AuthAction => ({
    type: LOGOUT
});



export const loginUser = (credentials: LoginRequest ): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: AppDispatch) => {
    dispatch(loginRequest());
    
    try {
      const response = await apiServer.post(
        EndPoints.auth.login,
        credentials,
        {
          withCredentials: true
        },
      ); 
      
      const userdata = response.data as LoginResponse;
      console.log(userdata);

      setCookie("access_token", userdata.access_token, 7);
      // Dispatch success action on successful login
      dispatch(loginSuccess(userdata.user));
    } catch (error) {
      // Dispatch failure action on login failure
      
      const axiosError = error as AxiosError;
      console.error(axiosError);
      if (axiosError.response && axiosError.response.status === 403) {
        dispatch(loginFailure("Invalid username or password"));
      } else {
        dispatch(loginFailure("An error occurred during login"));
      }
    }
  }
}
