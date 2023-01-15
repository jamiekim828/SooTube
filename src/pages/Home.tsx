import React, { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getHomePageVideos } from '../redux/reducers/getHomePageVideos';
import { RootState } from '../redux/store';

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state: RootState) => state.sootube.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  console.log(videos);

  return (
    <div className='max-h-screen over-flow-hidden'>
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>
      <div className='flex' style={{ height: '92.5vh' }}>
        <Sidebar />
      </div>
    </div>
  );
}
