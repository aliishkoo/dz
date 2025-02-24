import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSliderData = createAsyncThunk("slider/fetchData", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10");
    return response.data;
});

const sliderSlice = createSlice({
    name: "slider",
    initialState: { data: [], loading: false, error: null },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSliderData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSliderData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSliderData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const store = configureStore({
    reducer: { slider: sliderSlice.reducer },
});