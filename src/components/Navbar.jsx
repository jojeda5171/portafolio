"use client";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import Link from "@mui/material/Link";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";

/* importar los estilos */
import "@/components/navbarStyles.css";

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <nav className="z-30 fixed bottom-4 inset-x-0 flex justify-center">
        <div className="grid gap-x-5 gap-y-4 grid-cols-5 px-5 py-1 bg-black bg-opacity-50 rounded-full border border-[#00DDFF] shadow-[#00DDFF] shadow-2xl ">
          {/* <div className="grid gap-x-5 gap-y-4 grid-cols-5 px-5 py-1 bg-black bg-opacity-50 rounded-full shadow-xl"> */}
          <Link
            href="#HOME"
            size="small"
            title="home"
            className="bg-transparent transform transition-transform hover:bg-transparent hover:scale-150 z-10]"
          >
            <HomeOutlinedIcon color="white" />
          </Link>
          <Link
            href="#ABOUT ME"
            size="small"
            title="About me"
            className="bg-transparent transform transition-transform hover:bg-transparent hover:scale-150 z-10"
          >
            <PersonOutlineOutlinedIcon color="white" />
          </Link>
          <Link
            href="#PROJECTS"
            size="small"
            title="Projects"
            className="bg-transparent transform transition-transform hover:bg-transparent hover:scale-150 z-10"
          >
            <LaptopChromebookOutlinedIcon color="white" />
          </Link>
          <Link
            href="#SKILLS"
            size="small"
            title="Skills"
            className="bg-transparent transform transition-transform hover:bg-transparent hover:scale-150 z-10"
          >
            <CodeOffOutlinedIcon color="white" />
          </Link>
          <Link
            href="#CONTACT ME"
            size="small"
            title="Contact me"
            className="bg-transparent transform transition-transform hover:bg-transparent hover:scale-150 z-10"
          >
            <ContactMailOutlinedIcon color="white" />
          </Link>
        </div>
      </nav>
    </ThemeProvider>
  );
}

export default Navbar;

/* 
<div className="fixed bottom-4 inset-x-0 flex justify-center">
      <div className="grid gap-x-5 gap-y-4 grid-cols-5 px-5 py-1 bg-black bg-opacity-50 rounded-full shadow-xl">
        <Link color="primary" aria-label="home" title="home">
          <HomeOutlinedIcon />
        </Link>
        <Link color="primary" aria-label="About me" title="About me">
          <PersonOutlineOutlinedIcon />
        </Link>
        <Link color="secondary" aria-label="projects" title="Projects">
          <LaptopChromebookOutlinedIcon />
        </Link>
        <Link color="secondary" aria-label="skills" title="Skills">
          <CodeOffOutlinedIcon />
        </Link>
        <Link color="secondary" aria-label="contact me" title="Contact me">
          <ContactMailOutlinedIcon />
        </Link>
      </div>
    </div>
*/
