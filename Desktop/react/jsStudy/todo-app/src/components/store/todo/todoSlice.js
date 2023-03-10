import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
const initialState = {
    data: [],
    status:"idle",
    error: null,
    page:1,
    maxPage:null,

};

export const getTodos = createAsyncThunk("todos/get", async(page, thunkApi) => {
    const sPage = thunkApi.getState().homeTodos.page
    const data = await api(
        "get",`/todos/friend?page=${sPage}`
    );
    return data.data;
})

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        clearTodo: ((state) => {
            state.data = initialState.data
            state.status = initialState.status
            state.error = initialState.error
            state.page = initialState.page
            state.maxPage = initialState.maxPage
        })
    },
    extraReducers(builder) {
        builder.addCase(getTodos.pending, (state, action) => {
            state.status = "loading";
        }).addCase(getTodos.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = [...state.data, ...action.payload.friendTodos];
            state.maxPage = action.payload.totalPage;
            state.page = state.page+1;
        }).addCase(getTodos.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message
        
        },
        )
    }
      
})

export default todoSlice.reducer;
export const { clearTodo } = todoSlice.actions;