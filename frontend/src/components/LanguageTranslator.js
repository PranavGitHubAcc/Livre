import React, { useState } from 'react';
import axios from 'axios';
import '../style/LanguageTranslator.css'

function LanguageTranslator() {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [targetLang, setTargetLang] = useState('en');

  const translateText = async () => {
    try {
      const response = await axios.post('http://localhost:4000/translate', {
        text,
        targetLang
      });
      setTranslated(response.data.translatedText);
    } catch (error) {
      console.error('Error:', error);
      setTranslated('Translation failed');
    }
  };

  return (
    <div>

      <h2><strong>Language Translator</strong></h2>
      <div className='boxed'>


      <div className='inp'>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to translate"
          />

          
        <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
        </select>
 
          <button onClick={translateText}>Translate</button>
      </div>
      <p>Translated Text</p>
      <div className='translated'>{translated}</div>
    </div>
    </div>
  );
}

export default LanguageTranslator;
