import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerReducer'

export default configureStore({
    reducer: {
        player: playerReducer,
    },
})