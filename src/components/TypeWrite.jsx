import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = ({ currentSection }) => {
  const [isTyping, setIsTyping] = useState(true);

  return (
    <div className="inline-block transform rotate-90 origin-center text-xl whitespace-nowrap tracking-widest font-serif">
      <Typewriter
        options={{
          strings: [currentSection],
          autoStart: isTyping,
          loop: true, // Indica que se repita constantemente
          delay: 200, // Velocidad de tipeo
          deleteSpeed: 200, // Velocidad de borrado
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(currentSection)
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
