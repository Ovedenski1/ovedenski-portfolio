import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [clouds, setClouds] = useState([]);
  const [balloons, setBalloons] = useState([]);
  const [ufos, setUfos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    generateStars();
    generateMeteors();
    generateClouds();
    generateBalloons();
    generateUfos();

    const handleResize = () => {
      generateStars();
      generateClouds();
    };

    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  const generateClouds = () => {
    const numberOfClouds = 10;
    const newClouds = [];

    for (let i = 0; i < numberOfClouds; i++) {
      const direction = Math.random() < 0.5 ? "left" : "right";
      newClouds.push({
        id: i,
        width: Math.random() * 450 + 450,
        y: Math.random() * 80 + 10,
        speed: Math.random() * 20 + 20,
        direction,
      });
    }

    setClouds(newClouds);
  };

  const generateBalloons = () => {
    const numberOfBalloons = 1;
    const newBalloons = [];

    for (let i = 0; i < numberOfBalloons; i++) {
      newBalloons.push({
        id: i,
        size: Math.random() * 50 + 100,
        x: Math.random() * 100,
        delay: Math.random() * 0,
        speed: Math.random() * 15 + 15,
      });
    }

    setBalloons(newBalloons);
  };

  const generateUfos = () => {
    const numberOfUfos = 1; // Only one UFO at a time
    const newUfos = [];

    for (let i = 0; i < numberOfUfos; i++) {
      newUfos.push({
        id: i,
        size: Math.random() * 80 + 100, // 100-180px
        y: Math.random() * 50 + 10, // Vertical position (10%-60%)
        speed: Math.random() * 20 + 20, // 20-40 seconds animation duration
        direction: Math.random() < 0.5 ? "left" : "right",
      });
    }

    setUfos(newUfos);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}

      {!isDarkMode &&
        clouds.map((cloud) => (
          <div
            key={cloud.id}
            className="absolute top-0 opacity-50"
            style={{
              width: cloud.width + "px",
              height: "120px",
              top: cloud.y + "%",
              left: cloud.direction === "left" ? "100%" : "-200px",
              backgroundImage: "url('/cloud.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              animationName: cloud.direction === "left" ? "cloud-move-left" : "cloud-move-right",
              animationDuration: cloud.speed + "s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          />
        ))}

      {!isDarkMode &&
        balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="absolute opacity-80"
            style={{
              width: balloon.size + "px",
              height: balloon.size + "px",
              left: balloon.x + "%",
              bottom: "-100px",
              backgroundImage: "url('/balloon.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              animationName: "balloon-float-up",
              animationDuration: balloon.speed + "s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: balloon.delay + "s",
            }}
          />
        ))}

      {isDarkMode &&
        ufos.map((ufo) => (
          <div
            key={ufo.id}
            className="absolute"
            style={{
              width: ufo.size + "px",
              height: ufo.size * 0.6 + "px",
              top: ufo.y + "%", // Initial vertical position
              left: ufo.direction === "left" ? "100%" : "-200px",
              backgroundImage: "url('/ufo.png')", // Path to your UFO image
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              animation: `
                ${ufo.direction === "left" ? "ufo-move-left" : "ufo-move-right"} ${ufo.speed}s linear infinite,
                ufo-vertical-oscillation ${Math.random() * 2 + 1}s ease-in-out infinite
              `,
            }}
          />
        ))}

      <style>
        {`
        @keyframes cloud-move-left {
          0% { left: 100%; }
          100% { left: -200px; }
        }
        @keyframes cloud-move-right {
          0% { left: -200px; }
          100% { left: 100%; }
        }
        @keyframes balloon-float-up {
          0% { bottom: -100px; }
          100% { bottom: 110%; }
        }
        @keyframes ufo-move-left {
          0% { left: 100%; }
          100% { left: -200px; }
        }
        @keyframes ufo-move-right {
          0% { left: -200px; }
          100% { left: 100%; }
        }
        @keyframes ufo-vertical-oscillation {
          0% { transform: translateY(0); }
          25% { transform: translateY(-10%); }
          50% { transform: translateY(0); }
          75% { transform: translateY(10%); }
          100% { transform: translateY(0); }
        }
        `}
      </style>
    </div>
  );
};