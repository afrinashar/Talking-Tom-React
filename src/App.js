import React from 'react';
import AudioRecorder from './components/AudioRecorder';
import VoiceOptions from './components/VoiceOptions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="title ">Talking T😸M</h1>
      <AudioRecorder />
      <VoiceOptions />
    </div>
  );
}

export default App;
