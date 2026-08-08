import React from 'react';
import {
  ArrowLeft,
  PlayCircle,
  Video,
  MonitorPlay,
} from 'lucide-react';
import { motion } from 'motion/react';

const NTT_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/500px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png';

type EGAPVideoTutorialProps = {
  onBack: () => void;
  onHome: () => void;
};

const tutorials = [
  {
    number: '01',
    title: 'Video Tutorial Penyusunan GAP - GAB',
    description:
      'Panduan video untuk membantu pengguna memahami proses penyusunan GAP secara lebih terarah dan mudah diikuti.',
    embedUrl:
      'https://drive.google.com/file/d/1tSV_mnPYZ4VYY2YsF0eM00bbUK9n8jtZ/preview?t=2.223',
  },
  {
    number: '02',
    title: 'Video Tutorial Penggunaan E-GAP Toolkit',
    description:
      'Panduan penggunaan E-GAP Toolkit untuk membantu pengguna mengenali alur, menu, dan fungsi utama layanan E-GAP.',
    embedUrl:
      'https://drive.google.com/file/d/1SGTGdlQPfjYDdmnedz_Sa-2MZGNV6_Pu/preview',
  },
];

export default function EGAPVideoTutorial({ onBack, onHome }: EGAPVideoTutorialProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-[0.22]" />
      <div className="pointer-events-none fixed -right-48 -top-48 z-0 h-[560px] w-[560px] rounded-full bg-rose-100/45 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-56 -left-40 z-0 h-[520px] w-[520px] rounded-full bg-blue-100/45 blur-3xl" />

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
          <button type="button" onClick={onHome} className="flex min-w-0 items-center gap-3 text-left">
            <img
              src={NTT_LOGO_URL}
              alt="Logo Provinsi NTT"
              className="h-9 w-auto shrink-0 sm:h-10"
              referrerPolicy="no-referrer"
            />
            <div className="hidden h-8 border-l-2 border-slate-200 sm:block" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="truncate text-base font-extrabold tracking-tight text-primary sm:text-lg">E-GAP Toolkit</span>
                <span className="hidden rounded-md bg-blue-50 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-blue-700 sm:inline">
                  SIPMODAG
                </span>
              </div>
              <p className="mt-0.5 hidden text-[9px] font-bold uppercase tracking-wider text-slate-500 sm:block">
                DP3AP2KB Provinsi NTT
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={onBack}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 sm:px-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Kembali ke E-GAP</span>
            <span className="sm:hidden">Kembali</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 px-4 pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500"
          >
            <button type="button" onClick={onHome} className="transition-colors hover:text-blue-700">
              E-GAP Toolkit
            </button>
            <span>/</span>
            <span className="text-blue-700">Video Tutorial</span>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 items-center gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-rose-700">
                  <PlayCircle className="h-3.5 w-3.5" />
                  Materi Video E-GAP
                </div>
                <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Video Tutorial
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  Pelajari penyusunan GAP dan penggunaan E-GAP Toolkit melalui video panduan yang dapat diputar langsung dari halaman ini.
                </p>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-rose-100 bg-rose-50 text-rose-700 shadow-sm sm:h-24 sm:w-24">
                <MonitorPlay className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
            </div>
          </motion.section>

          <section className="mx-auto max-w-5xl space-y-7">
            {tutorials.map((tutorial, index) => (
              <motion.article
                key={tutorial.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.65fr)]">
                  <div className="bg-slate-950 p-2 sm:p-3">
                    <div className="relative aspect-video overflow-hidden rounded-[20px] bg-black">
                      <iframe
                        src={tutorial.embedUrl}
                        title={tutorial.title}
                        className="absolute inset-0 h-full w-full border-0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-black tabular-nums text-rose-700">VIDEO {tutorial.number}</span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-rose-700">
                          <Video className="h-5 w-5" />
                        </div>
                      </div>
                      <h2 className="mt-5 text-xl font-black leading-tight text-slate-900 sm:text-2xl">
                        {tutorial.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {tutorial.description}
                      </p>

                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-slate-800 bg-primary py-9 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <img src={NTT_LOGO_URL} alt="Logo NTT" className="h-8 w-auto grayscale opacity-80" referrerPolicy="no-referrer" />
            <div>
              <p className="text-sm font-extrabold text-white">E-GAP Toolkit · SIPMODAG</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">DP3AP2KB Provinsi NTT</p>
            </div>
          </div>
          <p className="text-xs">&copy; 2026 Pemerintah Provinsi Nusa Tenggara Timur</p>
        </div>
      </footer>
    </div>
  );
}
