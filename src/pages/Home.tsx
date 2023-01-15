import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';

import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getHomePageVideos } from '../redux/reducers/getHomePageVideos';
import { RootState } from '../redux/store';
import { HomePageVideos } from '../types';

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state: RootState) => state.sootube.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className='max-h-screen over-flow-hidden'>
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>
      <div className='flex' style={{ height: '92.5vh' }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={uuidv4()} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
