// UI Dummy Website Yayasan Aksi Mulia 114
// Next.js App Router + Tailwind CSS


// ================================
// app/layout.tsx
// ================================
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="id">
<body className="bg-white text-slate-800">
<Navbar />
{children}
<Footer />
</body>
</html>
);
}