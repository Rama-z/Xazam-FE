import { configureStore } from '@reduxjs/toolkit';
import regSlice from "./reducers/regSlice"


const store = configureStore({
    reducer: {
        regSlice : regSlice,
    }
    
})

export default store;