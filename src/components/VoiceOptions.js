import React from 'react';

const VoiceOptions = () => {
  const handleVoiceChange = (event) => {
    localStorage.setItem('voiceOption', event.target.value);
  };

  return (
    <div className="voice-options">
      <select onChange={handleVoiceChange} className="form-select">
        <option value="girlBaby">Base</option>
        <option value="boyBaby1">Base 1</option>
        <option value="boyBaby2">Base 2</option>
        <option value="boyBaby3">Base 3</option>
      </select>
    </div>
  );
};

export default VoiceOptions;

