import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <footer className="mt-40 pb-10 pt-5 flex flex-col items-center w-full relative z-10">
        
        {/* 👇 UBAH DI SINI:
            Mobile: Tetap flex-col (tumpuk ke bawah).
            Desktop (md): Pakai 'grid grid-cols-3'. Ini membagi layar jadi 3 kotak sama besar.
        */}
        <div className="w-full flex flex-col md:grid md:grid-cols-3 items-center gap-8 px-6 max-w-7xl mx-auto">
          
          {/* 1. BAGIAN KIRI (JUDUL) */}
          {/* 'md:justify-self-start' = Paksa nempel ke kiri mentok */}
          <div className="order-1 md:order-none md:justify-self-start">
            <h1 className="text-2xl font-bold text-white tracking-wide">
                Portofolio
            </h1>
          </div>

          {/* 2. BAGIAN TENGAH (ICONS) */}
          {/* 'md:justify-self-center' = Paksa nempel di tengah mentok */}
          <div className="order-2 md:order-none md:justify-self-center flex gap-6 items-center">
            
            {/* GitHub - Cyan Glow */}
            <a href="https://github.com/Hasmi-gastilo" 
               className="text-cyan-600/80 transition-all duration-500 ease-in-out
                          hover:text-cyan-300 hover:scale-125
                          drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]
                          hover:drop-shadow-[0_0_25px_rgba(34,211,238,1)]">
                <i className="ri-github-fill ri-2x"></i>
            </a>

            {/* Instagram - Pink Glow */}
            <a href="https://www.instagram.com/hsm_gs/#/" 
               className="text-fuchsia-600/80 transition-all duration-500 ease-in-out
                          hover:text-fuchsia-300 hover:scale-125
                          drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]
                          hover:drop-shadow-[0_0_25px_rgba(232,121,249,1)]">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>

            {/* YouTube - Red Glow */}
            <a href="http://www.youtube.com/@hasmi4371" 
               className="text-red-600/80 transition-all duration-500 ease-in-out
                          hover:text-red-300 hover:scale-125
                          drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]
                          hover:drop-shadow-[0_0_25px_rgba(248,113,113,1)]">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>

          </div>

          {/* 3. BAGIAN KANAN (DOCK) */}
          {/* 'md:justify-self-end' = Paksa nempel ke kanan mentok */}
          <div className="order-3 md:order-none md:justify-self-end mt-4 md:mt-0">
            <Dock 
              items={items}
              panelHeight={30}
              baseItemSize={60}
              magnification={100}
            />
          </div>

        </div>
        
        {/* Copyright */}
        <p className="text-xs text-gray-600 mt-12 font-light">
            © 2026 Hasmi Gastilo. All rights reserved.
        </p>

    </footer>
  );
};

export default Footer;