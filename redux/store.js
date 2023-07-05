import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../redux/postslice';
import loginReducer from '../redux/loginslice'

export default configureStore({
    reducer: {
        posts: postReducer,
        login: loginReducer
    }
})