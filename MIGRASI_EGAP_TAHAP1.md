# Integrasi E-GAP Toolkit - Tahap 1

Perubahan tahap ini sengaja dibatasi pada antarmuka publik agar alur dashboard OPD, operator, upload, review, API, dan database SIPMODAG tetap tidak disentuh.

## Ditambahkan

- `src/components/EGAPHome.tsx`
  - Halaman baru E-GAP Toolkit dengan gaya visual yang mengikuti SIPMODAG.
  - Hero E-GAP.
  - Alur E-GAP -> SIPMODAG.
  - Enam kartu layanan: Tujuan, Video Tutorial, E-Modul, Pengendalian Kualitas, Layanan E-GAP, Survei Kepuasan.
  - Tombol kembali ke SIPMODAG dan Login OPD.
  - Link sementara ke Google Sites selama konten detail belum dimigrasikan.

- `src/App.tsx`
  - Navigasi halaman publik `home` / `egap` tanpa menambah React Router.
  - URL browser berubah menjadi `/egap` ketika E-GAP dibuka.
  - Tombol E-GAP Toolkit pada hero SIPMODAG.
  - Tombol E-GAP Toolkit pada navbar desktop.
  - Section "Satu Platform Terintegrasi" pada homepage.

- `vercel.json`
  - Rewrite `/egap` dan `/egap/*` ke SPA Vite agar direct URL tetap dapat dibuka di Vercel.

## Belum diubah

- Dashboard OPD
- Dashboard Operator
- Login OPD / Operator
- Upload dokumen
- Review dokumen
- API Google Apps Script
- TiDB / MySQL
- Google Sheet

## Tahap berikutnya

Migrasikan konten E-GAP dari Google Sites satu per satu ke halaman lokal, dimulai dari `Tujuan`, kemudian `Video Tutorial`, `E-Modul Penyusunan GAP`, `Pengendalian Kualitas GAP`, `Layanan E-GAP Toolkit`, dan `Survei Kepuasan`.
