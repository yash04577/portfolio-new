import { useState, useEffect } from "react";


type props = {
    text: string,
    speed: number,
}

const TypingEffect = ({ text, speed = 100 }:props) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="typing-effect">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};

export default function TypingEffectFun() {
  return (
    <div className="container">
      <TypingEffect text="Hello, this is an animated typing effect!" speed={100} />
    </div>
  );
}
