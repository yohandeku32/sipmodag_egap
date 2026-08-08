import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Building2,
  GraduationCap,
  LibraryBig,
  UserRound,
} from 'lucide-react';
import { motion } from 'motion/react';
import sasandoGenderCover from '../assets/egap-sasando-gender.png';

const NTT_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/500px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png';

type EGAPEModulProps = {
  onBack: () => void;
  onHome: () => void;
};

export default function EGAPEModul({ onBack, onHome }: EGAPEModulProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-[0.22]" />
      <div className="pointer-events-none fixed -right-52 -top-52 z-0 h-[580px] w-[580px] rounded-full bg-indigo-100/55 blur-3xl" />
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
            <span className="text-blue-700">E-Modul Penyusunan GAP</span>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 items-center gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-700">
                  <BookOpen className="h-3.5 w-3.5" />
                  Materi Pembelajaran E-GAP
                </div>
                <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  E-Modul Penyusunan GAP
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  Materi pembelajaran digital sebagai referensi untuk mendukung pemahaman dan penyusunan Gender Analysis Pathway (GAP).
                </p>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-indigo-100 bg-indigo-50 text-indigo-700 shadow-sm sm:h-24 sm:w-24">
                <LibraryBig className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[390px_minmax(0,1fr)]">
              <div className="flex items-center justify-center bg-slate-100/80 p-5 sm:p-7 lg:p-8">
                <div className="relative w-full max-w-[335px] overflow-hidden rounded-[18px] border border-slate-300 bg-white shadow-xl shadow-slate-300/40">
                  <img
                    src={sasandoGenderCover}
                    alt="Sampul e-Modul Sasando Gender"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-700">
                  <GraduationCap className="h-3.5 w-3.5" />
                  E-Modul
                </div>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-slate-400">SASANDO GENDER</p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                  Sarana Sanggar Navigasi dan Dokumentasi Gender
                </h2>

                <div className="mt-7 space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Penyusun</p>
                      <p className="mt-1 text-sm font-extrabold text-slate-800">Septiana Cahyaningrum, S.Psi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Unit Kerja</p>
                      <p className="mt-1 text-sm font-extrabold text-slate-800">Bidang Kualitas Hidup Perempuan</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Dinas Pemberdayaan Perempuan, Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Nusa Tenggara Timur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
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
