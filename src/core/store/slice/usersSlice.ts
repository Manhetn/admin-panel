// import { createSlice } from '@reduxjs/toolkit';
// import { AxiosError } from 'axios';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { HttpService } from '@services';
import { API_CONFIG } from '@configs';
import { IUserData, IUserTransactions } from '@interfaces';
import { AxiosError } from 'axios';
import { ISelectedUser } from 'src/core/interfaces/user';

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
  userTransactions: IUserTransactions[] | null;
  selectedUser: ISelectedUser | null;
}

const initialState: IUsersState = {
  isLoading: false,
  error: null,
  usersData: null,
  userTransactions: null,
  selectedUser: null,
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
    usersSetUserTransactions: (
      state,
      action: PayloadAction<IUserTransactions[] | null>
    ) => {
      state.userTransactions = action.payload;
    },
    usersSetSelectedUser: (
      state,
      action: PayloadAction<ISelectedUser | null>
    ) => {
      state.selectedUser = action.payload;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;

const {
  usersRequested,
  usersRequestedSuccess,
  usersRequestedFaild,
  usersSetData,
  usersSetSelectedUser,
} = actions;

export const isUsersLoading = () => (state: RootState) => state.users.isLoading;

export const loadUsers = () => async (dispatch: AppDispatch) => {
  dispatch(usersRequested());

  try {
    const data: IUserData[] = await HttpService.get(API_CONFIG.endpoints.users);

    dispatch(usersSetData(data));
    dispatch(usersRequestedSuccess());
  } catch (error) {
    const err = error as AxiosError;

    dispatch(usersRequestedFaild(err.message));
  }
};

export const loadUserTransactions =
  (userData: IUserData) => async (dispatch: AppDispatch) => {
    dispatch(usersRequested());

    try {
      const data: IUserTransactions[] = await HttpService.get(
        `${API_CONFIG.endpoints.user}/${userData.id}/transactions`
      );

      dispatch(
        usersSetSelectedUser({
          profile: userData,
          transactions: data,
        })
      );
      // dispatch(usersSetUserTransactions(data));
      dispatch(usersRequestedSuccess());
    } catch (error) {
      const err = error as AxiosError;

      dispatch(usersRequestedFaild(err.message));
    }
  };

export const getUsersList = () => (state: RootState) => state.users.usersData;

export const getUserTransactions = () => (state: RootState) =>
  state.users.userTransactions;

export const getSelectedUser = () => (state: RootState) =>
  state.users.selectedUser;

export default usersReducer;
