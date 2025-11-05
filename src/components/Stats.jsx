import React from 'react';

export default function Stats({ totalWorks = 0, totalStudents = 0, totalLecturers = 0, totalPrograms = 0 }) {
  const items = [
    { label: 'Karya', value: totalWorks },
    { label: 'Mahasiswa', value: totalStudents },
    { label: 'Dosen', value: totalLecturers },
    { label: 'Program Studi', value: totalPrograms },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {items.map((it) => (
            <div
              key={it.label}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 hover:bg-emerald-50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-1">
                {it.value}+
              </div>
              <div className="text-gray-600">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
