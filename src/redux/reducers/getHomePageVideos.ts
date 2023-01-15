import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { SOOTUBE_API_URL } from '../../utils/constants';
import { RootState } from '../store';
import { parseData } from '../../utils';
import { HomePageVideos } from '../../types';

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
  'sootube/homePageVideos',
  async (isNext: boolean, { getState }) => {
    const {
      sootube: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;

    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${SOOTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ''
      }`
    );
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }
);
