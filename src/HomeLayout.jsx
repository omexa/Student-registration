import React from "react";
import { Outlet } from "react-router-dom";
export default function HomeLayout() {
  return (
    <div className="flex flex-col w-full items-start">
      <p className="flex w-full text-violet-600 justify-center text-center text-2xl lg:text-4xl font-[deathStar]">
        WELLCOME TO OMEXA TRAINING CENTER
      </p>
      <p className="font-[deathStar] lg:text-3xl mt-2 ml-10 mr-10 select-text bg-violet-300 rounded-md p-2">
        Welcome to our learning website! We are dedicated to providing a wide
        range of educational resources and courses to help you expand your
        knowledge and skills. Whether you're a student looking to enhance your
        academic performance, a professional aiming to upskill in your career,
        or simply someone eager to explore new subjects, our website offers a
        diverse collection of engaging learning materials.
      </p>
      <ul>
        <li className="p-4 ">
          <p className=" font-[deathStar]  lg:text-2xl mt-2 ml-10 mr-10 select-text bg-violet-300 rounded-md p-2">
            learn react...
          </p>
        </li>
      </ul>
    </div>
  );
}
