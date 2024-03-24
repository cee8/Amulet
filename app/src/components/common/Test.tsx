import React, { useState } from 'react';
import { summarizeText } from '../../database/supabase';

const TextSummarizer: React.FC = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    try {
      const summaryText = await summarizeText({ text });
      setSummary(summaryText);
    } catch (error) {
      console.error("Failed to summarize text:", error);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSummarize}>Summarize</button>
      {summary && <p>Summary: {summary}</p>}
    </div>
  );
};

export default TextSummarizer;
