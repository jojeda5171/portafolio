"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import CodeIcon from "@mui/icons-material/Code";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

/* import "@/components/aboutMeStyles.css"; */

function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-10/12 flex flex-col justify-center font-serif space-y-3 py-2">
        <div className="flex justify-center ">
          <Avatar
            sx={{ width: 150, height: 150 }}
            alt="José Ojeda"
            src="/img/avatar/listo.png"
            className="animate-pulse border border-[#00DDFF] shadow-md shadow-[#00DDFF]"
          />
        </div>
        <div
          style={{ color: theme.palette.secondary.main }}
          className=" grid gap-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-0 gap-x-3 rounded-xl shadow-xl"
        >
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl tracking-wider">Who am I?</h1>
            <h2 className="font-extralight text-lg tracking-wide">
              Software Engineer | Backend Developer
            </h2>
            <p className="text-white text-justify text-base">
              Throughout my university career, I have actively participated in
              the execution and collaboration in multiple projects, which has
              contributed significantly to my professional development.
            </p>
            <p className="text-white text-justify text-base">
              During this time, I have had the opportunity to immerse myself in
              a wide range of tools and technologies, which has strengthened my
              skills and knowledge comprehensively.
            </p>
            <p className="text-white text-justify text-base">
              This experience has allowed me to acquire a solid foundation in
              problem solving and implementing innovative solutions in
              collaborative environments.
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
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="https://www.credly.com/badges/71863662-dd76-4621-ab2b-d2a411476058"
                className="rounded-2xl hover:border-[#00DDFF] hover:shadow-md hover:shadow-[#00DDFF]"
              >
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
              </Link>
              <Link
                href="https://www.credly.com/badges/e8db963b-4d79-4bbb-a213-8dc60eb4dd7f"
                className="rounded-2xl hover:border-[#00DDFF] hover:shadow-md hover:shadow-[#00DDFF]"
              >
                <div className="flex items-center columns-2 space-x-2">
                  <div>
                    <Avatar alt="Python" src="/img/logo/python1.png" />
                  </div>
                  <div className="grid grid-cols-1 w-full">
                    <h2 className="font-extralight text-lg tracking-wide">
                      2024 - Cisco
                    </h2>
                    <h3 className="w-full text-white text-base font-mono">
                      JavaScript Essentials 2
                    </h3>
                    <hr />
                  </div>
                </div>
              </Link>
            </div>
            <h1 className="font-semibold text-xl tracking-wider">
              Publications
            </h1>
            <div className="grid grid-cols-1 gap-2">
              <Link
                href="https://doi.org/10.37811/cl_rcm.v8i3.11290"
                className="rounded-2xl p-1 hover:border-[#00DDFF] hover:shadow-md hover:shadow-[#00DDFF]"
              >
                <div className="grid grid-cols-1 w-full px-0">
                  <h2 className="font-extralight text-lg tracking-wide">
                    2024 - Ciencia Latina
                  </h2>
                  <h3 className="w-full text-white text-base font-mono">
                    Análisis de Frameworks Frontend para Aplicar UX/IU en el
                    Desarrollo Web: Una Revisión Sistemática
                  </h3>
                  <hr />
                </div>
              </Link>
            </div>
          </div>
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl tracking-wider">
              My Experpertice
            </h1>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center space-x-2">
                <CodeIcon color="secondary" sx={{ fontSize: 40 }} />
                <div className="grid grid-cols-1 w-full">
                  <h2 className="font-extralight text-lg tracking-wide">
                    Backend Developer
                  </h2>
                  <p className="text-white text-base text-justify">
                    I have extensive experience in creating robust, scalable
                    backend systems using technologies like Python and Java.
                  </p>
                  <hr />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <WebOutlinedIcon color="secondary" sx={{ fontSize: 40 }} />
                <div className="grid grid-cols-1 w-full">
                  <h2 className="font-extralight text-lg tracking-wide">
                    Frontend Developer
                  </h2>
                  <p className="text-white text-base text-justify">
                    Specializing in user interfaces and user experience, I
                    develop engaging and responsive web applications using HTML,
                    CSS, JavaScript, and modern frameworks like Next JS.
                  </p>
                  <hr />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <AssignmentOutlinedIcon color="secondary" sx={{ fontSize: 40 }} />
                <div className="grid grid-cols-1 w-full">
                  <h2 className="font-extralight text-lg tracking-wide">
                    Project Manager
                  </h2>
                  <p className="text-white text-base text-justify">
                    With a knack for organization and communication, I excel in
                    leading teams and managing projects from inception to
                    completion.
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default AboutMe;
