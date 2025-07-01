import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return (<section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I`m </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}
                        Lyuboslav 
                    </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                        {" "}
                        Ovedenski
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                     I manage projects by balancing scope, time, and resources to consistently deliver stellar quality and performance. I specialize in translation and localization, ensuring that projects meet linguistic and cultural standards while maintaining efficiency and accuracy.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" <a
  href="#projects"
  style={{
    padding: "0.5rem 1.5rem",           // px-6 py-2
    borderRadius: "9999px",              // rounded-full
    backgroundColor: "#7c3aed",          // replace with your primary color
    color: "#fff",                      // replace with your text color
    fontWeight: 500,
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    userSelect: "none",
    border: "none",
    textDecoration: "none",
  }}
>>
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
 );
};
