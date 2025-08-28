// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Website Bapenda',
  description: 'Website resmi Bapenda Kabupaten Kediri',
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Navbar bisa di sini kalau mau muncul di semua halaman */}
//         <header>
//           <nav>
//             <h1>Selamat Datang</h1>
//           </nav>
//         </header>

//         <main>
//           {children} {/* Konten dari page.jsx masuk di sini */}
//         </main>

//         {/* Footer juga bisa di sini */}
//         <footer>
//           <p>© 2025 Bapenda Kabupaten Kediri</p>
//         </footer>
//       </body>
//     </html>
//   );
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}