"use client";

import { personalData } from "@/utils/data/personal-data";
import { useEffect, useState } from "react";
import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";
import ChatWidget from "./components/ChatWidget";
import ToastWrapper from "./components/ToastWrapper";

// Dynamically import components that use browser APIs
import dynamic from "next/dynamic";
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Blog = dynamic(() => import("./components/homepage/blog"), { ssr: false });
const ScrollToTop = dynamic(() => import("./components/helper/scroll-to-top"), { ssr: false });

// const ToastContainer = dynamic(
//   () => import('react-toastify').then((mod) => mod.ToastContainer),
//   { ssr: false }
// );


export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?username=${personalData.devUsername}`
        );
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        const filtered = data.filter((item) => item?.cover_image)
                             .sort(() => Math.random() - 0.5)
                             .slice(0, 3);
        setBlogs(filtered);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div suppressHydrationWarning>
      <main className="max-w-7xl mx-auto px-4">
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Blog blogs={blogs} loading={loading} />
        <ContactSection />
      </main>
      <ChatWidget />
      <ScrollToTop />
      <ToastWrapper />
    </div>
  );
}

