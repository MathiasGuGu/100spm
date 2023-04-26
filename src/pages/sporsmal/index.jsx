import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-screen h-screen flex flex-col gap-12 items-center justify-center">
        <h1 className="text-3xl font-semibold">Velg en Kategori</h1>
        <div className=" w-full flex flex-wrap gap-6 justify-center">
          <Link href="sporsmal/rolig">
            <div className="h-32 w-64 rounded-md text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 flex items-center justify-center">
              <p className=" text-xl font-semibold ">Rolig</p>
            </div>
          </Link>
          <Link href="sporsmal/pa-grensa">
            <div className="h-32 w-64 rounded-md text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 flex items-center justify-center">
              <p className=" text-xl font-semibold ">På Grensa</p>
            </div>
          </Link>
          <Link href="sporsmal/over-grensa">
            <div className="h-32 w-64 rounded-md text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 flex items-center justify-center">
              <p className=" text-xl font-semibold ">Over Grensa</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
