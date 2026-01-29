import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Desi`s Kitchen",
        descripion: "Recipe app for my mom(waiting for hosting)",
        image: "/projects/project1.png",
        tags: ["React-Native", "TailwindCss", "Neon", "Clerk", "Expo"],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 2,
        title: "Bulgaria inspired Pokemon Clone",
        descripion: "inspired by my hometown",
        image: "/projects/project3.png",
        tags: ["RPG Maker XP", "Ruby",],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 3,
        title: "Pokko",
        descripion: "Gaming website",
        image: "/gamewebsite.png",
        tags: ["Vercel", "NextJS", "Supabase", "Stream", "TailwindCss"],
        demoUrl: "https://game-swap-6wgn.vercel.app/",
        githubUrl: "https://github.com/Ovedenski1/game-swap",
    },
    {
        id: 4,
        title: "Kizuna",
        descripion: "Japanese courses(waiting for hosting)",
        image: "/kizuna.png",
        tags: ["NextJS", "Supabase", "TailwindCss"],
        githubUrl: "https://github.com/Ovedenski1/nihongo-site",
    },
    {
        id: 5,
        title: "TMS",
        descripion: "Translation pm tracker(still in progress)",
        image: "/tms.png",
        tags: ["NextJS", "Supabase", "TailwindCss"],
        githubUrl: "https://github.com/Ovedenski1/tms",
    },
      {
        id: 6,
        title: "Rithy",
        descripion: "Book writing helper",
        image: "/bookapp.png",
        tags: ["Expo", "Android Studio"],
        demoUrl: "https://drive.google.com/file/d/19ZzDwq_8sxpxezDSIWjmm4TXy7sMSQU0/view?usp=sharing",
        githubUrl: "https://github.com/Ovedenski1/book-bible",
    },


]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               {" "} 
               Coding <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent proejcts. Eacg oriehct was 
                carefully crafted with attention to detail,performance, 
                and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                     key={key}
                     className="group bg-card rounded-lg overlow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform. duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs  border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            
                        </div>

                        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.descripion}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                            <a
                             href={project.demoUrl}
                             target="_blank"
                             className="text-foreground/80 hover:text-primar transitions-colors duration-300"
                            >
                                <ExternalLink size={20}/>
                            </a>
                            <a
                             href={project.githubUrl}
                             target="_blank"
                             className="text-foreground/80 hover:text-primar transitions-colors duration-300"
                            >
                                <Github size={20}/>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Ovedenski1" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>;
};
