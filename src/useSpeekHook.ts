// useSpeekHook.ts
import { useSpeechSynthesis } from "react-speech-kit";
import { useState, useCallback } from "react";

interface UseSpeekHook {
  speakText: (text: string) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
  supported: boolean;
  error: string | null;
}

export function useSpeekHook(): UseSpeekHook {
  const { speak, speaking, cancel, supported } = useSpeechSynthesis();
  const [error, setError] = useState<string | null>(null);

  const speakText = useCallback(
    (text: string) => {
      if (!supported) {
        setError("Speech synthesis is not supported in this browser.");
        return;
      }
      if (!text || text.trim() === "") {
        setError("Cannot speak an empty text.");
        return;
      }
      setError(null);
      speak({ text });
    },
    [speak, supported]
  );

  const stopSpeaking = useCallback(() => {
    cancel();
  }, [cancel]);

  return {
    speakText,
    stopSpeaking,
    isSpeaking: speaking,
    supported,
    error,
  };
}
