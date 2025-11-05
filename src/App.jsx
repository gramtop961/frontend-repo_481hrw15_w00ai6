import React from 'react';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import WorksSection from './components/WorksSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Sample data to demonstrate the modern layout
  const featuredWorks = [
    {
      id: 'f1',
      title: 'Eksplorasi Fotografi Arsitektur Modern',
      category: 'Fotografi',
      author: 'Aulia Pratama • Teknik Sipil',
      year: '2024',
      badge: 'Unggulan',
      image:
        'https://images.unsplash.com/photo-1524234107056-1c1f48f64ab7?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'f2',
      title: 'UI Sistem Informasi Akademik Berbasis Mobile',
      category: 'UI/UX',
      author: 'Intan Lestari • Ilmu Komputer',
      year: '2024',
      badge: 'Unggulan',
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'f3',
      title: 'Analisis AI untuk Klasifikasi Gambar',
      category: 'Riset',
      author: 'Rafi Maulana • Pendidikan Matematika',
      year: '2023',
      badge: 'Unggulan',
      image:
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  const recentWorks = [
    {
      id: 'r1',
      title: 'Branding Visual Produk Lokal Berkelanjutan',
      category: 'Desain',
      author: 'Nadya Putri • Desain Komunikasi Visual',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1587613865763-4b8b0cde7c98?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'r2',
      title: 'Sistem Rekomendasi Buku Perpustakaan',
      category: 'Data',
      author: 'Fajar Adi • Informatika',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'r3',
      title: 'Eksperimen Tipografi Interaktif Web',
      category: 'Web',
      author: 'Sari Wulandari • Sistem Informasi',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  const totals = {
    totalWorks: 120,
    totalStudents: 5000,
    totalLecturers: 220,
    totalPrograms: 54,
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Hero onExplore={() => window.alert('Navigasi ke daftar karya')} onLecturers={() => window.alert('Navigasi ke daftar dosen')} />

      <Stats
        totalWorks={totals.totalWorks}
        totalStudents={totals.totalStudents}
        totalLecturers={totals.totalLecturers}
        totalPrograms={totals.totalPrograms}
      />

      <main>
        {featuredWorks.length > 0 && (
          <WorksSection title="Karya Unggulan" works={featuredWorks} />
        )}

        {recentWorks.length > 0 && (
          <WorksSection title="Karya Terbaru" works={recentWorks} />
        )}
      </main>

      <Footer />
    </div>
  );
}
