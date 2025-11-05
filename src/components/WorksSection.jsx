import React from 'react';

function WorkCard({ work }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={work.image}
          alt={work.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {work.badge && (
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white shadow">
            {work.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 font-medium">{work.category}</span>
          <span>•</span>
          <span>{work.year}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-1">{work.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{work.author}</p>
      </div>
    </div>
  );
}

export default function WorksSection({ title, works = [] }) {
  if (!works?.length) return null;
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          <a href="#" className="text-emerald-700 hover:text-emerald-600 font-medium">Lihat semua</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <WorkCard key={w.id} work={w} />
          ))}
        </div>
      </div>
    </section>
  );
}
