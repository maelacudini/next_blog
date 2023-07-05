import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    password: '',
    isLoggedIn: false
}

const loginslice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isLoggedIn= true,
            state.username= action.payload.username,
            state.password= action.payload.password
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.username = '';
            state.password = '';
        },
    },
});

export const { loginUser, logoutUser } = loginslice.actions;

export default loginslice.reducer;