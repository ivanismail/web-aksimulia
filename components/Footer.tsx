// ================================
// components/Footer.tsx
// ================================
export default function Footer() {
return (
<footer className="bg-green-800 text-white text-center py-6 mt-20">
<p className="text-sm">
© {new Date().getFullYear()} Yayasan Aksi Mulia 114
</p>
</footer>
);
}