import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AsideRight from "@/components/AsideRight";
import AsideLeft from "@/components/AsideLeft";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "José Ojeda",
  description:
    "José Ojeda's personal website and portfolio. Backend Developer and Software Engineer.",
  image: "/img/avatar/listo.png",
  url: "https://joseojeda.vercel.app",
  type: "website",
  keywords: [
    "José Ojeda",
    "Backend Developer",
    "Software Engineer",
    "Ecuadorian",
    "Ambato",
    "UTA",
    "Technical University of Ambato",
    "José Ojeda's personal website",
    "José Ojeda's portfolio",
    "José Ojeda's blog",
    "José Ojeda's projects",
    "José Ojeda's resume",
    "José Ojeda's contact",
    "José Ojeda's social media",
    "José Ojeda's links",
    "José Ojeda's about",
    "José Ojeda's skills",
    "José Ojeda's experience",
    "José Ojeda's education",
    "José Ojeda's certifications",
    "José Ojeda's awards",
    "José Ojeda's interests",
    "José Ojeda's hobbies",
    "José Ojeda's languages",
    "José Ojeda's tools",
    "José Ojeda's technologies",
    "José Ojeda's frameworks",
    "José Ojeda's libraries",
    "José Ojeda's databases",
    "José Ojeda's operating systems",
    "José Ojeda's IDEs",
    "José Ojeda's editors",
    "José Ojeda's version control systems",
    "José Ojeda's hosting services",
    "José Ojeda's cloud services",
    "José Ojeda's APIs",
    "José Ojeda's web services",
    "José Ojeda's web technologies",
    "José Ojeda's web standards",
    "José Ojeda's web development",
    "José Ojeda's web design",
    "José Ojeda's web performance",
    "José Ojeda's web accessibility",
    "José Ojeda's web security",
    "José Ojeda's web privacy",
    "José Ojeda's web ethics",
    "José Ojeda's web governance",
    "José Ojeda's web regulation",
    "José Ojeda's web compliance",
    "José Ojeda's web best practices",
    "José Ojeda's web trends",
    "José Ojeda's web news",
    "José Ojeda's web events",
    "José Ojeda's web resources",
    "José Ojeda's web tools",
    "José Ojeda's web tutorials",
    "José Ojeda's web courses",
    "José Ojeda's web books",
    "José Ojeda's web blogs",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Navbar />

        <main className="flex-grow flex justify-center">
          <div className="sm:flex justify-between">
            {children}
            <AsideLeft />
            <AsideRight />
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}