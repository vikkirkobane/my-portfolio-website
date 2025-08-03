import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Victor Chogo - Software Developer",
  description:
    "Welcome to the digital home of Victor Chogo. I am a full-stack developer blending over 5 years of hands-on experience with a passion for innovation, secure systems, and intelligent solutions. I build high-performance web apps using the MERN stack, Laravel, cloud platforms (AWS, Azure, GCP), and scalable architectures that power real-world impact. I’m constantly exploring AI integrations, system orchestration, and cybersecurity to deliver not just code but meaningful user experiences. Curious, fast learning, and always collaborative, I thrive on solving complex problems and turning ideas into elegant, secure digital solutions. Let’s create something exceptional together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
