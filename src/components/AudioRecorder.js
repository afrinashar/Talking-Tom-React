import React, { useState,useRef } from 'react';
import axios from 'axios';
import {ReactMic} from "react-mic"
import video from "../assets/tom.mp4";
import img from "../assets/p1.png";
import img1 from "../assets/p2.png";
import img2 from "../assets/p3.png";

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const startRecording = () => {
    setRecording(true)
    videoRef.current.pause();
    setIsPlaying(false); 
 };
  const stopRecording = () => {setRecording(false)

  };

  const onStop = (recordedBlob) => {setAudioBlob(recordedBlob.blob)
      
  };
  const uploadAudio = async () => {
    const formData = new FormData();
    formData.append('audio', audioBlob);
    formData.append('voiceOption', localStorage.getItem('voiceOption') || 'girlBaby');

    try {
      const response = await axios.post('https://talking-tom-node.onrender.com/process-audio', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
videoRef.current.play();
    setIsPlaying(true) 
      const audioUrl = `https://talking-tom-node.onrender.com${response.data.audioUrl}`;
      const audio = new Audio(audioUrl);
       
   
    audio.play();
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };
  
   return (
    <div className="audio-recorder">
     
    
      <video
   className="videoPlayer"
   width="50%"
   ref={videoRef}
   src={video}
></video>  <div className="controls">
        <button className="btn btn-round  " onClick={startRecording}><img  width={110}  src={img} alt="Overlay" /></button>
        <button className="btn btn-round" onClick={stopRecording}><img   width={110}  src={img1} alt="Overlay" /></button>
        <button className="btn btn-round" onClick={uploadAudio} disabled={!audioBlob}><img  width={110}  src={img2} alt="Overlay" /></button>
      </div>
 <ReactMic
        record={recording}
        onStop={onStop}
        mimeType="audio/wav"
        strokeColor="#FFFFFF"
        backgroundColor="#00740A"
      />
    </div>
  );
};

export default AudioRecorder;
