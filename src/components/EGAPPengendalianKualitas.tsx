import React from 'react';
import {
  ArrowLeft,
  CheckSquare,
  ClipboardCheck,
  FileCheck2,
  FileText,
} from 'lucide-react';
import { motion } from 'motion/react';

const NTT_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/500px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png';

const REVIEW_DOCUMENTS = [
  {
    title: 'Panduan Review GAP 1',
    fileId: '1WyLSrLLsEMMni4VjP849c9CDzNFCLVKW',
  },
  {
    title: 'Panduan Review GAP 2',
    fileId: '1K0FOqQ1wF9uFTWGmKMkHSJWR_ogo6vrw',
  },
];

const CHECKLIST_FILE_ID =
  '1HtoOwLJbyddAW4zgQJJlsRclU_E5M16k';

type EGAPPengendalianKualitasProps = {
  onBack: () => void;
  onHome: () => void;
};

function DriveDocumentViewer({
  title,
  fileId,
}: {
  title: string;
  fileId: string;
}) {
  return (
    <div
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
      <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3.5 sm:px-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
          <FileText className="h-4.5 w-4.5" />
        </div>

        <h3 className="truncate text-sm font-bold text-slate-900 sm:text-base">
          {title}
        </h3>
      </div>

      <div className="bg-slate-100 p-2.5 sm:p-3">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <iframe
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            title={title}
            className="h-[320px] w-full sm:h-[360px] lg:h-[390px]"
            allow="autoplay"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function EGAPPengendalianKualitas({
  onBack,
  onHome,
}: EGAPPengendalianKualitasProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-[0.20]" />

      <div className="pointer-events-none fixed -right-52 -top-52 z-0 h-[560px] w-[560px] rounded-full bg-emerald-100/40 blur-3xl" />

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
              Pengendalian Kualitas GAP
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
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 sm:flex">
                <ClipboardCheck className="h-8 w-8" />
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Pengendalian Kualitas GAP
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Panduan review dan checklist pengendalian kualitas
                  Gender Analysis Pathway (GAP).
                </p>
              </div>
            </div>
          </motion.section>

          <div className="space-y-14">

            {/* PANDUAN REVIEW */}
            <motion.section
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FileCheck2 className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                    Panduan Review GAP
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Dokumen panduan review GAP.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {REVIEW_DOCUMENTS.map((document) => (
                  <DriveDocumentViewer
                    key={document.fileId}
                    {...document}
                  />
                ))}
              </div>
            </motion.section>

            {/* CHECKLIST */}
            <motion.section
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <CheckSquare className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                    Checklist Pengendalian Kualitas GAP
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Checklist untuk pemeriksaan dokumen GAP.
                  </p>
                </div>
              </div>

              <div className="mx-auto max-w-3xl">
                <DriveDocumentViewer
                  title="Checklist Pengendalian Kualitas GAP"
                  fileId={CHECKLIST_FILE_ID}
                />
              </div>
            </motion.section>

          </div>
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
