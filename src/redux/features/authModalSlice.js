import { createSlice } from '@reduxjs/toolkit'

export const authModalSlice = createSlice({
    name: "AuthModal",
    initialState: {
        authModalOpen: false,
    },
    reducers: {
        setAuthModalOpen: (state, action) => {
            state.themeMode = action.payload
        },
    }
})

export const {
    setAuthModalOpen
} = authModalSlice.actions

export default authModalSlice.reducer