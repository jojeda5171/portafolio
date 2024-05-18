'use client';
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import Typewriter from "typewriter-effect";
import { useState } from "react";

function Home() {
  const [isTyping, setIsTyping] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <div className="grid-cols-1 place-items-center text-center">
        <h1
          style={{ color: theme.palette.secondary.main }}
          className="text-4xl font-serif 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl tracking-widest"
        >
          JOSÉ OJEDA
        </h1>
        <h2
          style={{ color: theme.palette.secondary.main }}
          className="w-auto font-serif text-lg tracking-widest 5xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg"
        >
          Backend Developer
        </h2>
        <div className="text-white font-mono tracking-widest">
          <Typewriter
            options={{
              strings: [
                "Hey! I'm José!",
                "I'm a Backend Developer...",
                "I'm also Software Engineer.",
                "And I'm a proud Ecuadorian.",
              ],
              autoStart: isTyping,
              loop: true, // Indica que se repita constantemente
              delay: 100, // Velocidad de tipeo
              deleteSpeed: 100, // Velocidad de borrado
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to my portfolio.")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
          👋
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
