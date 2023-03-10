import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
    data: {},
    status: " idle",
    error: null,
}
export const login = createAsyncThunk("user/login",async(user) => {
    const response = await api("post", "member/login", user)
    return response.data;
})
export const getMe = createAsyncThunk("user/me",async() => {
    const response = await api("get", "member/me")
    return response.data;
})
const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.data = initialState.data;
            state.error = initialState.error;
            state.status = initialState.status;
            localStorage.clear();
        }
    },
    extraReducers(builder){
        builder.addCase(login.pending, (state, action) => {
            state.status = "loading";
        }).addCase(login.fulfilled, (state, action) =>  {
            console.log(action.payload)
            state.status = "succeeded";
            state.data = action.payload;
            localStorage.setItem("token", action.payload.token);
        }).addCase(login.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }).addCase(getMe.pending, (state, action) => {
            state.status = "loading";
        }).addCase(getMe.fulfilled, (state, action) =>  {
            state.status = "succeeded";
            state.data = action.payload;
        }).addCase(getMe.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    

},
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;