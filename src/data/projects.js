// Base path agar jalan di GitHub Pages project site maupun domain root.
export const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export const profile = {
  name: "M. Jaenussolihin",
  fullName: "Muhammad Jaenussolihin",
  role: "Information Technology & Network",
  title2: "IT Network Manager — DevOps & Infrastructure",
  location: "Bandar Lampung, Indonesia",
  tagline: "Berpengalaman sejak 2008: jaringan ISP/enterprise, FTTH, data center & virtualisasi, monitoring, dan web deployment.",
  email: "jaynussolihin@gmail.com",
  phone: "082340336561",
  wa: "https://wa.me/6282340336561?text=Halo%20Pak%20Jaenussolihin,%20saya%20lihat%20portfolio%20Anda%20di%20GitHub.",
  linkedin: "https://www.linkedin.com/in/jay83",
  github: "https://github.com/dulkemot",
};

// Ikon skillicons yang pasti tersedia
export const skills = [
  "linux", "ubuntu", "debian", "docker", "kubernetes", "proxmox",
  "grafana", "prometheus", "nginx", "cloudflare", "laravel", "git",
];

export const skillBadges = [
  "MikroTik", "Cisco", "Routing-Switching", "VLAN", "VPN", "Firewall",
  "FTTH-FTTx", "MPLS-MetroE", "Proxmox-VE", "Zabbix", "LibreNMS", "Cacti",
];

export const services = [
  { t: "IT Infrastructure Management", d: "Operasional IT, virtualisasi Proxmox VE, Docker, Linux Ubuntu/Debian, NAS, cloud & layanan self-hosted." },
  { t: "Network ISP & Enterprise", d: "MikroTik & Cisco, routing-switching, VLAN, VPN, firewall, wireless, load balancing, MPLS/Metro-E, FTTH/FTTx." },
  { t: "Monitoring & Security", d: "Grafana, Prometheus, Zabbix, Cacti/MRTG, LibreNMS. Cloudflare DNS/CDN, tunneling, troubleshooting & incident recovery." },
  { t: "Web Deployment", d: "Deploy Laravel & situs statis (Astro), internal & client-facing apps untuk operasional dan klien hospitality." },
];

export const experience = [
  {
    company: "PT. Teknologi Arindama Andra",
    role: "Information Technology Network Manager",
    period: "Nov 2024 — Sekarang",
    desc: "Mengelola operasional IT, infrastruktur, proyek & tim teknis. Proyek Internet dan CCTV hospitality untuk hotel-hotel di Lampung: perencanaan infrastruktur, deploy jaringan, maintenance, dan support. Memimpin pengembangan website/aplikasi internal & klien.",
  },
  {
    company: "PT. Inti Bangun Sejahtera",
    role: "Network Operations Center Engineer",
    period: "Jun 2023 — Nov 2024",
    desc: "Konfigurasi & troubleshooting Cisco routers/switches dan non-Cisco, monitoring performa jaringan proyek Metro-E area Lampung.",
  },
  {
    company: "PT. Airwave Aji Perkasa",
    role: "FTTH Project Coordinator",
    period: "Nov 2022 — Des 2022",
    desc: "Koordinator proyek FTTH area Lampung.",
  },
  {
    company: "PT. MKI Group",
    role: "FTTH Project Supervisor",
    period: "Jul 2018 — Nov 2020",
    desc: "Technical Supervisor: memimpin & mengoordinasikan 23 tim teknis, strategi dan rencana kerja operasional, monitoring performa tim lapangan.",
  },
  {
    company: "PT. Huawei Services",
    role: "2G/3G/4G Radio Network Optimization Engineer",
    period: "Mei 2012 — Apr 2017",
    desc: "Analisa worst cell & improvement KPI, follow-up komplain pelanggan sisi radio, reporting ke manager.",
  },
  {
    company: "XL Axiata",
    role: "RF Optimization Engineer",
    period: "Mei 2010 — Apr 2012",
    desc: "Optimasi & radio planning jaringan 2G/3G/4G saat rollout, analisa KPI dan perbaikan kualitas jaringan.",
  },
  {
    company: "PT. Lintas Sarana Komunikasi",
    role: "Drive Test Engineer",
    period: "Apr 2008 — Mar 2009",
    desc: "Drive test & walk test sinyal GSM, benchmarking kualitas sinyal, pengumpulan data dan reporting.",
  },
];

export const education = [
  { school: "Universitas Lampung", detail: "S1 Teknik Elektro · 2001 — 2008" },
  { school: "SMAN 1 Malingping", detail: "IPA · 1998 — 2001" },
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
      "1 file data untuk semua konten",
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
