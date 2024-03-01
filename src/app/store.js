import {configureStore} from '@reduxjs/toolkit'
import counterSlicer from './features/counter/counterSlice'
export const store = configureStore({
    reducer : {
        count : counterSlicer
    }
})