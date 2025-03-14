import React, { useState } from 'react';
import { TextToSpeech, VoiceSelector, SpeechSettings } from '../components/TTS';
import { SpeechToText } from '../components/STT';

const SpeechPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Speech Services Demo</h1>
      
      <div className="space-y-10">
        <TextToSpeechSection />
        <div className="border-t border-gray-200 my-8"></div>
        <SpeechToTextSection />
      </div>
    </div>
  );
};

// Text-to-Speech implementation section
const TextToSpeechSection: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [rate, setRate] = useState<number>(1.0);
  const [pitch, setPitch] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(1.0);

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-gray-700">Text-to-Speech</h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <VoiceSelector
            onVoiceSelected={setSelectedVoice}
            currentVoice={selectedVoice}
          />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <SpeechSettings
            rate={rate}
            pitch={pitch}
            volume={volume}
            onRateChange={setRate}
            onPitchChange={setPitch}
            onVolumeChange={setVolume}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="speech-text" className="block font-medium text-gray-700">Text to speak:</label>
          <textarea
            id="speech-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter text to be spoken here..."
          />
        </div>
        
        <div className="mt-4">
          <TextToSpeech
            text={text}
            rate={rate}
            pitch={pitch}
            volume={volume}
            voice={selectedVoice}
          />
        </div>
      </div>
    </section>
  );
};

// Speech-to-Text implementation section
const SpeechToTextSection: React.FC = () => {
  const [transcript, setTranscript] = useState<string>('');
  const [finalTranscript, setFinalTranscript] = useState<string>('');
  const [sttError, setSttError] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('en-US');

  // Handle STT results
  const handleSpeechResult = (result: string, isFinal: boolean) => {
    setTranscript(result);
    if (isFinal) {
      setFinalTranscript(prev => prev ? `${prev}\n${result}` : result);
    }
  };

  // Handle STT errors
  const handleSpeechError = (error: string) => {
    setSttError(`Speech recognition error: ${error}`);
    setTimeout(() => setSttError(null), 5000); // Clear error after 5 seconds
  };

  const clearTranscripts = () => {
    setTranscript('');
    setFinalTranscript('');
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-gray-700">Speech-to-Text</h2>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <label htmlFor="language-select" className="block font-medium text-gray-700">Language:</label>
          <select 
            id="language-select" 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="en-US">English (US)</option>
            <option value="en-GB">English (UK)</option>
            <option value="en-AU">English (Australia)</option>
          </select>
        </div>
        
        <div>
          <SpeechToText
            onResult={handleSpeechResult}
            onError={handleSpeechError}
            continuous={true}
            language={language}
          />
        </div>
        
        {sttError && (
          <div className="bg-red-50 text-red-700 p-3 rounded-md border-l-4 border-red-600">
            {sttError}
          </div>
        )}
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-gray-700">Current Speech</h3>
            <p className="italic text-gray-600 min-h-8">{transcript}</p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Transcript</h3>
            <textarea
              readOnly
              value={finalTranscript}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
            />
            <button 
              onClick={clearTranscripts}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Clear Transcript
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeechPage;