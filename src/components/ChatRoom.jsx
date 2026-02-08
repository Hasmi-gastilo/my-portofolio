import { useState, useEffect, useRef } from "react";

// ✅ Foto tetap aman dari folder src/assets
import FotoAdmin from "../assets/hsm.jpg"; 

export default function ChatRoom() {
  const messagesEndRef = useRef(null);

  // Foto Default Pengunjung
  const defaultVisitorPhoto = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  // --- DATA CHAT (Pemanis Tampilan) ---
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Halo Kak, saya lihat portofolionya keren-keren. Apakah open jasa pembuatan website custom?", 
      photoURL: defaultVisitorPhoto,
      isUser: false,
      time: "10:00"
    },
    {
      id: 2,
      text: "Halo Kak! Terima kasih banyak 🙏. Iya betul, saya open jasa untuk Website Development dan Desain Grafis. Ada yang bisa dibantu?",
      photoURL: FotoAdmin, 
      isUser: true,
      time: "10:05"
    },
    {
      id: 3,
      text: "Saya ada rencana bikin website untuk usaha UMKM saya, fiturnya mirip kayak proyek 'Website Cafe Shop' itu. Kira-kira berapa biayanya ya?",
      photoURL: defaultVisitorPhoto,
      isUser: false,
      time: "10:12"
    },
    {
      id: 4,
      text: "Bisa banget Kak! Untuk harga sangat fleksibel, tergantung fitur detailnya. Silakan hubungi kontak di bawah ini ya 👇",
      photoURL: FotoAdmin, 
      isUser: true,
      time: "10:15"
    }
  ]);

  // Auto Scroll ke bawah
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-zinc-900 border border-gray-700 p-4 sm:p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-10">
      
      {/* --- HEADER --- */}
      <div className="flex items-center gap-2 mb-4 justify-center">
        <h2 className="text-2xl font-bold text-white">💬 Diskusi Project</h2>
        <span className="bg-green-500 text-xs text-black font-bold px-2 py-0.5 rounded-full animate-pulse">
          OPEN
        </span>
      </div>

      {/* --- AREA PESAN (Chat History) --- */}
      <div className="h-64 overflow-y-auto border border-gray-700 p-4 rounded-lg bg-zinc-800 mb-4 space-y-4 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.isUser ? "flex-row-reverse" : "flex-row"}`}
          >
            <img 
              src={msg.photoURL} 
              alt="avatar" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-600 object-cover" 
            />
            <div className={`flex flex-col max-w-[85%] ${msg.isUser ? "items-end" : "items-start"}`}>
              <div
                className={`px-4 py-2 rounded-2xl text-sm sm:text-base shadow-sm ${
                  msg.isUser 
                    ? "bg-blue-600 text-white rounded-br-none" 
                    : "bg-gray-700 text-gray-100 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 px-1">
                {msg.displayName} • {msg.time}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* --- BAGIAN BARU: 3 CONTACT INFO --- */}
      <div className="border-t border-gray-700 pt-4 mt-2">
        <div className="flex flex-col gap-3">
            
            {/* 1. Email */}
            <a href="mailto:emailkamu@gmail.com" className="flex items-center gap-3 bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition-colors group cursor-pointer border border-transparent hover:border-blue-500/30">
                <div className="bg-blue-900/30 p-2 rounded-full text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                </div>
                <div>
                    <p className="text-xs text-gray-400">Email</p>
                    {/* 👇 GANTI EMAIL DI SINI */}
                    <p className="text-sm font-semibold text-white">hasmigastilo@gmail.com</p>
                </div>
            </a>

            {/* 2. WhatsApp / Telepon */}
            <a href="https://wa.me/6285853915424" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition-colors group cursor-pointer border border-transparent hover:border-green-500/30">
                <div className="bg-green-900/30 p-2 rounded-full text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <p className="text-xs text-gray-400">WhatsApp / Telp</p>
                    {/* 👇 GANTI NOMOR DI SINI */}
                    <p className="text-sm font-semibold text-white">+62 858-5391-5424</p>
                </div>
            </a>

            {/* 3. Lokasi */}
            <div className="flex items-center gap-3 bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition-colors group cursor-pointer border border-transparent hover:border-red-500/30">
                <div className="bg-red-900/30 p-2 rounded-full text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <p className="text-xs text-gray-400">Lokasi</p>
                    {/* 👇 GANTI LOKASI DI SINI */}
                    <p className="text-sm font-semibold text-white">Malang, Jawa Timur, Indonesia</p>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
}