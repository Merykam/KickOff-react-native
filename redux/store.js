import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerReducer'
import matchReducer from './matchReducer'

export default configureStore({
    reducer: {
        player: playerReducer,
        favoritmatches:matchReducer
    },
})