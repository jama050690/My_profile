export const projects = [
  {
    slug: "flypost-uz",
    title: "flypost.uz",
    description:
      "Zamonaviy frontend yechimlar asosida tayyorlangan loyiha. Foydalanuvchi uchun qulay va responsive interfeysga ega.",
    stack: "React, Vite, Tailwind",
    tags: ["React", "Vite", "Tailwind CSS"],
    icon: "fa-solid fa-bolt",
    accent: ["#0ea5e9", "#0f172a"],
    liveUrl: "https://flypost.uz",
    repoUrl: "",
    year: "2026",
    role: "Frontend Developer",
    summary:
      "Flypost uchun tezkor, sodda va foydalanuvchiga yo‘naltirilgan web tajriba yaratishga qaratilgan loyiha.",
    highlights: [
      "Responsive va tez ishlaydigan landing page",
      "Toza vizual hierarchy va kuchli CTA bloklari",
      "Deploy uchun tayyor React frontend arxitekturasi",
    ],
  },
  {
    slug: "bootchat",
    title: "Bootchat",
    description:
      "Chat va aloqa jarayonlarini soddalashtirishga qaratilgan loyiha. Alohida live link orqali ishga tushadi.",
    stack: "External Project",
    tags: ["Chat", "Live Deploy"],
    icon: "fa-solid fa-comments",
    accent: ["#14b8a6", "#082f49"],
    liveUrl: "https://jamshiddin.uz/bootchat.uz",
    repoUrl: "",
    year: "2026",
    role: "Web Developer",
    summary:
      "Bootchat muloqot jarayonini soddalashtirish va foydalanuvchiga tushunarli digital tajriba berishga qaratilgan loyiha.",
    highlights: [
      "Alohida loyiha sahifasi va launch linki",
      "Qulay foydalanish uchun soddalashtirilgan UI",
      "Portfolio ichida case-study ko‘rinishida taqdim etiladi",
    ],
  },
  {
    slug: "primeavto",
    title: "PrimeAvto",
    description:
      "Yangi va haydalgan avtomobillarni qulay topish, solishtirish va xarid qilish uchun onlayn marketplace.",
    stack: "Next.js",
    tags: ["Next.js", "React", "Marketplace"],
    icon: "fa-solid fa-car",
    accent: ["#f97316", "#0f172a"],
    liveUrl: "https://prime-avto-uz-kvq7.vercel.app/",
    repoUrl: "https://github.com/jama050690/PrimeAvto.uz",
    year: "2026",
    role: "Frontend Developer",
    summary:
      "Avtomobil e’lonlari, dilerlar va avtoxizmat xizmatlarini bitta platformada jamlagan marketplace.",
    highlights: [
      "E’lonlar, dilerlar va avtoxizmat bo‘limlari bitta platformada",
      "E’lonlarni solishtirish va sevimlilarga qo‘shish funksiyasi",
      "Next.js asosida qurilgan tezkor va SEO-ga qulay arxitektura",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null;
}
