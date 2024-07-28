// src/components/LanguageTranslator.js
import React, { useState } from 'react';
import { translate } from '@vitalets/google-translate-api';

function LanguageTranslator() {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');

  const translateText = async () => {
    try {
      const { text: translatedText } = await translate(text, { to: 'en' });
      setTranslated(translatedText);
    } catch (error) {
      console.error('Error:', error);
      setTranslated('Translation failed');
    }
  };

  return (
    <div>
      <h2>Language Translator</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={translateText}>Translate</button>
      <p>Translated Text: {translated}</p>
    </div>
  );
}

export default LanguageTranslator;
