// ================================
// components/Navbar.tsx
// ================================
export default function Navbar() {
return (
<nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
<h1 className="font-bold text-lg">Aksi Mulia 114</h1>
<div className="flex gap-6 text-sm">
<a href="/">Beranda</a>
<a href="/tentang">Tentang</a>
<a href="/program">Program</a>
<a href="/galeri">Galeri</a>
<a href="/donasi">Donasi</a>
</div>
</nav>
);
}