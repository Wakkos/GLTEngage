import {Delete, Edit, Play} from "../SvgComponents"
import "./Performance.scss";

function Performance({ video }) {

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="performance-card">
      <img
      src="https://fakeimg.pl/200x100/?retina=1&text=Video Cover&font=noto"
      className="performance-card__image"
      />
       <p className="performance-card__duration">Duration: {formatDuration(video.duration)}</p>

      <div className="performance-card__content">
        <h6 className="performance-card__title">{video.title}</h6>
        <time className="performance-card__date" datetime={video.date}>Date or recording: {video.date}</time>

      </div>

      <div className="performance-card__actions">
        <Delete />
        <Edit />
        <Play />
      </div>

    </div>
  );
}

export default Performance;