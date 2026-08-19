export const projects = [
  {
    slug: "flypost-uz",
    title: "flypost.uz",
    description: {
      uz: "Zamonaviy frontend yechimlar asosida tayyorlangan loyiha. Foydalanuvchi uchun qulay va responsive interfeysga ega.",
      en: "A project built with modern frontend solutions, featuring a user-friendly, responsive interface.",
    },
    stack: {
      uz: "React, Vite, Tailwind",
      en: "React, Vite, Tailwind",
    },
    tags: ["React", "Vite", "Tailwind CSS"],
    icon: "fa-solid fa-bolt",
    accent: ["#0ea5e9", "#0f172a"],
    liveUrl: "https://www.flypost.uz/",
    repoUrl: "https://github.com/jama050690/Sending",
    year: "2026",
    role: {
      uz: "Frontend dasturchi",
      en: "Frontend Developer",
    },
    summary: {
      uz: "Flypost uchun tezkor, sodda va foydalanuvchiga yo‘naltirilgan web tajriba yaratishga qaratilgan loyiha.",
      en: "A project focused on creating a fast, simple, and user-centered web experience for Flypost.",
    },
    highlights: [
      {
        uz: "Responsive va tez ishlaydigan landing page",
        en: "Responsive, fast-loading landing page",
      },
      {
        uz: "Toza vizual hierarchy va kuchli CTA bloklari",
        en: "Clean visual hierarchy and strong CTA blocks",
      },
      {
        uz: "Deploy uchun tayyor React frontend arxitekturasi",
        en: "Deploy-ready React frontend architecture",
      },
    ],
  },
  {
    slug: "bootchat",
    title: "Bootchat",
    description: {
      uz: "Chat va aloqa jarayonlarini soddalashtirishga qaratilgan loyiha. Alohida live link orqali ishga tushadi.",
      en: "A project focused on simplifying chat and communication flows. Runs via a separate live link.",
    },
    stack: {
      uz: "Tashqi loyiha",
      en: "External Project",
    },
    tags: ["Chat", "Live Deploy"],
    icon: "fa-solid fa-comments",
    accent: ["#14b8a6", "#082f49"],
    liveUrl: "https://jamshiddin.uz/bootchat.uz",
    repoUrl: "",
    year: "2026",
    role: {
      uz: "Veb-dasturchi",
      en: "Web Developer",
    },
    summary: {
      uz: "Bootchat muloqot jarayonini soddalashtirish va foydalanuvchiga tushunarli digital tajriba berishga qaratilgan loyiha.",
      en: "A project focused on simplifying the Bootchat communication flow and delivering a clear digital experience to users.",
    },
    highlights: [
      {
        uz: "Alohida loyiha sahifasi va launch linki",
        en: "Dedicated project page and launch link",
      },
      {
        uz: "Qulay foydalanish uchun soddalashtirilgan UI",
        en: "Simplified UI for easy use",
      },
      {
        uz: "Portfolio ichida case-study ko‘rinishida taqdim etiladi",
        en: "Presented as a case study within the portfolio",
      },
    ],
  },
  {
    slug: "primeavto",
    title: "PrimeAvto",
    description: {
      uz: "Yangi va haydalgan avtomobillarni qulay topish, solishtirish va xarid qilish uchun onlayn marketplace.",
      en: "An online marketplace for conveniently finding, comparing, and purchasing new and used cars.",
    },
    stack: {
      uz: "Next.js",
      en: "Next.js",
    },
    tags: ["Next.js", "React", "Marketplace"],
    icon: "fa-solid fa-car",
    accent: ["#f97316", "#0f172a"],
    liveUrl: "https://prime-avto-uz-kvq7.vercel.app/",
    repoUrl: "https://github.com/jama050690/PrimeAvto.uz",
    year: "2026",
    role: {
      uz: "Frontend dasturchi",
      en: "Frontend Developer",
    },
    summary: {
      uz: "Avtomobil e’lonlari, dilerlar va avtoxizmat xizmatlarini bitta platformada jamlagan marketplace.",
      en: "A marketplace that brings car listings, dealers, and auto-service providers together on a single platform.",
    },
    highlights: [
      {
        uz: "E’lonlar, dilerlar va avtoxizmat bo‘limlari bitta platformada",
        en: "Listings, dealers, and auto-service sections in one platform",
      },
      {
        uz: "E’lonlarni solishtirish va sevimlilarga qo‘shish funksiyasi",
        en: "Compare listings and add-to-favorites functionality",
      },
      {
        uz: "Next.js asosida qurilgan tezkor va SEO-ga qulay arxitektura",
        en: "Fast, SEO-friendly architecture built on Next.js",
      },
    ],
  },
  {
    slug: "mini-instagram-clone",
    title: "Instagram MVP",
    description: {
      uz: "Instagramga o‘xshash to‘liq funksional MVP — React frontendi va NestJS + Prisma backendidan tashkil topgan monorepo loyiha.",
      en: "A full-featured Instagram-style MVP — a monorepo project built with a React frontend and a NestJS + Prisma backend.",
    },
    stack: {
      uz: "React, NestJS, Prisma, Tailwind CSS",
      en: "React, NestJS, Prisma, Tailwind CSS",
    },
    tags: ["React", "NestJS", "Prisma", "Monorepo"],
    icon: "fa-brands fa-instagram",
    accent: ["#d946ef", "#0f172a"],
    liveUrl: "https://mini-instagram-clone-monorope-web-n.vercel.app/",
    repoUrl: "https://github.com/jama050690/Mini_instagram_clone_monorope",
    year: "2026",
    role: {
      uz: "Full-stack dasturchi",
      en: "Full-stack Developer",
    },
    summary: {
      uz: "Ijtimoiy tarmoq mantig‘ini — autentifikatsiya, media yuklash va bildirishnomalarni — to‘liq monorepo arxitekturada amalga oshirishga qaratilgan loyiha.",
      en: "A project focused on implementing core social-network logic — authentication, media uploads, and notifications — within a full monorepo architecture.",
    },
    highlights: [
      {
        uz: "JWT va Google OAuth orqali xavfsiz autentifikatsiya",
        en: "Secure authentication via JWT and Google OAuth",
      },
      {
        uz: "Cloudinary orqali media yuklash va web-push bildirishnomalar",
        en: "Media uploads via Cloudinary and web-push notifications",
      },
      {
        uz: "Docker va Prisma bilan boshqariladigan React + NestJS monorepo",
        en: "React + NestJS monorepo managed with Docker and Prisma",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null;
}
