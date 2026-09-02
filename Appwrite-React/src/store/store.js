import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({});

export default store;

// The actual Redux store instance for the whole app — where all slices (right now just auth, more later) 
// get registered so components can subscribe to them.