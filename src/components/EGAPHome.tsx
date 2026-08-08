import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  GraduationCap,
  HelpCircle,
  MessageSquareText,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import { motion } from 'motion/react';

const NTT_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/500px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png';

const GOOGLE_SITE_URL = 'https://sites.google.com/view/e-gaptoolkit/beranda?authuser=0';

type EGAPHomeProps = {
  onBack: () => void;
  onOpenTujuan: () => void;
  onOpenVideoTutorial: () => void;
  onOpenEModul: () => void;
  onOpenPengendalianKualitas: () => void;
  onLoginOPD: () => void;
};

const services = [
  {
    title: 'Tujuan E-GAP',
    description:
      'Memahami tujuan, manfaat, dan peran E-GAP dalam mendukung penyusunan dokumen analisis gender yang lebih terarah.',
    icon: Target,
    iconClass: 'bg-blue-50 text-blue-700 border-blue-100',
    action: 'tujuan',
  },
  {
    title: 'Video Tutorial',
    description:
      'Panduan visual untuk membantu pengguna memahami tahapan penyusunan dan review dokumen GAP secara lebih mudah.',
    icon: PlayCircle,
    iconClass: 'bg-rose-50 text-rose-700 border-rose-100',
    action: 'video',
  },
  {
    title: 'E-Modul Penyusunan GAP',
    description:
      'Materi pembelajaran digital sebagai referensi praktis dalam menyusun Gender Analysis Pathway.',
    icon: BookOpen,
    iconClass: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    action: 'emodul',
  },
  {
    title: 'Pengendalian Kualitas GAP',
    description:
      'Checklist dan panduan untuk memastikan dokumen GAP telah memenuhi unsur dan kualitas yang dibutuhkan.',
    icon: ClipboardCheck,
    iconClass: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    action: 'quality',
  },
  {
    title: 'Layanan E-GAP Toolkit',
    description:
      'Akses layanan pendukung untuk membantu proses penyusunan, konsultasi, dan evaluasi dokumen GAP.',
    icon: HelpCircle,
    iconClass: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    title: 'Survei Kepuasan',
    description:
      'Sampaikan pengalaman dan masukan agar layanan E-GAP Toolkit dapat terus dikembangkan dan diperbaiki.',
    icon: MessageSquareText,
    iconClass: 'bg-violet-50 text-violet-700 border-violet-100',
  },
];

export default function EGAPHome({ onBack, onOpenTujuan, onOpenVideoTutorial, onOpenEModul, onOpenPengendalianKualitas, onLoginOPD }: EGAPHomeProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-[0.28]" />
      <div className="pointer-events-none fixed -right-56 -top-56 z-0 h-[620px] w-[620px] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-56 -left-40 z-0 h-[520px] w-[520px] rounded-full bg-indigo-100/45 blur-3xl" />

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
          <button
            type="button"
            onClick={onBack}
            className="flex min-w-0 items-center gap-3 text-left"
            aria-label="Kembali ke SIPMODAG"
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
                <span className="truncate text-base font-extrabold tracking-tight text-primary sm:text-lg">E-GAP Toolkit</span>
                <span className="hidden rounded-md bg-blue-50 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-blue-700 sm:inline">SIPMODAG</span>
              </div>
              <p className="mt-0.5 hidden text-[9px] font-bold uppercase tracking-wider text-slate-500 sm:block">
                DP3AP2KB Provinsi NTT
              </p>
            </div>
          </button>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 sm:px-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Kembali ke SIPMODAG</span>
              <span className="sm:hidden">Kembali</span>
            </button>
            <button
              type="button"
              onClick={onLoginOPD}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#0F172A] px-3 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-slate-800 sm:px-4"
            >
              <ShieldCheck className="h-4 w-4" />
              <span className="hidden sm:inline">LOGIN OPD</span>
              <span className="sm:hidden">LOGIN</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 overflow-hidden px-4 pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-blue-800">
              <Sparkles className="h-3.5 w-3.5" />
              Terintegrasi dalam SIPMODAG
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                E-GAP
                <span className="block text-[#1E40AF]">Toolkit</span>
              </h1>
              <p className="max-w-2xl text-base font-semibold text-slate-700 sm:text-lg">
                Electronic Gender Analysis Pathway
              </p>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Platform digital untuk belajar, menyusun, mereview, dan mendukung pengendalian kualitas dokumen Gender Analysis Pathway (GAP) di lingkungan DP3AP2KB Provinsi NTT.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <a
                href="#layanan-egap"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E40AF] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-xl"
              >
                Jelajahi E-GAP
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={onLoginOPD}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                Masuk SIPMODAG
                <Workflow className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-blue-100/70 to-indigo-100/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-2xl shadow-slate-200/60 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-700">Alur Terintegrasi</p>
                  <h2 className="mt-1 text-lg font-black text-primary">Belajar sampai monitoring</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-3 pt-5">
                {[
                  ['01', 'Pelajari', 'Akses modul, tutorial, dan panduan E-GAP.'],
                  ['02', 'Susun & Review', 'Gunakan acuan kualitas untuk menyiapkan dokumen GAP.'],
                  ['03', 'Unggah ke SIPMODAG', 'Dokumen OPD masuk ke proses monitoring dan review.'],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-black text-blue-800 shadow-sm ring-1 ring-slate-200">
                      {number}
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-slate-900">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-800">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                E-GAP dan SIPMODAG berada dalam satu alur layanan digital.
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <section id="layanan-egap" className="relative z-10 border-y border-slate-200/80 bg-white/90 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1E40AF]">E-GAP Toolkit</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-4xl">Pusat pembelajaran dan pengendalian kualitas GAP</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Seluruh layanan dari E-GAP Google Sites disiapkan untuk dipindahkan ke tampilan baru yang konsisten dengan SIPMODAG.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={service.action === 'tujuan' ? onOpenTujuan : service.action === 'video' ? onOpenVideoTutorial : service.action === 'emodul' ? onOpenEModul : service.action === 'quality' ? onOpenPengendalianKualitas : undefined}
                  onKeyDown={service.action ? (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      if (service.action === 'tujuan') onOpenTujuan();
                      if (service.action === 'video') onOpenVideoTutorial();
                      if (service.action === 'emodul') onOpenEModul();
                      if (service.action === 'quality') onOpenPengendalianKualitas();
                    }
                  } : undefined}
                  role={service.action ? 'button' : undefined}
                  tabIndex={service.action ? 0 : undefined}
                  className={`group rounded-2xl border border-slate-300 bg-white p-6 shadow-md shadow-slate-200/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-300/50 ${service.action ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300' : ''}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 ${service.iconClass}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{service.description}</p>
                  <div className={`mt-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider ${service.action ? 'text-blue-700' : 'text-slate-400'}`}>
                    <span>{service.action ? 'Buka halaman' : 'Konten E-GAP'}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="overflow-hidden rounded-[28px] bg-primary p-7 text-white shadow-xl sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-300">Masa Transisi</p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">E-GAP sedang dipindahkan ke SIPMODAG</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  Selama materi detail belum selesai dimigrasikan, versi Google Sites tetap dapat diakses sebagai referensi.
                </p>
              </div>
              <a
                href={GOOGLE_SITE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-extrabold text-primary transition-colors hover:bg-slate-100"
              >
                Buka Google Sites
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-800 bg-primary py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
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
