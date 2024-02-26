import { createSlice } from '@reduxjs/toolkit'

export const matchSlice = createSlice({
  name: 'favoritmatches',
  initialState: {
    value: [],
  },
  reducers: {
    setMatches: (state, action) => {
 
        state.value.push(action.payload)
  


    },

 
  },
})

export const { setMatches } = matchSlice.actions

export default matchSlice.reducer