// const axios = require('axios');

export const FETCH_POLITICIANS = 'FETCH_POLITICIANS';
export const FETCH_POLITICIANS_BEGIN = 'FETCH_POLITICIANS_BEGIN';
export const FETCH_POLITICIANS_SUCCESS = 'FETCH_POLITICIANS_SUCCESS';
export const FETCH_POLITICIANS_FAILURE = 'FETCH_POLITICIANS_FAILURE';

export const fetchPoliticiansBegin = () => ({
  type: FETCH_POLITICIANS_BEGIN
});

export const fetchPoliticiansSuccess = (data) => ({
  type: FETCH_POLITICIANS_SUCCESS,
  data
});

export const fetchPoliticiansFailure = (error) => ({
  type: FETCH_POLITICIANS_FAILURE,
  error
});

export const fetchPoliticians = (data) => ({
  type: FETCH_POLITICIANS,
  data
});

export const REG_USER = 'REG_USER';
export const regUser = (data) => ({
  type: REG_USER,
  data
});

export const LOG_IN = 'LOG_IN';
export const logIn = (data) => ({
  type: LOG_IN,
  data
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = (data) => ({
  type: LOG_OUT,
  data
});
