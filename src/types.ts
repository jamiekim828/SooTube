export type InitialState = {
  videos: HomePageVideos[];
  currentPlaying: CurrentPlaying | null;
  searchTerm: string;
  searchResults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
};

export type HomePageVideos = {
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  videoThumbnail: string;
  videoLink: string;
  videoDuration: string;
  videoViews: string;
  videoAge: string;
  channelInfo: {
    id: string;
    image: string;
    name: string;
  };
};
export type CurrentPlaying = {
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  videoViews: string;
  videoLikes: string;
  videoAge: string;
  channelInfo: {
    id: string;
    image: string;
    name: string;
    subscribers: string;
  };
};
export type RecommendedVideos = {
  videoId: string;
  videoTitle: string;
  videoThumbnail: string;
  videoDuration: string;
  videoViews: string;
  videoAge: string;
  channelInfo: {
    id: string;
    name: string;
  };
};

export type Item = {
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    publishedAt: Date;
    channelTitle: string;
    channelId: string;
  };
  contentDetails: { upload: { videoId: string } };
};
