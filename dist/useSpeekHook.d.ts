interface UseSpeekHook {
    speakText: (text: string) => void;
    stopSpeaking: () => void;
    isSpeaking: boolean;
    supported: boolean;
    error: string | null;
}
export declare function useSpeekHook(): UseSpeekHook;
export {};
//# sourceMappingURL=useSpeekHook.d.ts.map