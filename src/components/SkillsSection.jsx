import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming
  { name: "HTML/CSS", logo: "/logos/html-css.png", category: "coding" },
  { name: "JavaScript", logo: "/logos/javascript.png", category: "coding" },
  { name: "React", logo: "/logos/react.png", category: "coding" },
  { name: "Node.js", logo: "/logos/nodejs.png", category: "coding" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.png", category: "coding" },
  { name: "GitHub", logo: "/logos/github.png", category: "coding" },
  { name: "Figma", logo: "/logos/figma.png", category: "coding" },
  { name: "Bootstrap", logo: "/logos/bootstrap.png", category: "coding" },
  { name: "VS Code", logo: "/logos/vscode.png", category: "coding" },

  // CAT Tools
  { name: "MemoQ", logo: "/logos/memoq.png", category: "CAT Tools" },
  { name: "XTM", logo: "/logos/xtm.png", category: "CAT Tools" },
  { name: "Phrase", logo: "/logos/phrase.png", category: "CAT Tools" },
  { name: "Plunet", logo: "/logos/plunet.png", category: "CAT Tools" },
  { name: "WordBee", logo: "/logos/wordbee.png", category: "CAT Tools" },
  { name: "SDL Studio", logo: "/logos/sdl-studio.png", category: "CAT Tools" },
  { name: "Smartling", logo: "/logos/smartling.png", category: "CAT Tools" },

  // Generic
  { name: "MS Office", logo: "/logos/ms-office.png", category: "generic" },
  { name: "Slack/Teams", logo: "/logos/slack-teams.png", category: "generic" },
  { name: "Zendesk", logo: "/logos/zendesk.png", category: "generic" },
  { name: "Google Forms", logo: "/logos/google-forms.png", category: "generic" },
  { name: "Canva", logo: "/logos/canva.png", category: "generic" },
  { name: "OBS Studio", logo: "/logos/obs-studio.png", category: "generic" },

  //languages
  { name: "English", logo: "/logos/english.png", category: "languages" },
  { name: "German", logo: "/logos/germany.png", category: "languages" },
];

const categories = ["all", "CAT Tools", "coding", "languages", "generic"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};