"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      {/* Container utama dengan aspect-ratio biar semua proporsional */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1600px", // biar gak terlalu melebar di layar besar
          aspectRatio: "16 / 9", // kunci rasio
          overflow: "hidden",
        }}
      >
        {/* Gambar Atas */}
        <img
          src="https://i.imgur.com/JMXBkqg.png"
          alt="Gambar Atas"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "auto",
            zIndex: 2,
          }}
        />

        {/* Jalan Raya */}
        <svg
          viewBox="0 0 2048 640"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: "15%",
            left: 0,
            width: "100%",
            height: "40%",
            zIndex: 1,
          }}
        >
          <rect x="0" y="0" width="2048" height="640" fill="#1f2937" />
          {/* marka jalan putus-putus */}
          {[...Array(34)].map((_, i) => (
            <rect
              key={i}
              x={i * 240 + 40}
              y={220} //320 - 12
              width={160}
              height={12}
              fill="#e5e7eb"
              rx={6}
            />
          ))}
        </svg>

        {/* Kendaraan 1 (Mobil) */}
        <motion.img
          src="https://i.imgur.com/U11qDuh.png"
          alt="Halomasbup"
          style={{
            position: "absolute",
            bottom: "45%",
            left: 0,
            width: "30%",       // sebelumnya 20%, diperbesar 120%
            maxWidth: "240px",  // sebelumnya 200px, diperbesar 120%
            height: "auto",
            zIndex: 3,
          }}
          initial={{ x: "-30vw" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Kendaraan 2 (Motor) */}
        <motion.img
          src="https://i.imgur.com/MLT7bzs.png"
          alt="Motor"
          style={{
            position: "absolute",
            bottom: "30%",
            left: 0,
            width: "15%",
            maxWidth: "120px",
            height: "auto",
            zIndex: 3,
          }}
          initial={{ x: "100vw" }}   // mulai dari luar kanan layar
          animate={{ x: "-100vw" }}  // bergerak sampai keluar penuh ke kiri
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Gambar Bawah */}
        <img
          src="https://i.imgur.com/9MpXIOl.png"
          alt="Gambar Bawah"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "auto",
            zIndex: 4,
          }}
        />
      </div>
    </div>
  );
}
