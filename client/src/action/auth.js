import * as api from '../api/index.js';
import axios from 'axios';

export const signuphere = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: 'AUTH', data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: 'AUTH', data });

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    console.log("Hello")
    const { data } = await api.getUsers();
    console.log("Hello2")
    dispatch({ type: 'FETCH_ALL', payload: data });
    console.log("HEllo3")
  } catch (error) {
    console.log(error.message);
  }
};