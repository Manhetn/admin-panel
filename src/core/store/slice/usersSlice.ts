// import { createSlice } from '@reduxjs/toolkit';
// import { AxiosError } from 'axios';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { HttpService } from '@services';
import { API_CONFIG } from '@configs';
import { IUserData } from '@interfaces';
import { AxiosError } from 'axios';

// import { IErrorObject } from '../models/errors';
// import { AppDispatch, RootState } from './store';
// // import authService from '../services/auth.service';
// // import userService from '../services/user.servece';
// // import localStorageService from '../services/localStorage.service';
// // import history from '../utils/hystory';

interface IUsersState {
  isLoading: boolean;
  error: string | null;
  usersData: IUserData[] | null;
}

const initialState: IUsersState = {
  isLoading: false,
  error: null,
  usersData: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    usersRequestedSuccess: (state) => {
      state.isLoading = false;
    },
    usersRequestedFaild: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    usersSetData: (state, action: PayloadAction<IUserData[]>) => {
      state.usersData = action.payload;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;

const {
  usersRequested,
  usersRequestedSuccess,
  usersRequestedFaild,
  usersSetData,
} = actions;

export const isUsersLoading = () => (state: RootState) => state.users.isLoading;

export const loadUsers = () => async (dispatch: AppDispatch) => {
  dispatch(usersRequested());

  try {
    const data: IUserData[] = await HttpService.get(API_CONFIG.endpoints.users);
    console.log(data);
    dispatch(usersSetData(data));
    dispatch(usersRequestedSuccess());
  } catch (error) {
    const err = error as AxiosError;

    dispatch(usersRequestedFaild(err.message));
  }
};

export const getUsersList = () => (state: RootState) => state.users.usersData;
// export const getUsersList = () =>

// export const logIn =
//   (payload: IUserLogInData) => async (dispatch: AppDispatch) => {
//     dispatch(userRequested());
//     try {
//       const data = await authService.logIn(payload);
//       dispatch(authRequestSuccess(data));
//       localStorageService.setTokens(data);
//       history.replace('/tasks');
//     } catch (error) {
//       const err = error as AxiosError;
//       dispatch(userRequestedFaild(err));
//     }
//   };

// export const logOut = () => async (dispatch: AppDispatch) => {
//   dispatch(userRequested());
//   try {
//     await userService.logOut();
//     dispatch(userLogOut());
//     localStorageService.removeAuthData();
//     history.replace('/');
//   } catch (error) {
//     const err = error as AxiosError;
//     dispatch(userRequestedFaild(err));
//   }
// };

// export const loadProfile = () => async (dispatch: AppDispatch) => {
//   dispatch(userRequested());
//   try {
//     const data = await userService.get();
//     dispatch(userSetProfile(data));
//   } catch (error) {
//     const err = error as AxiosError;
//     dispatch(userRequestedFaild(err));
//   }
// };

// export const getUserId = () => (state: RootState) => state.user.userId;
// export const getIsLoading = () => (state: RootState) => state.user.isLoading;
// export const getIsLoggedIn = () => (state: RootState) => state.user.isLoggedIn;
// export const getUserProfile = () => (state: RootState) =>
//   state.user.userProfile;
// export const getIsProfileLoaded = () => (state: RootState) =>
//   state.user.isProfileLoaded;
// export const getUserError = () => (state: RootState) => state.user.error;

export default usersReducer;
