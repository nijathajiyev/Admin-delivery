import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 data: []
}

export const catagorySlice = createSlice({
  name: 'catagory',
  initialState,
  reducers: {
    setCatagory: (state, action)=>{
state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCatagory } = catagorySlice.actions

export default catagorySlice.reducer