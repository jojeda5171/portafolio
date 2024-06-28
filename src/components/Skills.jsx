"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import Link from "next/link";

function Skills() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ color: theme.palette.secondary.main }}
        className="w-10/12 2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-8/12 grid grid-cols-1 gap-y-4 font-serif tracking-widest"
      >
        <h1 className="text-3xl text-center font-serif 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl tracking-widest">
          <span className="text-white">MY </span>
          <span>SKILLS</span>
        </h1>
        {/* <Link href="https://www.github.com/jojeda5171/" className="w-full">
          <img
            src="https://github-widgetbox.vercel.app/api/profile?username=jojeda5171&data=followers,repositories,stars,commits&theme=rgb"
            alt="José Ojeda's GitHub Stats"
          />
        </Link> */}

        <div className="grid gap-4 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-lg pb-5">
          <div className="p-4 rounded-3xl border border-[#00DDFF] grid grid-cols-1 gap-y-3 shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl">💻 Frameworks</h1>
            <div className="flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=next,react,nodejs,django,fastapi"
                alt="Frameworks"
              />
            </div>
          </div>
          <div className="p-4 rounded-3xl border border-[#00DDFF] grid grid-cols-1 gap-y-3 shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl">🚀 Programming Languages</h1>
            <div className="flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=python,java,javascript"
                alt="Programming Languages"
              />
            </div>
          </div>
          <div className="p-4 rounded-3xl border border-[#00DDFF] grid grid-cols-1 gap-y-3 shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl">📝 IDE</h1>
            <div className="flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=vscode,eclipse,anaconda"
                alt="IDE's"
              />
            </div>
          </div>
          <div className="p-4 rounded-3xl border border-[#00DDFF] grid grid-cols-1 gap-y-3 shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl">📂 Control Version</h1>
            <div className="flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=git,github"
                alt="Control Version"
              />
            </div>
          </div>
          <div className="p-4 rounded-3xl border border-[#00DDFF] grid grid-cols-1 gap-y-3 shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl">🗄️ Database</h1>
            <div className="flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=postgres,mysql,sqlite"
                alt="Database"
              />
            </div>
          </div>
          <div className="p-4 rounded-3xl border border-[#00DDFF] grid grid-cols-1 gap-y-3 shadow-md shadow-[#00DDFF]">
            <h1 className="font-semibold text-xl">⚙️ Others</h1>
            <div className="flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=prisma,googlecloud"
                alt="ORM"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Skills;
