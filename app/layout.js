import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-face" });

export const metadata = {
  title: "Hina Jawaid | Full Stack Software Engineer",
  description:
    "Portfolio of Hina Jawaid, a Full Stack Software Engineer building web and mobile products with React, Next.js, React Native, Node.js and ASP.NET Core.",
  openGraph: {
    title: "Hina Jawaid | Full Stack Software Engineer",
    description: "MERN, React Native and ASP.NET Core projects and experience.",
    type: "website",
  },
};

// Sets the saved theme before paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t){document.documentElement.setAttribute("data-theme",t)}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
