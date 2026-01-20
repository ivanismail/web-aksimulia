// ================================
// app/galeri/page.tsx (Galeri Kegiatan)
// ================================
const galleryImages = [
{ src: "/images/kegiatan1.jpg", caption: "Santunan Yatim" },
{ src: "/images/kegiatan2.jpg", caption: "Wakaf Al-Qur'an" },
{ src: "/images/kegiatan3.jpg", caption: "Bantuan Bencana" },
{ src: "/images/kegiatan4.jpg", caption: "Pendidikan Dhuafa" },
];


export default function Galeri() {
return (
<section className="py-16 px-6 max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-10">Galeri Kegiatan</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
{galleryImages.map((img, i) => (
<div key={i} className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition">
<img src={img.src} alt={img.caption} className="w-full h-48 object-cover" />
<p className="text-center text-sm mt-2 text-slate-600">{img.caption}</p>
</div>
))}
</div>
</section>
);
}