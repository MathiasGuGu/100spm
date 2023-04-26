import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/hero/Hero";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const questions = [
  { text: "Er alltid på mobilen?", first: true },
  { text: "Har mest viljestyrke?" },
  { text: "Er best på å styrte?" },
  { text: "Er dårligst sjåfør?" },
  { text: "Er mest vill?" },
  { text: "Spanderer alltid på fylla?" },
  { text: "Er kåtest?" },
  { text: "Er flinkest på skolen?" },
  { text: "Tar seg mest på puppene?" },
  { text: "Trodde lengst på julenissen?" },
  { text: "10 Spørsmål, SKÅL!", milestone: true },
  { text: "Mest ubesluttsom?" },
  { text: "Har høyest toleranse?" },
  { text: "Er mest rettferdig?" },
  { text: "Lager de sjukeste lydene i senga?" },
  { text: "Gir mest til veldedighet?" },
  { text: "Er mest overlegen?" },
  { text: "Kommer til å lykkes best i livet?" },
  { text: "Er en adrenalin junkie?" },
  { text: "Googler seg selv oftest?" },
  { text: "Er lykkeligst?" },
  { text: "SKÅL!", milestone: true, last: true },
];

export default function Home() {
  const [language, setLanguage] = useState("norsk");
  const [i, setIndex] = useState(0);

  return (
    <>
      <nav>
        <Navbar language={language} setLanguage={setLanguage}></Navbar>
      </nav>
      <main
        className={`overflow-x-hidden flex flex-col items-center gap-12  h-screen w-screen bg-white  ${inter.className}`}
      >
        <section>
          <Hero></Hero>
        </section>
        <section className="flex flex-col h-auto min-h-92 gap-6">
          <Link className="w-auto" href="sporsmal">
            <button
              type="button"
              class="text-white  min-w-[300px] bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2"
            >
              Spill 100 Spørsmål
            </button>
          </Link>
          <Link className="w-auto" href="add-questions">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative min-w-[300px] px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Lag dine egne spørsmål
              </span>
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
