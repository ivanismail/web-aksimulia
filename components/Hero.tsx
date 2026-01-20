// ================================
// components/Hero.tsx
// ================================
export default function Hero() {
return (
<section className="bg-green-50 py-20 text-center">
<h2 className="text-4xl font-bold text-green-800 mb-4">
Menebar Kebaikan, Menguatkan Umat
</h2>
<p className="max-w-xl mx-auto text-slate-600 mb-8">
Yayasan Aksi Mulia 114 bergerak dalam bidang sosial, pendidikan, dan
kemanusiaan.
</p>
<div className="flex justify-center gap-4">
<button className="bg-green-700 text-white px-6 py-3 rounded-xl">
Donasi Sekarang
</button>
<button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl">
Jadi Relawan
</button>
</div>
</section>
);
}