"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useState, useEffect } from "react";
import "@/components/asideLeftStyles.css";
import Typewriter from "@/components/TypeWrite";
import Link from "next/link";
/* import Typewriter from "typewriter-effect"; */

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function AsideLeft() {
  const [currentSection, setCurrentSection] = useState("HOME"); // Estado local para el nombre de la sección actual
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setCurrentSection(id); // Actualizar el estado con el ID de la sección visible
        }
      });
    };

    window.addEventListener("scroll", handleScroll); // Agregar evento de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiar evento al desmontar el componente
    };
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <ThemeProvider theme={theme}>
      {/* lg:w-1/12 md:w-1/12 sm:w-1/12 xl:w-1/12 2xl:w-1/12 */}
      <aside className="z-50 w-1/12 h-screen fixed top-0 left-0 overflow-y-auto flex justify-center">
        <div className="fixed bottom-0 grid grid-cols-1 place-content-between place-items-center h-screen py-5">
          {/* <div className="fixed top-0 grid grid-cols-1 place-content-between place-items-center h-screen py-5"> */}
          <div>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Link href="https://github.com/jojeda5171/">
                <Avatar alt="José Ojeda" src="/img/avatar/listo.png" />
              </Link>
            </StyledBadge>
          </div>
          {/* texto que indique en que seccion esta */}
          <div
            style={{ color: theme.palette.secondary.main }}
            /* className="grid-cols-1 place-items-center font-bold text-center" */
          >
            {/*  */}
            <Typewriter
              currentSection={currentSection}
              className="ininline-block transform rotate-90 origin-center text-xl whitespace-nowrap tracking-widest"
            />

            {/* <p className="ininline-block transform rotate-90 origin-center text-xl whitespace-nowrap animate-pulse tracking-widest">
              {currentSection}
            </p> */}
          </div>

          <div className="grid-cols-1 place-items-center tracking-widest font-serif">
            <p
              style={{ color: theme.palette.secondary.main }}
              className="animate-bounce"
            >
              CV
            </p>
            <Link
              href="https://1drv.ms/b/s!AlybSi_bVGVMgqYEiHfeMmVOQzkheA?e=oCN0M3"
              download
            >
              <CloudDownloadIcon
                color="secondary"
                className="animate-pulse hover:scale-150 icon"
              />
            </Link>
          </div>
        </div>
      </aside>
    </ThemeProvider>
  );
}

export default AsideLeft;
