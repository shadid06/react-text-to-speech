// useSpeekHook.ts
import { useSpeechSynthesis } from "react-speech-kit";
import { useState, useCallback } from "react";
export function useSpeekHook() {
    const { speak, speaking, cancel, supported } = useSpeechSynthesis();
    const [error, setError] = useState(null);
    const speakText = useCallback((text) => {
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
    }, [speak, supported]);
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
//# sourceMappingURL=useSpeekHook.js.map