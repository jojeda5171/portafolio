"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import CodeIcon from "@mui/icons-material/Code";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Avatar from "@mui/material/Avatar";

/* import "@/components/aboutMeStyles.css"; */

function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-10/12 flex flex-col justify-center font-serif">
        <div className="flex justify-center 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-5">
          <Avatar
            sx={{ width: 150, height: 150 }}
            alt="José Ojeda"
            src="/img/avatar/listo.png"
            className="animate-pulse border border-[#00DDFF] shadow-md shadow-[#00DDFF]"
          />
        </div>
        <div
          style={{ color: theme.palette.secondary.main }}
          className=" grid gap-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-5 gap-x-5 rounded-xl shadow-xl"
        >
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl tracking-wider">Who am I?</h1>
            <h2 className="font-extralight text-lg tracking-wide">
              Software Engineer | Backend Developer
            </h2>
            <p className="text-white text-justify text-base">
              Throughout my university career, I have actively participated in
              the execution and collaboration in multiple projects, which has
              contributed significantly to my professional development. During
              this time, I have had the opportunity to immerse myself in a wide
              range of tools and technologies, which has strengthened my skills
              and knowledge comprehensively.
            </p>
          </div>
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl tracking-wider">Education</h1>
            <div className="flex items-center space-x-2">
              <Avatar alt="UTA" src="/img/logo/logo-uta.png" />
              <div>
                <h2 className="w-full font-extralight text-lg tracking-wide">
                  2024 - Technical University of Ambato
                </h2>
                <h3 className="w-full text-white text-base font-mono">
                  Software Engineering
                </h3>
                <hr />
              </div>
            </div>
            <h1 className="font-semibold text-xl tracking-wider">
              Certificate
            </h1>
            <div className="flex items-center columns-2 space-x-2">
              <div>
                <Avatar alt="Python" src="/img/logo/python1.png" />
              </div>
              <div className="grid grid-cols-1 w-full">
                <h2 className="font-extralight text-lg tracking-wide">
                  2024 - Cisco
                </h2>
                <h3 className="w-full text-white text-base font-mono">
                  Python Essentials 1
                </h3>
                <hr />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Avatar alt="Python" src="/img/logo/python2.png" />
              <div className="grid grid-cols-1 w-full">
                <h2 className="font-extralight text-lg tracking-wide">
                  2024 - Cisco
                </h2>
                <h3 className="w-full text-white text-base font-mono">
                  Python Essentials 2
                </h3>
                <hr />
              </div>
            </div>
          </div>
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl tracking-wider">
              My Experpertice
            </h1>
            <div className="flex items-center space-x-2">
              <CodeIcon color="white" sx={{ fontSize: 40 }} />
              <div className="grid grid-cols-1 w-full">
                <h2 className="font-extralight text-lg tracking-wide">
                  Backend Developer
                </h2>
                <h3 className="text-white text-base">I have experience in developing backend applications.</h3>
                <hr />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <WebOutlinedIcon color="white" sx={{ fontSize: 40 }} />
              <div className="grid grid-cols-1 w-full">
                <h2 className="font-extralight text-lg tracking-wide">
                  Frontend Developer
                </h2>
                <h3 className="text-white text-base">I have experience in developing frontend applications.</h3>
                <hr />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <AssignmentOutlinedIcon color="white" sx={{ fontSize: 40 }} />
              <div className="grid grid-cols-1 w-full">
                <h2 className="font-extralight text-lg tracking-wide">
                  Project Manager
                </h2>
                <h3 className="text-white text-base">I have experience in managing projects.</h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default AboutMe;
