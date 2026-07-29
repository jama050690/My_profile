export const skillGroups = [
  {
    label: "Frontend",
    icon: "fa-solid fa-display",
    items: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: "fa-solid fa-server",
    items: ["Node.js", "NestJS", "PostgreSQL", "Firebase / Firestore", "coturn (TURN server)"],
  },
  {
    label: "Flutter",
    icon: "fa-solid fa-mobile-screen-button",
    items: ["Flutter", "Dart", "WebRTC (flutter_webrtc)"],
  },
  {
    label: "Tools & Workflow",
    icon: "fa-solid fa-terminal",
    items: ["Vite", "Git & GitHub", "REST API", "Responsive Design"],
  },
];

export const skills = skillGroups.flatMap((group) => group.items);
