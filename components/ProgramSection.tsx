// ================================
// components/ProgramSection.tsx
// ================================
const programs = [
{ title: "Santunan Yatim", desc: "Berbagi kebahagiaan kepada anak yatim." },
{ title: "Wakaf Al-Qur'an", desc: "Menyalurkan mushaf ke pelosok." },
{ title: "Bantuan Bencana", desc: "Respon cepat musibah." },
{ title: "Pendidikan Dhuafa", desc: "Dukungan pendidikan anak." },
];


export default function ProgramSection() {
return (
<section className="py-16 px-6 max-w-6xl mx-auto">
<h3 className="text-2xl font-bold text-center mb-10">Program Unggulan</h3>
<div className="grid md:grid-cols-4 gap-6">
{programs.map((p, i) => (
<div
key={i}
className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
>
<h4 className="font-semibold mb-2">{p.title}</h4>
<p className="text-sm text-slate-600">{p.desc}</p>
</div>
))}
</div>
</section>
);
}