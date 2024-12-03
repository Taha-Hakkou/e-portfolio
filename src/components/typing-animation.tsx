'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string
  delay?: number
}

export function TypingAnimation({ text, delay = 200 }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  //console.log(text);
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      // if (i < text.length) {
      setDisplayText((prev) => prev + text.charAt(i++));
      //i++;
      //} else {
      if (i === text.length) {
        clearInterval(typingInterval);
      }
    }, delay);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, delay]);

  return (
    <span className="font-mono">
      {displayText}
      <span className={`inline-block w-4 h-8 ml-1 bg-primary ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
}
