import React from 'react';
import {
  ArrowLeft,
  MonitorPlay,
  Video,
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
    description: 'Panduan penyusunan Gender Analysis Pathway (GAP).',
    embedUrl:
      'https://drive.google.com/file/d/1tSV_mnPYZ4VYY2YsF0eM00bbUK9n8jtZ/preview?t=2.223',
  },
  {
    number: '02',
    title: 'Video Tutorial Penggunaan E-GAP Toolkit',
    description: 'Panduan penggunaan E-GAP Toolkit.',
    embedUrl:
      'https://drive.google.com/file/d/1SGTGdlQPfjYDdmnedz_Sa-2MZGNV6_Pu/preview',
  },
];

export default function EGAPVideoTutorial({
  onBack,
  onHome,
}: EGAPVideoTutorialProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-[0.20]" />

      <div className="pointer-events-none fixed -right-52 -top-52 z-0 h-[560px] w-[560px] rounded-full bg-rose-100/35 blur-3xl" />

      <div className="pointer-events-none fixed -bottom-56 -left-40 z-0 h-[500px] w-[500px] rounded-full bg-blue-100/35 blur-3xl" />

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
          <button
            type="button"
            onClick={onHome}
            className="flex min-w-0 items-center gap-3 text-left"
          >
            <img
              src={NTT_LOGO_URL}
              alt="Logo Provinsi NTT"
              className="h-9 w-auto shrink-0 sm:h-10"
              referrerPolicy="no-referrer"
            />

            <div className="hidden h-8 border-l-2 border-slate-200 sm:block" />

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="truncate text-base font-extrabold tracking-tight text-primary sm:text-lg">
                  E-GAP Toolkit
                </span>

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

            <span className="hidden sm:inline">
              Kembali ke E-GAP
            </span>

            <span className="sm:hidden">
              Kembali
            </span>
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="relative z-10 px-4 pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-6xl">

          {/* BREADCRUMB */}
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button
              type="button"
              onClick={onHome}
              className="transition-colors hover:text-blue-700"
            >
              E-GAP Toolkit
            </button>

            <span>/</span>

            <span className="text-slate-800">
              Video Tutorial
            </span>
          </div>

          {/* HEADER */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 rounded-2xl border border-slate-300 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8"
          >
            <div className="flex items-center gap-5">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 sm:flex">
                <MonitorPlay className="h-8 w-8" />
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Video Tutorial
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Video penyusunan GAP dan penggunaan E-GAP Toolkit.
                </p>
              </div>
            </div>
          </motion.section>

          {/* VIDEO LIST */}
          <section className="space-y-6">
            {tutorials.map((tutorial, index) => (
              <motion.article
                key={tutorial.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border border-slate-300
                  bg-white
                  shadow-md shadow-slate-200/50
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:shadow-lg
                "
              >
                <div className="grid grid-cols-1 items-stretch lg:grid-cols-[minmax(0,1fr)_340px]">

                  {/* VIDEO */}
                  <div className="flex items-center justify-center bg-slate-100 p-3 sm:p-4">
                    <div className="w-full max-w-[560px] overflow-hidden rounded-xl border border-slate-300 bg-black shadow-sm">
                      <div className="relative aspect-video">
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
                  </div>

                  {/* INFO */}
                  <div className="flex flex-col justify-center border-t border-slate-200 p-6 lg:border-l lg:border-t-0 lg:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-rose-700">
                        Video {tutorial.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-700">
                        <Video className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    <h2 className="mt-5 text-lg font-black leading-snug text-slate-900 sm:text-xl">
                      {tutorial.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {tutorial.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800 bg-primary py-9 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <img
              src={NTT_LOGO_URL}
              alt="Logo NTT"
              className="h-8 w-auto grayscale opacity-80"
              referrerPolicy="no-referrer"
            />

            <div>
              <p className="text-sm font-extrabold text-white">
                E-GAP Toolkit · SIPMODAG
              </p>

              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                DP3AP2KB Provinsi NTT
              </p>
            </div>
          </div>

          <p className="text-xs">
            &copy; 2026 Pemerintah Provinsi Nusa Tenggara Timur
          </p>
        </div>
      </footer>
    </div>
  );
}
