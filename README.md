[![npm version](https://badge.fury.io/js/react-ts--countdown-hook.svg)](https://badge.fury.io/js/react-ts--countdown-hook)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shamim-hasnain/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/hasnain_bd)
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/hasnain.dev)

# React Text to Speech Hook

A custom and handy React hook for text-to-speech functionality, built on top of `react-speech-kit`. This hook provides a simple interface to convert text into speech in your React applications, with added features and error handling.

## Installation

You can install the package using npm or yarn:

```bash
npm install react-text-to-speech
```

or

```bash
yarn add react-text-to-speech
```

## Usage

Here's a basic example of how to use the `useSpeekHook` in your React component:

```jsx
import React, { useState } from "react";
import { useSpeekHook } from "react-text-to-speech";

const App = () => {
  const [text, setText] = useState("");
  const { speakText, stopSpeaking, isSpeaking, supported, error } =
    useSpeekHook();

  const handleSpeak = () => {
    speakText(text);
  };

  if (!supported) {
    return <div>Speech synthesis is not supported in this browser.</div>;
  }

  return (
    <div>
      <h1>React Text to Speech</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak..."
      />
      <button onClick={handleSpeak} disabled={isSpeaking}>
        {isSpeaking ? "Speaking..." : "Speak"}
      </button>
      <button onClick={stopSpeaking} disabled={!isSpeaking}>
        Stop
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default App;
```

## API

The `useSpeekHook` returns an object with the following properties:

| Property       | Type                     | Description                                                          |
| -------------- | ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `speakText`    | `(text: string) => void` | A function to start speaking the provided text.                      |
| `stopSpeaking` | `() => void`             | A function to stop the speech synthesis immediately.                 |
| `isSpeaking`   | `boolean`                | A boolean that is `true` when speech is currently being synthesized. |
| `supported`    | `boolean`                | A boolean that is `true` if the browser supports speech synthesis.   |
| `error`        | `string                  | null`                                                                | Contains an error message if something goes wrong, otherwise `null`. |

## License

This project is licensed under the MIT License.
