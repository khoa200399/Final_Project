import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: {}
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.info = action.payload
        }
    }
})

export const { setInfo } = commonSlice.actions
export default commonSlice.reducer