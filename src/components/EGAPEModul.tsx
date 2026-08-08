import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Building2,
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

export default function EGAPEModul({
  onBack,
  onHome,
}: EGAPEModulProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">

      {/* BACKGROUND */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="pointer-events-none fixed -right-48 -top-48 z-0 h-[560px] w-[560px] rounded-full bg-indigo-100/40 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-56 -left-40 z-0 h-[520px] w-[520px] rounded-full bg-blue-100/35 blur-3xl" />

      {/* NAVBAR */}
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
              E-Modul
            </span>
          </div>

          {/* HEADER */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-7 overflow-hidden rounded-[26px] border border-slate-300 bg-white shadow-md shadow-slate-200/50"
          >
            <div className="flex items-center gap-5 p-6 sm:p-8">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 sm:flex">
                <BookOpen className="h-7 w-7" />
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  E-Modul Penyusunan GAP
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Materi penyusunan Gender Analysis Pathway (GAP).
                </p>
              </div>
            </div>
          </motion.section>

          {/* MODULE */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="overflow-hidden rounded-[28px] border border-slate-300 bg-white shadow-xl shadow-slate-300/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)]">

              {/* COVER */}
              <div className="flex items-center justify-center border-b border-slate-200 bg-slate-100 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="w-full max-w-[300px] overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl shadow-slate-400/30">
                  <img
                    src={sasandoGenderCover}
                    alt="Sampul E-Modul Sasando Gender"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* INFO */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-700">
                  SASANDO GENDER
                </p>

                <h2 className="mt-3 max-w-xl text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                  Sarana Sanggar Navigasi dan Dokumentasi Gender
                </h2>

                <div className="mt-8 space-y-3">

                  {/* PENYUSUN */}
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200">
                      <UserRound className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Penyusun
                      </p>

                      <p className="mt-1 text-sm font-extrabold text-slate-900">
                        Septiana Cahyaningrum, S.Psi
                      </p>
                    </div>
                  </div>

                  {/* UNIT KERJA */}
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200">
                      <Building2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Unit Kerja
                      </p>

                      <p className="mt-1 text-sm font-extrabold text-slate-900">
                        Bidang Kualitas Hidup Perempuan
                      </p>

                      <p className="mt-1.5 max-w-xl text-xs leading-5 text-slate-500">
                        DP3AP2KB Provinsi Nusa Tenggara Timur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
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
