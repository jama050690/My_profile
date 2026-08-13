export const skillGroups = [
  {
    labelKey: "skills.frontend",
    icon: "fa-solid fa-display",
    items: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    labelKey: "skills.backend",
    icon: "fa-solid fa-server",
    items: ["Node.js", "NestJS", "PostgreSQL", "Firebase / Firestore", "coturn (TURN server)"],
  },
  {
    labelKey: "skills.flutter",
    icon: "fa-solid fa-mobile-screen-button",
    items: ["Flutter", "Dart", "WebRTC (flutter_webrtc)"],
  },
  {
    labelKey: "skills.tools",
    icon: "fa-solid fa-terminal",
    items: ["Vite", "Git & GitHub", "REST API", "Responsive Design"],
  },
];

export const skills = skillGroups.flatMap((group) => group.items);
