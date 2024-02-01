"use client"
import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from 'next-themes';
export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const  [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      { mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("light")} />
        ) : (
          <FaMoon className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("dark")}/>
        ))
      }
      
    </>
  )
}
