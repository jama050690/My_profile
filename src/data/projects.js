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
    slug: "my-profile",
    title: "My Profile — Portfolio",
    description:
      "Ushbu portfolio saytining o‘zi. React, Vite va Tailwind CSS asosida qurilgan, GitHub Actions orqali avtomatik deploy qilinadi.",
    stack: "React, Vite, Tailwind CSS",
    tags: ["React", "Vite", "Tailwind CSS", "GitHub Actions"],
    icon: "fa-solid fa-laptop-code",
    accent: ["#8b5cf6", "#0f172a"],
    liveUrl: "https://jamshiddin.uz",
    repoUrl: "https://github.com/jama050690/My_profile",
    year: "2026",
    role: "Frontend Developer",
    summary:
      "Loyihalarim, ko‘nikmalarim va GitHub faoliyatimni bitta joyda taqdim etuvchi shaxsiy portfolio sayti.",
    highlights: [
      "GitHub REST API orqali jonli repository statistikasi va so‘nggi push qilingan loyihalar",
      "GitHub Actions yordamida avtomatik build va custom domenga (jamshiddin.uz) deploy",
      "Scroll asosidagi reveal animatsiyalar va dark/light rejim almashtirish",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null;
}
