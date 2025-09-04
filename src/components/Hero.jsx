import React, { useState, useEffect } from "react";

const slides = [
  { src: "/images/bungee1.jpg" },
  { src: "/images/slide2.jpg" },
  { src: "/images/slide3.jpg" },
  { src: "/images/paragliding3.jpg" },
  { src: "/images/rafting1.jpg" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center font-poppins overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt="Adventure"
            className={`absolute h-full w-full object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 drop-shadow-2xl animate-slideUp">
          Adventure Awaits in Rishikesh
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow-lg animate-fadeIn">
          Rafting, Bungee Jumping, Camping & more —{" "}
          <span className="text-purple-400 font-semibold">
            XtremethrillZone
          </span>{" "}
          brings you unforgettable thrill experiences 🌊
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-slideUp">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_b0pLTJAmswxzYh47ynf7k-ITWRb603gWRGhNciezkb8XCA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-600 text-white text-base font-bold rounded-full shadow-2xl hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Book Now
          </a>
          <a
            href="tel:+918979857450"
            className="px-8 py-4 bg-purple-600 text-white text-base font-bold rounded-full shadow-2xl hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
              current === i ? "bg-purple-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
