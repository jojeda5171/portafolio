"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

/* import "@/app/portafolio/globals.css"; */

export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-100 grid-col-1">
        <section
          id="HOME"
          className="min-h-screen flex-grow flex justify-center items-center"
        >
          <Home />
        </section>
        <section
          id="ABOUT ME"
          className="min-h-screen flex-grow flex flex-col space-y-4 justify-center items-center font-serif"
        >
          <AboutMe />
        </section>
        <section
          id="PROJECTS"
          className="min-h-screen flex-grow flex justify-center items-center"
        >
          <Projects />
        </section>
        <section
          id="SKILLS"
          className="min-h-screen flex-grow flex justify-center items-center"
        >
          <Skills />
        </section>
        <section
          id="CONTACT ME"
          className="min-h-screen flex-grow flex justify-center items-center"
        >
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
}
