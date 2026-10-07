// Base path agar jalan di GitHub Pages project site maupun domain root.
export const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export const profile = {
  name: "dulkemot",
  role: "Web Developer — Astro + JavaScript",
  location: "Lampung, Indonesia",
  tagline: "Company profile cepat, katalog statis, landing video hero.",
  email: "hello@dulkemot.dev",
  wa: "https://wa.me/6282340336561?text=Halo%20dulkemot,%20saya%20lihat%20portfolio%20kamu%20di%20GitHub.",
};

export const skills = [
  "js", "ts", "astro", "nodejs", "html", "css", "tailwind", "git", "figma",
];

export const services = [
  { t: "Company Profile", d: "4–5 halaman statis: beranda hero video, produk, kegiatan, kontak. Cepat di HP, SEO oke." },
  { t: "Katalog Statis", d: "Seluruh katalog cukup di 1 file data JS. Tambah produk tanpa CMS/database." },
  { t: "Landing Page", d: "Satu halaman fokus konversi: headline, bukti operasional, tombol WA melayang." },
];

export const projects = [
  {
    title: "Company Profile Starter",
    stack: ["Astro", "JS", "Static", "Video Hero"],
    desc: "Template company profile 4 halaman: hero video full-bleed, katalog produk, event, kontak + tombol WA. Live dan siap dipakai.",
    points: [
      "Hero video + marquee brand + kartu operasional berfoto",
      "Katalog & event cukup edit 1 file data",
      "Deploy otomatis ke GitHub Pages",
    ],
    demo: "https://dulkemot.github.io/company-profile-starter/",
    code: "https://github.com/dulkemot/company-profile-starter",
  },
  {
    title: "Portfolio (situs ini)",
    stack: ["Astro", "JS", "Pages"],
    desc: "Situs portfolio ini sendiri: 1 halaman, data terpusat, build statis, deploy otomatis tiap push.",
    points: [
      "Skor Pages hijau: 1 file data untuk semua konten",
      "Tanpa framework JS di browser — murni HTML/CSS",
      "Workflow deploy GitHub Pages bawaan",
    ],
    demo: "https://dulkemot.github.io/portfolio/",
    code: "https://github.com/dulkemot/portfolio",
  },
  {
    title: "GitHub Profile",
    stack: ["Markdown", "Actions", "Stats"],
    desc: "Repo profil khusus: visitor counter, skill badges, stats/streak, contribution snake via GitHub Actions.",
    points: [
      "Snake contributions update tiap 12 jam",
      "Stats + top-languages otomatis",
      "Shields + skillicons",
    ],
    demo: "https://github.com/dulkemot",
    code: "https://github.com/dulkemot/dulkemot",
  },
];
