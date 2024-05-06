import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_READ_KEY}`,
};

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async (page = 1) => {
    const url = `https://api.themoviedb.org/3/movie/popular?page=${page}`;
    const options = {
      method: "GET",
      headers,
    };

    const res = await fetch(url, options);
    const movies = await res.json();
    return movies;
  }
);
export const fetchTrendingMovies = createAsyncThunk(
  "movies/fetchTrendingMovies",
  async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week`;
    const options = {
      method: "GET",
      headers,
    };

    const res = await fetch(url, options);
    const movies = await res.json();
    return movies;
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;

    const options = {
      method: "GET",
      headers,
    };

    const res = await fetch(url, options);
    const movie = await res.json();
    return movie;
  }
);

export const fetchGenresMovies = createAsyncThunk(
  "movies/fetchGenresMovies",
  async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

    const options = {
      method: "GET",
      headers,
    };

    const res = await fetch(url, options);
    const movies = await res.json();
    return movies;
  }
);

export const searchByTitle = createAsyncThunk(
  "movies/searchByTitle",
  async ({ searchQuery, page = 1 }, { getState }) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7dab3aae804bb5783bff1c9eb0b70cbe&query=${searchQuery}&page=${page}`;
    const options = {
      method: "GET",
      headers,
    };

    const res = await fetch(url, options);
    return res.json();
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    trendingMovies: [],
    activeMovie: {},
    searchResult: [],
    totalPages: 0,
    currentPage: 1,

    genres: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularMovies = action.payload.results;
        // console.log(state.popularMovies);
      })
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trendingMovies = action.payload.results;
        // console.log(action.payload);
      })
      .addCase(fetchGenresMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenresMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        // change structure of genres bc the o(N) so we will convert it into o(1)
        const newGenres = {};
        action.payload.genres.forEach((element) => {
          newGenres[element.id] = element.name;
        });
        state.genres = newGenres;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activeMovie = action.payload;
      })

      .addCase(searchByTitle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchByTitle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResult = action.payload.results;
        state.totalPages = action.payload.total_pages;
        state.currentPage = action.payload.page;
        console.log(state.searchResult);
      });
  },
});

export default moviesSlice.reducer;
