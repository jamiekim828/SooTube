import React from 'react';
import { RecommendedVideos } from '../types';

type PropType = {
  data: RecommendedVideos;
};

export default function WatchCard({ data }: PropType) {
  console.log(data);
  return <div>WatchCard</div>;
}
