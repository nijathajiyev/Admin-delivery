import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 data: []
}

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRestaurants: (state, action)=>{
state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurants } = restaurantsSlice.actions

export default restaurantsSlice.reducer