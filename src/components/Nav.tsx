import './Nav.css'
import NavDesign from './NavDesign';
import { PiDiscordLogoBold, PiInstagramLogoBold, PiEnvelopeBold, PiMoonBold, PiSunBold } from "react-icons/pi";
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { ReactTyped } from "react-typed"
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from '@/components/ThemeProvider';


interface NavProps {
  subtitle: string[];
}

function Nav({ subtitle }: NavProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);  

  return (
    <aside className="sidebar h-full w-80 bg-primary text-white text-center slanted-nav flex flex-col">
      {/* Back Icon Section */}
      <div className="pt-4 mr-4 text-2xl flex justify-end space-x-4">
        <button onClick={toggleTheme} className="hover:text-secondary cursor-pointer transition-colors duration-200">
          {theme === 'dark' ? <PiSunBold /> : <PiMoonBold />}
        </button>
      </div>

      {/* Title Section */}
      <div className="my-15 p-5 header-box bg-secondary flex flex-col items-center text-center">
        <div className="">
        <ReactTyped
          strings={subtitle}
          startDelay={500}
          cursorChar="▎"
          typeSpeed={100}
          backSpeed={70}
          className="text-3xl font-light float-left"
          onStringTyped={(pos, self) => {
          self.stop();
          setTimeout(() => {
            self.start();
          }, 800);
          }}
          onComplete={(self) => {
          setTimeout(() => {
            if (self.cursor == null) return;
            self.cursor.remove();
          }, 1000);
          }}
        />

        <h1 className="text-6xl font-bold p-0 m-0">REYAAN</h1>
        </div>
      </div>

      {/* Nav List Section */}
      <nav className="mt-6 ml-10 flex justify-center">
        <ul className="space-y-2 font-mono w-50 text-start">
        <li className="text-2xl">- <a href="#about" className="underline bg-secondary">about</a></li>
        <li className="text-2xl">- <a href="#about" className="hover:text-secondary">projects</a></li>
        <li className="text-2xl">- <a href="#about" className="hover:text-secondary">fun</a></li>
        </ul>
      </nav>

      {/* Design Section */}
      <div className="mt-20 flex justify-center">
        {/* <div id="design-box" className="w-40 h-40 flex items-center justify-center rounded-full border-4 border-white overflow-hidden">
      <div id="design" className="w-20 h-20 bg-black"></div> */}
        <NavDesign />
        {/* </div> */}
      </div>

      {/* Socials Section */}
      <div className="mt-auto mb-10 text-2xl flex justify-center space-x-4">
        <a href="#email" className="hover:text-secondary cursor-pointer transition-colors duration-200"><PiEnvelopeBold /></a>
        <a href="#instagram" className="hover:text-secondary cursor-pointer transition-colors duration-200"><PiInstagramLogoBold /></a>
        <a href="#discord" className="hover:text-secondary cursor-pointer transition-colors duration-200"><PiDiscordLogoBold /></a>
      </div>
    </aside>

  );
}

export default Nav;
