import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Project not ready",
        descripion: "Still in development",
        image: "/projects/project1.avif",
        tags: ["React", "TailwindCss", "Superbase"],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 2,
        title: "VarnaTravel",
        descripion: "Travel website about Varna",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS", "Javascript"],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 3,
        title: "Pokedex",
        descripion: "Simple pokedex with the original 151 PockedMonsters ",
        image: "/projects/project3.png",
        tags: ["HTML", "CSS", "Javascript"],
        demoUrl: "#",
        githubUrl: "#",
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
                <a href="https://github.com" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>;
};