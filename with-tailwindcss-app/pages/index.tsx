import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import "@fontsource/akaya-kanadaka"
import { BsMoon } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'
export default function Home() {
  
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
    <div className="w-full h-screen border-2 border-white">
      <Head>
        <title>
          Dark mode with Tailwind and Next.js
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {theme === "light" ? (
        <div>
          <h1 className="mt-4 ml-4 font-logoText text-2xl font-bold text-violet-800">
            Dark mode with Tailwind and Next-themes
          </h1>
          <button onClick={switchTheme} className="absolute p-1.5
            mt-2 mr-2 top-0 right-0 text-xs text-slate-50 bg-violet-800
            border-solid rounded-lg">
            <BsSun size={24} /></button>
        </div>
        
        ) : (

        <div>
          <h1 className="mt-4 ml-4 font-logoText text-2xl font-bold text-sky-400">
            Dark mode with Tailwind and Next-themes
          </h1>
          <button onClick={switchTheme} className="absolute p-2
            mt-2 mr-2 top-0 right-0 text-xs text-neutral-900 bg-sky-400
            border-solid rounded-lg">
            <BsMoon size={18} /></button>
        </div>
      )}

    </div>
  );
}