import { createSlice } from '@reduxjs/toolkit'

let initial = {
    count: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState:  initial,
  reducers: {
    increment: (state)=>{
        state.count = state.count + 1
    }
  }
})
export const {increment} = counterSlice.actions
export default counterSlice.reducer