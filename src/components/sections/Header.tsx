"use client";

import React from "react";
import MyImage from "../MyImage";
import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import SwitchLanguage from "../SwitchLanguage";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const themeChanger = () => setTheme(theme === "dark" ? "light" : "dark");
  const t = useTranslations("header");

  return (
    <>
      <div className="items-center gap-4 md:gap-7 flex mt-20 mb-20 ">
        <MyImage className="rounded-full size-16 md:size-24" />
        <div className="flex-1">
          <h1 className="text-sm md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
            {t("name")}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg">
            {t("title")}
          </p>
          <Link
            href={"https://www.verceel.me/"}
            target="blank"
            className="bg-neutral-300 px-2 py-0.5 hover:opacity-80 text-neutral-600 text-xs md:text-sm rounded-full 
            dark:bg-neutral-600 dark:text-neutral-400"
          >
            {t("link")}
          </Link>
          <Link
            href={"https://doc.verceel.me/"}
            target="blank"
            className="bg-neutral-300 px-2 py-0.5 ml-2 hover:opacity-80 text-neutral-600 text-xs md:text-sm rounded-full 
            dark:bg-neutral-600 dark:text-neutral-400"
          >
            doc/
          </Link>
        </div>

        <div className="flex items-center gap-0.5 md:gap-2">
          <TooltipProvider>
            <Tooltip delayDuration={250}>
              <TooltipTrigger>
                <Link
                  href={
                    "https://drive.google.com/file/d/1F1crUzT748fSHhd4GHI_gHllOl_pYg7J/view?usp=sharing"
                  }
                  target="blank"
                >
                  <Button
                    className="cursor-pointer"
                    size="icon"
                    variant="ghost"
                  >
                    <Download className="dark:text-cyan-600 text-pink-600 hover:animate-none animate-pulse size-5 " />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-neutral-200 dark:bg-neutral-800 select-none text-neutral-800 dark:text-neutral-200 px-3 py-2 rounded-md mb-2"
                side="top"
              >
                <p>Download PDF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SwitchLanguage />
          <Button
            className="cursor-pointer"
            size="icon"
            variant="ghost"
            onClick={() => themeChanger()}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
