import React, { useContext, useState, useRef } from 'react';
import VideoContext from '../../../util/VideoContext';
import './Record.scss';


function VideoRecorder() {
  const { addVideo } = useContext(VideoContext);
  const [recording, setRecording] = useState(false);
  const [title, setTitle] = useState('');
  const [videoBlob, setVideoBlob] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const videoRef = useRef();
  const mediaRecorderRef = useRef();

  const startRecording = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = mediaStream;
    mediaRecorderRef.current = new MediaRecorder(mediaStream);
    let recordedChunks = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      setVideoBlob(blob);
      const duration = new Date() - startTime;
    };

    mediaRecorderRef.current.start();
    setStartTime(new Date());
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    setRecording(false);
  };
  const saveVideo = () => {
    const videoUrl = URL.createObjectURL(videoBlob);
    const duration = (new Date() - startTime) / 1000;

    addVideo({
      url: videoUrl,
      title: title,
      date: startTime.toISOString(),
      duration: duration
    });

    setTitle('');
    setVideoBlob(null);
  };


  return (
   <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter video title"
      />
      <video ref={videoRef} controls autoPlay playsInline style={{ width: '100%' }}></video>
      {recording
        ? <button onClick={stopRecording} className='btn__alert'>Stop Recording</button>
        : <button onClick={startRecording} className='btn__cta'>Start Recording</button>
      }
      {videoBlob && !recording && (
        <button onClick={saveVideo}>Save Video</button>
      )}
    </div>
  );
}

export default VideoRecorder;
