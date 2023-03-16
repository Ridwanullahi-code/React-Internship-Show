import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const state = {
  movies: [],
  status: null,
};

export const fetchMovies = createAsyncThunk(
  'fetch/movies',
  async () => {
    const request = await axios.get('https://api.tvmaze.com/search/shows?q=all');
    const show = request.data;
    return show;
  },
);

const movieSlicer = createSlice({
  name: 'Movies',
  initialState: state,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => ({
      ...state, status: 'pending',
    }))
      .addCase(fetchMovies.rejected, (state) => ({
        ...state, status: 'rejected',
      }))
      .addCase(fetchMovies.fulfilled, (state, { payload }) => ({
        ...state,
        movies: payload,
        status: 'fulfilled',
      }));
  },
});

export default movieSlicer.reducer;
