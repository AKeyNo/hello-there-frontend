import { configureStore } from '@reduxjs/toolkit';

import sayingsReducer from '../features/sayings/sayingsSlice'
//import usersReducer from '../features/users/usersSlice.js'

export default configureStore({
  reducer: {
    sayings: sayingsReducer,
//    users: usersReducer,
  },
});
