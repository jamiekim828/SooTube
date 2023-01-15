import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../types';
import { getHomePageVideos } from './reducers/getHomePageVideos';

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: '',
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};
const SooTubeSlice = createSlice({
  name: 'sootube',
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    // builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
    //   state.videos = action.payload.nextPageToken;
    // });
    // builder.addCase(getVideoDetails.fulfilled, (state, action) => {
    //   state.currentPlaying = action.payload;
    // });
    // builder.addCase(getRecommendedVideos.fulfilled, (state, action)=>{
    //   state.recommendedVideos = action.payload.parsedData
    // })
  },
});

export const store = configureStore({
  reducer: {
    sootube: SooTubeSlice.reducer,
  },
});

export const { clearVideos, changeSearchTerm, clearSearchTerm } =
  SooTubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
