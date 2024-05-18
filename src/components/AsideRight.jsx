"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@/components/navbarStyles.css";
import "@/components/asideRightStyles.css";
import Link from "next/link";
import { useState } from "react";

function AsideRight() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      {/* lg:w-1/12 md:w-1/12 sm:w-1/12 xl:w-1/12 2xl:w-1/12 */}
      <aside className="w-1/12 h-screen fixed top-0 right-0 overflow-y-auto flex justify-center">
        <div className="fixed bottom-0 grid grid-cols-1 gap-y-4 place-items-center">
          <Link href="https://www.linkedin.com/in/joseojeda7/" className="">
            <LinkedInIcon color="secondary" className="hover:scale-150 z-10 icon"/>
          </Link>
          <Link href="https://www.github.com/jojeda5171/" className="">
            <GitHubIcon color="secondary" className="hover:scale-150 z-10 icon"/>
          </Link>
          <Link href="https://www.twitter.com/jojeda5171/" className="">
            <XIcon color="secondary" className="hover:scale-150 z-10 icon"/>
          </Link>
          <Link
            href="https://www.instagram.com/joseluisojedacarrasco/"
            className=""
          >
            <InstagramIcon color="secondary" className="hover:scale-150 z-10 icon"/>
          </Link>
          <div
            style={{ backgroundColor: theme.palette.secondary.main }}
            className="w-0.5 h-20 animate-led"
          >
            {/* linea vertical  */}
          </div>
        </div>
      </aside>
    </ThemeProvider>
  );
}

export default AsideRight;
