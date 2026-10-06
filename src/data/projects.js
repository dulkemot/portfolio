export const profile = {
  name: "dulkemot",
  role: "Web Developer — Astro + JavaScript",
  location: "Lampung, Indonesia",
  tagline: "Company profile cepat, katalog statis, landing video hero.",
  email: "hello@dulkemot.dev",
};

export const skills = [
  "js", "ts", "astro", "nodejs", "html", "css", "tailwind", "git", "figma",
];

export const projects = [
  {
    title: "APN — Distributor FMCG Company Profile",
    stack: ["Astro", "JS", "Static", "Video Hero"],
    desc: "Company profile 4 halaman: beranda video hero full-bleed, produk 14 kategori + harga, kegiatan & event, kontak. Static output, tanpa backend.",
    points: [
      "Hero video 92vh + marquee logo 13 brand",
      "Katalog produk statis via src/data/site.js",
      "Build static, deploy murah ke shared hosting / Pages",
    ],
    demo: "#",
    code: "https://github.com/dulkemot/portfolio",
  },
  {
    title: "Landing + Video Hero Snippet",
    stack: ["HTML", "CSS", "JS"],
    desc: "Snippet hero video reusable: scrim gradient, nav overlay, side-card operasional. <8MB mp4, poster fallback.",
    points: ["Copy-paste 1 file mockup-apn.html", "Responsive 900px breakpoint", "Tanpa framework"],
    demo: "#",
    code: "https://github.com/dulkemot/portfolio",
  },
  {
    title: "Katalog Produk Statis",
    stack: ["Astro", "JS"],
    desc: "Grid katalog dari 1 file data JS. Tambah kategori cukup edit array, tidak perlu CMS.",
    points: ["14 kategori, tabel harga per dus/pack", "Lazy-load images", "Mudah diupdate manual"],
    demo: "#",
    code: "https://github.com/dulkemot/portfolio",
  },
];
