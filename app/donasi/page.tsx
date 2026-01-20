// ================================
// app/donasi/page.tsx (Halaman Donasi)
// ================================
const donations = [
{ bank: "BSI", number: "123-456-789", holder: "Yayasan Aksi Mulia 114" },
{ bank: "BRI", number: "987-654-321", holder: "Yayasan Aksi Mulia 114" },
];


export default function Donasi() {
return (
<section className="py-16 px-6 max-w-4xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-10">Donasi</h2>
<p className="text-center text-slate-700 mb-8">
Mari berdonasi untuk menebar kebaikan dan membantu sesama.
</p>
<div className="grid md:grid-cols-2 gap-6">
{donations.map((d, i) => (
<div key={i} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
<h3 className="font-semibold text-green-700 mb-2">{d.bank}</h3>
<p className="text-sm mb-1">No Rek: {d.number}</p>
<p className="text-sm">A/N: {d.holder}</p>
</div>
))}
</div>
<div className="text-center mt-10">
<p className="text-slate-600 mb-4">Atau scan QRIS untuk donasi cepat</p>
<div className="w-40 h-40 bg-green-100 mx-auto flex items-center justify-center rounded-lg">
<span className="text-green-700">QR Dummy</span>
</div>
</div>
</section>
);
}