import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onExplore, onLecturers }) {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Galeri Digital Karya Mahasiswa UNIMED
          </h1>
          <p className="mt-5 text-base md:text-xl text-white/80 max-w-2xl mx-auto">
            Platform untuk mengunggah, menjelajahi, dan memamerkan karya akademik mahasiswa
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 md:gap-4">
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center rounded-xl bg-white text-emerald-800 px-5 md:px-7 py-3 font-semibold shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all"
            >
              Jelajahi Karya
            </button>
            <button
              onClick={onLecturers}
              className="inline-flex items-center justify-center rounded-xl border border-white/80 text-white px-5 md:px-7 py-3 font-semibold hover:bg-white/10 transition-all"
            >
              Temukan Dosen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
