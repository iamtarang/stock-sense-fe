import React, { useState, useEffect, useRef } from 'react';

// Define types for STT
interface STTProps {
  onResult: (transcript: string, isFinal: boolean) => void;
  onError: (error: string) => void;
  continuous?: boolean;
  language?: string;
  autoStart?: boolean;
}

// Fix for TypeScript SpeechRecognition type
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  interpretation: any;
  emma: Document | null;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

// SpeechRecognition interface
interface SpeechRecognitionInterface extends EventTarget {
  continuous: boolean;
  grammars: any;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onaudioend: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onaudiostart: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onend: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onerror: ((this: SpeechRecognitionInterface, ev: SpeechRecognitionErrorEvent) => any) | null;
  onnomatch: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onresult: ((this: SpeechRecognitionInterface, ev: SpeechRecognitionEvent) => any) | null;
  onsoundend: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onstart: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

// SpeechRecognition constructor
interface SpeechRecognitionConstructor {
  new (): SpeechRecognitionInterface;
  prototype: SpeechRecognitionInterface;
}

declare global {
  interface Window {
    SpeechRecognition: SpeechRecognitionConstructor;
    webkitSpeechRecognition: SpeechRecognitionConstructor;
  }
}

export const SpeechToText: React.FC<STTProps> = ({
  onResult,
  onError,
  continuous = true,
  language = 'en-US',
  autoStart = false,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInterface | null>(null);

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    // Initialize recognition
    const recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = true;
    recognition.lang = language;

    // Set up event handlers
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const lastResult = event.results[event.results.length - 1];
      const transcript = lastResult[0].transcript;
      const isFinal = lastResult.isFinal;
      
      onResult(transcript, isFinal);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (event.error === 'not-allowed') {
        setPermissionGranted(false);
      }
      onError(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      // Restart if continuous mode is enabled and we're still supposed to be listening
      if (continuous && isListening) {
        recognition.start();
      } else {
        setIsListening(false);
      }
    };

    // Store reference
    recognitionRef.current = recognition;

    // Check microphone permission
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        setPermissionGranted(true);
        if (autoStart) {
          startListening();
        }
      })
      .catch(() => {
        setPermissionGranted(false);
      });

    // Cleanup on unmount
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [continuous, language, autoStart, onResult, onError, isListening]);

  const startListening = () => {
    if (!isSupported || !recognitionRef.current) return;
    
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  };

  const stopListening = () => {
    if (!isSupported || !recognitionRef.current) return;
    
    recognitionRef.current.stop();
    setIsListening(false);
  };

  if (!isSupported) {
    return (
      <div className="p-4 text-center bg-red-50 text-red-600 rounded-lg shadow">
        Speech recognition is not supported in this browser.
      </div>
    );
  }

  if (permissionGranted === false) {
    return (
      <div className="p-4 text-center bg-yellow-50 text-yellow-700 rounded-lg shadow">
        Microphone access is required for speech recognition. Please allow microphone access in your browser settings.
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-center space-x-4">
        {isListening ? (
          <button
            onClick={stopListening}
            className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
          >
            Stop Listening
          </button>
        ) : (
          <button
            onClick={startListening}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Start Listening
          </button>
        )}
      </div>
      
      {isListening && (
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-blue-400 opacity-75"></div>
            <div className="relative inline-flex rounded-full h-6 w-6 bg-blue-500"></div>
          </div>
          <span className="ml-3 text-blue-600 font-medium">Listening...</span>
        </div>
      )}
      
      {permissionGranted === null && (
        <div className="text-center text-gray-500 text-sm">
          Waiting for microphone permission...
        </div>
      )}
    </div>
  );
};

// Sample usage with transcription display
export const SpeechToTextApp: React.FC = () => {
  const [transcript, setTranscript] = useState('');
  const [finalTranscript, setFinalTranscript] = useState('');
  const [error, setError] = useState('');

  const handleResult = (text: string, isFinal: boolean) => {
    setTranscript(text);
    if (isFinal) {
      setFinalTranscript(prev => prev + ' ' + text);
    }
  };

  const handleError = (errorMsg: string) => {
    setError(errorMsg);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Speech Recognition</h2>
      
      <SpeechToText 
        onResult={handleResult} 
        onError={handleError}
        continuous={true}
      />
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg">
          <p className="font-medium">Error: {error}</p>
        </div>
      )}
      
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Current Speech</h3>
        <div className="bg-white p-4 rounded-lg min-h-12 shadow-inner">
          {transcript ? (
            <p className="text-gray-800">{transcript}</p>
          ) : (
            <p className="text-gray-400 italic">Start speaking to see your words here...</p>
          )}
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Transcript</h3>
        <div className="bg-white p-4 rounded-lg min-h-32 shadow-inner">
          {finalTranscript ? (
            <p className="text-gray-800">{finalTranscript}</p>
          ) : (
            <p className="text-gray-400 italic">Your completed phrases will appear here...</p>
          )}
        </div>
        {finalTranscript && (
          <button 
            onClick={() => setFinalTranscript('')}
            className="mt-2 px-4 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors"
          >
            Clear Transcript
          </button>
        )}
      </div>
    </div>
  );
};

export default SpeechToTextApp;