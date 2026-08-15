import { useState, useEffect } from 'react';

export function useTypingEffect(phrases, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 1800) {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIdx];
    let timer;

    if (!isDeleting) {
      setTypedText(currentPhrase.substring(0, charIdx));
      if (charIdx < currentPhrase.length) {
        timer = setTimeout(() => setCharIdx(prev => prev + 1), typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      setTypedText(currentPhrase.substring(0, charIdx));
      if (charIdx > 0) {
        timer = setTimeout(() => setCharIdx(prev => prev - 1), deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIdx(prev => (prev + 1) % phrases.length);
        timer = setTimeout(() => setCharIdx(0), 400);
      }
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return typedText;
}
