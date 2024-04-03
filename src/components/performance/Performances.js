import React, { useContext, useEffect } from 'react';
import VideoContext from '../../util/VideoContext';
import Performance from './Performance';

function Performances() {
  const { videos } = useContext(VideoContext);

  useEffect(() => {
    console.log('Videos almacenados:', videos);
  }, [videos]);
  return (
    <div className="performance-card__container">
      {videos.map((video, index) => (
        <Performance key={index} video={video} />
      ))}
    </div>
  );
}

export default Performances;
