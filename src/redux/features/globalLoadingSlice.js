import { createSlice } from '@reduxjs/toolkit'

export const globalLoadingSlice = createSlice({
    name: "GlobalLoading",
    initialState: {
        globalLoading: false,
    },
    reducers: {
        setGlobalLoading: (state, action) => {
            state.globalLoading = action.payload
        },
    }
})

export const {
    setThemeMode
} = globalLoadingSlice.actions

export default globalLoadingSlice.reducer