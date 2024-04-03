import React, { createContext, useState } from 'react';

const VideoContext = createContext({
  videos: [],
  addVideo: () => {}
});

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const addVideo = (videoData) => {
    setVideos([...videos, videoData]);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
