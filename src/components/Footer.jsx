import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* All Rights Reserved Text */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Lyuboslav Ovedenski, All rights reserved.
        </p>

        {/* Client Logos Section */}
        <div className="text-center md:text-left">
          <p className="text-sm mb-2 text-muted-foreground">
            Notable clients I’ve delivered successful projects for:
          </p>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img
              src="/logos/apple.png"
              alt="Client 1"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/logos/meta.png"
              alt="Client 2"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/logos/google.png"
              alt="Client 3"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/logos/lg.png"
              alt="Client 4"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/logos/sony.png"
              alt="Client 5"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/logos/TEMU.png"
              alt="Client 6"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/logos/Toyota.png"
              alt="Client 7"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/logos/UPS.png"
              alt="Client 8"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>

        {/* Back to Top Button */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
