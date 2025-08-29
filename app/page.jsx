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
          maxWidth: "1600px", // batas biar nggak terlalu melebar
          aspectRatio: "16 / 9", // kunci rasio agar scaling seragam
          overflow: "hidden",
        }}
      >
        {/* Gambar Atas */}
        <img
          src="https://i.imgur.com/LtomLsy.png"
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

        {/* Awan Group */}
        <div
          style={{
            position: "absolute",
            top: "4%",      // posisikan sedikit turun
            left: "30%",
            width: "50%",
            display: "flex",
            justifyContent: "space-around", // bagi rata kiri-kanan
            alignItems: "center",
            zIndex: 5,
          }}
        >
          {/* Awan 1 */}
          <a
            href="https://e-sppt.kedirikab.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", width: "25%" }} // sama besar
          >
            <img
              src="https://i.imgur.com/zau1B4G.png"
              alt="Awan"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </a>

          {/* Awan 2 */}
          <a
            href="https://e-sppt.kedirikab.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", width: "25%" }} // sama besar
          >
            <img
              src="https://i.imgur.com/UoWHl03.png"
              alt="Awan"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </a>
        </div>

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
              y={220}
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
            width: "30%",
            maxWidth: "240px",
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
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
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
