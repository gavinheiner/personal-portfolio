import { useState, useEffect, useRef } from 'react';
import { phrases } from '../data/phrases';

const Header: React.FC = () => {
  const [displayText, setDisplayText] = useState("a software engineer.");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseNumber, setPhraseNumber] = useState(0);
  const [typingDelayInMilliseconds, setTypingDelayInMilliseconds] = useState(25);
  
  const timerRef = useRef<number | null>(null);
  
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const currentIndex = phraseNumber % phrases.length;
      const currentPhrase = phrases[currentIndex];
      
      if (isDeleting) {
        setTypingDelayInMilliseconds(25);
        if (displayText.length > 0) {
          setDisplayText(prev => prev.substring(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseNumber(prev => prev + 1);
        }
      } else {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        } else {
          setTypingDelayInMilliseconds(3500);
          setIsDeleting(true);
        }
      }
    }, typingDelayInMilliseconds);
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [displayText, isDeleting, phraseNumber, typingDelayInMilliseconds, phrases]);

  return (
    <header className="pt-32 pb-16 md:pt-64 md:pb-48 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 flex flex-col justify-center items-center">
        <div className="flex items-center">
          Hi, I'm <span className="text-blue-600 ml-2">Gavin</span>,
        </div>
        <div className="h-16 md:h-auto mt-2" style={{ minWidth: "50px", textAlign: "center" }}>
          <span className="inline-block">
            {displayText}
            <span className="border-r-2 border-blue-600 ml-1" style={{ animation: 'blink 1s step-end infinite' }}></span>
          </span>
        </div>
      </h1>
      </div>
    </header>
  );
};

export default Header;