import React, { useState, useEffect, useRef } from 'react';

// Types for TTS
interface Voice {
  name: string;
  lang: string;
  voiceURI: string;
  localService: boolean;
  default: boolean;
}

interface TTSProps {
  text: string;
  autoPlay?: boolean;
  rate?: number;
  pitch?: number;
  volume?: number;
  voice?: SpeechSynthesisVoice | null;
}

// ==================== TEXT TO SPEECH COMPONENTS ====================

export const TextToSpeech: React.FC<TTSProps> = ({
  text,
  autoPlay = false,
  rate = 1,
  pitch = 1,
  volume = 1,
  voice = null,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check if browser supports speech synthesis
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    // Auto-play if enabled
    if (autoPlay && text && !isSpeaking) {
      speak();
    }

    // Cleanup on unmount
    return () => {
      if (utteranceRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, [text, autoPlay]);

  const speak = () => {
    if (!isSupported || !text) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    
    // Set the voice if provided
    if (voice) {
      utterance.voice = voice;
    }

    // Set event handlers
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utterance.onerror = (event) => {
      console.error('TTS Error:', event);
      setIsSpeaking(false);
      setIsPaused(false);
    };

    // Store reference to utterance for pause/resume
    utteranceRef.current = utterance;

    // Start speaking
    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (isSpeaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resume = () => {
    if (isSpeaking && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  if (!isSupported) {
    return <div>Text-to-Speech is not supported in this browser.</div>;
  }

  return (
    <div className="tts-controls">
      <button onClick={speak} disabled={isSpeaking && !isPaused}>
        {isSpeaking && !isPaused ? 'Speaking...' : 'Speak'}
      </button>
      {isSpeaking && (
        <>
          {isPaused ? (
            <button onClick={resume}>Resume</button>
          ) : (
            <button onClick={pause}>Pause</button>
          )}
          <button onClick={stop}>Stop</button>
        </>
      )}
    </div>
  );
};

// Voice selector component for TTS
export const VoiceSelector: React.FC<{
  onVoiceSelected: (voice: SpeechSynthesisVoice) => void;
  currentVoice: SpeechSynthesisVoice | null;
}> = ({ onVoiceSelected, currentVoice }) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to load and set available voices
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices().filter(
        // Filter for English voices only
        voice => voice.lang.includes('en')
      );
      
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        setIsLoading(false);
        
        // Set default voice if none selected
        if (!currentVoice && availableVoices.length > 0) {
          onVoiceSelected(availableVoices[0]);
        }
      }
    };

    // Load voices immediately (works in some browsers)
    loadVoices();

    // Set up event for browsers that load voices asynchronously
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVoice = voices.find(voice => voice.name === e.target.value);
    if (selectedVoice) {
      onVoiceSelected(selectedVoice);
    }
  };

  if (isLoading) {
    return <div>Loading voices...</div>;
  }

  return (
    <div className="voice-selector">
      <label htmlFor="voice-select">Select Voice: </label>
      <select
        id="voice-select"
        value={currentVoice?.name || ''}
        onChange={handleVoiceChange}
      >
        {voices.map(voice => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang}) {voice.localService ? '(Local)' : ''}
          </option>
        ))}
      </select>
    </div>
  );
};

// Speech settings component
export const SpeechSettings: React.FC<{
  rate: number;
  pitch: number;
  volume: number;
  onRateChange: (rate: number) => void;
  onPitchChange: (pitch: number) => void;
  onVolumeChange: (volume: number) => void;
}> = ({ 
  rate, pitch, volume, 
  onRateChange, onPitchChange, onVolumeChange 
}) => {
  return (
    <div className="speech-settings">
      <div className="setting">
        <label htmlFor="rate">Rate: {rate.toFixed(1)}</label>
        <input
          type="range"
          id="rate"
          min="0.1"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => onRateChange(parseFloat(e.target.value))}
        />
      </div>

      <div className="setting">
        <label htmlFor="pitch">Pitch: {pitch.toFixed(1)}</label>
        <input
          type="range"
          id="pitch"
          min="0.1"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => onPitchChange(parseFloat(e.target.value))}
        />
      </div>

      <div className="setting">
        <label htmlFor="volume">Volume: {volume.toFixed(1)}</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

// Sample TTS implementation
export const TextToSpeechApp: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [rate, setRate] = useState<number>(1.0);
  const [pitch, setPitch] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(1.0);

  return (
    <div className="tts-app">
      <h2>Text-to-Speech</h2>
      
      <VoiceSelector
        onVoiceSelected={setSelectedVoice}
        currentVoice={selectedVoice}
      />
      
      <SpeechSettings
        rate={rate}
        pitch={pitch}
        volume={volume}
        onRateChange={setRate}
        onPitchChange={setPitch}
        onVolumeChange={setVolume}
      />
      
      <div className="text-input">
        <label htmlFor="speech-text">Text to speak:</label>
        <textarea
          id="speech-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          cols={50}
          placeholder="Enter text to be spoken here..."
        />
      </div>
      
      <TextToSpeech
        text={text}
        rate={rate}
        pitch={pitch}
        volume={volume}
        voice={selectedVoice}
      />
    </div>
  );
};

export default TextToSpeechApp;