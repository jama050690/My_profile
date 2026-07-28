export const skillGroups = [
  {
    label: "Frontend",
    icon: "fa-solid fa-display",
    items: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    label: "Tools & Workflow",
    icon: "fa-solid fa-terminal",
    items: ["Vite", "Git & GitHub", "Responsive Design"],
  },
];

export const skills = skillGroups.flatMap((group) => group.items);
