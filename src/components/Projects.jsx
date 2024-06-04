"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import Link from "next/link";

function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ color: theme.palette.secondary.main }}
        className=" w-10/12 grid grid-cols-1"
      >
        <h1 className="text-3xl text-center pt-2 font-serif 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl tracking-widest">
          MY PROJECTS
        </h1>
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 gap-4">
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <Link href="https://github.com/jojeda5171/EasyFact/">
              <img
                className="h-auto bg-auto transition-all duration-300 rounded-lg bg-transparent hover:bg-transparent hover:scale-105 z-10"
                src="/img/projects/EasyFact.png"
                alt="EasyFact image"
              />
            </Link>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              Mobile application for electronic billing (BackEnd)
            </h2>
            <p className="text-white text-justify text-base">
              Developing a{" "}
              <strong>Mobile application for electronic billing BackEnd</strong>{" "}
              - This project involves the creation of an API for a mobile
              electronic invoicing application. Includes functionalities and
              sending of emails as indicated by the SRI.
            </p>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              🧰 Tools Used:
            </h2>
            <div className="flex justify-center">
              <img src="https://skillicons.dev/icons?i=postgres,django,flutter,vscode,gcp" />
            </div>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              👁️ Visit on GitHub:
            </h2>
            <Link
              href="https://github.com/jojeda5171/EasyFact/"
              className="flex justify-center"
            >
              <img src="https://img.shields.io/badge/EasyFact-80ffaa?style=for-the-badge&logo=github&logoColor=black" />
            </Link>
            <hr />
          </div>
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <Link href="https://github.com/jojeda517/Certech-BackEnd/">
              <img
                className="h-auto bg-auto transition-all duration-300 rounded-lg bg-transparent hover:bg-transparent hover:scale-105 z-10"
                src="/img/projects/Certech.png"
                alt="Certech image"
              />
            </Link>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              Web application for Certificate Management (BackEnd)
            </h2>
            <p className="text-white text-justify text-base">
              Developing a{" "}
              <strong>
                Web application for Certificate Management BackEnd
              </strong>{" "}
              - This project consists of the creation of an API for a web
              application for the generation and administration of certificates.
              Includes functionalities to validate the document.
            </p>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              🧰 Tools Used:
            </h2>
            <div className="flex justify-center">
              <img src="https://skillicons.dev/icons?i=mysql,django,vscode,gcp" />
            </div>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              👁️ Visit on GitHub:
            </h2>
            <Link
              href="https://github.com/jojeda517/Certech-BackEnd/"
              className="flex justify-center"
            >
              <img src="https://img.shields.io/badge/CerTech-80ffaa?style=for-the-badge&logo=github&logoColor=black" />
            </Link>
            <hr />
          </div>
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <Link href="https://github.com/jojeda5171/planifica-facil/">
              <img
                className="h-auto bg-auto transition-all duration-300 rounded-lg bg-transparent hover:bg-transparent hover:scale-105 z-10"
                src="/img/projects/PlanificaFacil.png"
                alt="Planifica Fácil image"
              />
            </Link>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              Web application to simulate credits and investments
            </h2>
            <p className="text-white text-justify text-base">
              Developing a{" "}
              <strong>
                Web application to simulate credits and investments
              </strong>{" "}
              - This credit and investment simulation project has revolutionized
              the process, offering clients of a banking entity an efficient and
              accurate way to price their financial options.
            </p>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              🧰 Tools Used:
            </h2>
            <div className="flex justify-center">
              <img src="https://skillicons.dev/icons?i=mysql,nextjs,vscode" />
            </div>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              👁️ Visit on GitHub:
            </h2>
            <Link
              href="https://github.com/jojeda5171/planifica-facil/"
              className="flex justify-center"
            >
              <img src="https://img.shields.io/badge/Easy Planning-80ffaa?style=for-the-badge&logo=github&logoColor=black" />
            </Link>
            <hr />
          </div>
          <div className="space-y-2 border border-[#00DDFF] p-3 rounded-3xl shadow-md shadow-[#00DDFF]">
            <Link href="https://github.com/jojeda517/Seguridad-Frontend/">
              <img
                className="h-auto bg-auto transition-all duration-300 rounded-lg bg-transparent hover:bg-transparent hover:scale-105 z-10"
                src="/img/projects/GestorArchivos.png"
                alt="File Manager image"
              />
            </Link>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              Web application to store and manage files in the cloud
            </h2>
            <p className="text-white text-justify text-base">
              Developing a{" "}
              <strong>Web application to store and manage files</strong> - TThis
              project consists of the creation of a cloud to store the documents
              of the students of the Technical University of Ambato in the
              faculty of Systems, Electronic and Industrial Engineering.
            </p>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              🧰 Tools Used:
            </h2>
            <div className="flex justify-center">
              <img src="https://skillicons.dev/icons?i=mysql,fastapi,nextjs,vscode,aws" />
            </div>
            <hr />
            <h2 className="font-semibold text-xl tracking-wider">
              👁️ Visit on GitHub:
            </h2>
            <Link
              href="https://github.com/jojeda517/Seguridad-Frontend/"
              className="flex justify-center"
            >
              <img src="https://img.shields.io/badge/File Manager-80ffaa?style=for-the-badge&logo=github&logoColor=black" />
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Projects;
