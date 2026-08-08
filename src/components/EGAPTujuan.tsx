import React from 'react';
import {
  ArrowLeft,
  CheckCircle2,
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
    description: 'agar sesuai dengan format, kaidah, dan substansi yang dipersyaratkan.',
    icon: FileCheck2,
  },
  {
    title: 'Menyeragamkan pemahaman',
    description: 'perangkat daerah mengenai tahapan dan metode penyusunan GAP.',
    icon: UsersRound,
  },
  {
    title: 'Mengurangi kesalahan dan ketidaksesuaian',
    description:
      'dalam identifikasi isu gender, faktor kesenjangan, penyebab internal maupun eksternal, serta perumusan rencana aksi.',
    icon: SearchCheck,
  },
  {
    title: 'Menyediakan panduan dan instrumen review',
    description: 'yang mudah diakses oleh penyusun maupun reviewer GAP.',
    icon: ListChecks,
  },
  {
    title: 'Mempercepat proses pengendalian kualitas dokumen GAP',
    description: 'melalui checklist, panduan, dan contoh penyusunan yang benar.',
    icon: Gauge,
  },
  {
    title: 'Meningkatkan kapasitas aparatur',
    description: 'dalam menerapkan Pengarusutamaan Gender (PUG) dan PPRG.',
    icon: GraduationCap,
  },
  {
    title: 'Mendukung penyusunan program dan kegiatan yang responsif gender',
    description:
      'sehingga manfaat pembangunan dapat dirasakan secara adil oleh perempuan dan laki-laki.',
    icon: Compass,
  },
  {
    title: 'Membangun basis pengetahuan (knowledge center)',
    description:
      'yang memuat regulasi, panduan, contoh, template, serta materi pembelajaran terkait GAP dan PPRG.',
    icon: LibraryBig,
  },
];

export default function EGAPTujuan({ onBack, onHome }: EGAPTujuanProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-[0.22]" />
      <div className="pointer-events-none fixed -right-48 -top-48 z-0 h-[560px] w-[560px] rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-56 -left-40 z-0 h-[520px] w-[520px] rounded-full bg-indigo-100/40 blur-3xl" />

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
            <button type="button" onClick={onHome} className="transition-colors hover:text-blue-700">E-GAP Toolkit</button>
            <span>/</span>
            <span className="text-blue-700">Tujuan E-GAP Toolkit</span>
          </motion.div>

          <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:sticky lg:top-36"
            >
              <div className="overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-[#0F2A5F] via-[#123E83] to-[#1E40AF] p-7 text-white shadow-xl shadow-blue-100/60 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                  <Target className="h-7 w-7" />
                </div>
                <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-200">E-GAP Toolkit</p>
                <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Tujuan E-GAP Toolkit</h1>
                <p className="mt-5 text-sm leading-7 text-blue-50/90 sm:text-[15px]">
                  Menyediakan sarana yang terintegrasi untuk membantu perangkat daerah dalam menyusun, mereviu, dan memastikan kualitas dokumen <strong className="text-white">Gender Analysis Pathway (GAP)</strong> secara lebih mudah, cepat, tepat, dan sesuai dengan ketentuan Perencanaan dan Penganggaran Responsif Gender (PPRG).
                </p>

                <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <p className="text-xs leading-6 text-blue-50">
                      Delapan tujuan utama berikut menjadi arah pengembangan E-GAP sebagai pusat pembelajaran dan pengendalian kualitas GAP.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8"
            >
              <div className="mb-6 border-b border-slate-100 pb-5">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1E40AF]">Secara lebih rinci</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Tujuan E-GAP Toolkit meliputi</h2>
              </div>

              <div className="space-y-4">
                {goals.map((goal, index) => {
                  const Icon = goal.icon;
                  return (
                    <motion.article
                      key={goal.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="group flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/55 p-4 transition-all hover:border-blue-200 hover:bg-blue-50/40 sm:p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-700 shadow-sm transition-transform group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 text-xs font-black tabular-nums text-blue-700">{String(index + 1).padStart(2, '0')}</span>
                          <p className="text-sm leading-6 text-slate-700 sm:text-[15px] sm:leading-7">
                            <strong className="font-extrabold text-slate-900">{goal.title}</strong>{' '}
                            {goal.description}
                          </p>
                        </div>
                      </div>
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
