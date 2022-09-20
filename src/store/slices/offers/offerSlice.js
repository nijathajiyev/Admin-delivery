import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 data: []
}

export const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers: (state, action)=>{
state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOffers } = offerSlice.actions

export default offerSlice.reducer