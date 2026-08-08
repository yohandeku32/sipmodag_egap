import React from 'react';
import {
  ArrowLeft,
  Compass,
  FileCheck2,
  Gauge,
  GraduationCap,
  LibraryBig,
  ListChecks,
  SearchCheck,
  Target,
  UsersRound,
} from 'lucide-react';
import { motion } from 'motion/react';

const NTT_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/500px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png';

type EGAPTujuanProps = {
  onBack: () => void;
  onHome: () => void;
};

const goals = [
  {
    title: 'Meningkatkan kualitas penyusunan GAP',
    description: 'Sesuai format, kaidah, dan substansi yang dipersyaratkan.',
    icon: FileCheck2,
  },
  {
    title: 'Menyeragamkan pemahaman',
    description: 'Tahapan dan metode penyusunan GAP pada perangkat daerah.',
    icon: UsersRound,
  },
  {
    title: 'Mengurangi kesalahan penyusunan',
    description:
      'Dalam identifikasi isu gender, faktor kesenjangan, penyebab, dan rencana aksi.',
    icon: SearchCheck,
  },
  {
    title: 'Menyediakan panduan review',
    description: 'Panduan dan instrumen bagi penyusun maupun reviewer GAP.',
    icon: ListChecks,
  },
  {
    title: 'Mempercepat pengendalian kualitas',
    description: 'Melalui checklist, panduan, dan contoh penyusunan GAP.',
    icon: Gauge,
  },
  {
    title: 'Meningkatkan kapasitas aparatur',
    description: 'Dalam penerapan Pengarusutamaan Gender (PUG) dan PPRG.',
    icon: GraduationCap,
  },
  {
    title: 'Mendukung program responsif gender',
    description:
      'Untuk mendukung manfaat pembangunan yang adil bagi perempuan dan laki-laki.',
    icon: Compass,
  },
  {
    title: 'Membangun basis pengetahuan',
    description:
      'Regulasi, panduan, contoh, template, dan materi pembelajaran GAP dan PPRG.',
    icon: LibraryBig,
  },
];

export default function EGAPTujuan({
  onBack,
  onHome,
}: EGAPTujuanProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="pointer-events-none fixed -right-48 -top-48 z-0 h-[560px] w-[560px] rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-56 -left-40 z-0 h-[520px] w-[520px] rounded-full bg-indigo-100/35 blur-3xl" />

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 shadow-md shadow-slate-200/40 backdrop-blur-md sm:px-6">
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
            <span className="hidden sm:inline">Kembali ke E-GAP</span>
            <span className="sm:hidden">Kembali</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 px-4 pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button
              type="button"
              onClick={onHome}
              className="transition-colors hover:text-blue-700"
            >
              E-GAP Toolkit
            </button>

            <span>/</span>
            <span className="text-slate-800">Tujuan</span>
          </div>

          <section className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:sticky lg:top-36"
            >
              <div
                className="relative overflow-hidden rounded-[26px] border border-blue-900/20 bg-[#0F2A5F] p-7 text-white shadow-xl shadow-blue-200/40 sm:p-8"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
                  `,
                  backgroundSize: '28px 28px',
                }}
              >
                <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-400/15 blur-3xl" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-blue-100">
                    <Target className="h-6 w-6" />
                  </div>

                  <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
                    Tujuan E-GAP
                  </h1>

                  <p className="mt-4 text-sm leading-7 text-blue-100/80">
                    Mendukung perangkat daerah dalam penyusunan dan review
                    Gender Analysis Pathway (GAP) sesuai ketentuan PPRG.
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">
                      8 Tujuan Utama
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04 }}
              className="rounded-[26px] border border-slate-300 bg-slate-100/70 p-4 shadow-md shadow-slate-200/50 sm:p-5"
            >
              <div className="mb-5 px-1 sm:px-2">
                <h2 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
                  Tujuan
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {goals.map((goal, index) => {
                  const Icon = goal.icon;

                  return (
                    <motion.article
                      key={goal.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.025,
                      }}
                      className="group min-h-[150px] rounded-2xl border border-slate-300 bg-white p-5 shadow-md shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-300/40"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span className="text-[10px] font-black tabular-nums text-slate-300">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="mt-4 text-sm font-black leading-6 text-slate-900">
                        {goal.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-slate-500">
                        {goal.description}
                      </p>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </section>
        </div>
      </main>

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
