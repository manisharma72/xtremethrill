import React, { useState, useEffect, useRef } from "react";

// Adventure Data
const adventures = [
  {
    id: 1,
    title: "River Rafting in Rishikesh",
    desc: "Experience the thrill of rafting in the mighty Ganga with rapids and splashes all around.",
    duration: "3-4 Hours",
    bestTime: "Sept - June",
    difficulty: "Medium",
    safety: "Life Jackets & Guide",
    media: [
      { type: "image", src: "/images/rafting.jpg" },
      { type: "video", src: "/videos/rafting1.mp4" },
    ],
    longDesc:
      "River rafting in Rishikesh is an exhilarating adventure. You navigate through rapids of varying intensity under the guidance of professional instructors. The experience includes thrilling splashes, teamwork, and stunning views of the Ganga and surrounding mountains. Safety is ensured with life jackets and expert guidance, making it unforgettable fun for all ages.",
  },
  {
    id: 2,
    title: "Bungee Jumping",
    desc: "Take the leap of faith from India’s highest bungee point. Adrenaline rush guaranteed!",
    duration: "15 Min",
    bestTime: "All Year",
    difficulty: "High",
    safety: "Professional Gear",
    media: [
      { type: "image", src: "/images/bungee1.jpg" },
      { type: "video", src: "/videos/bungee1.mp4" },
    ],
    longDesc:
      "Bungee jumping gives you a heart-pounding adrenaline rush as you leap from India’s highest platform. Suspended in air, experience the thrill of free-fall before bouncing back safely, with professional gear and trained instructors ensuring a safe and unforgettable adventure.",
  },
  // ... all other adventures
{
    id: 3,
    title: "Paragliding",
    desc: "Soar high above the mountains and enjoy a bird’s-eye view of Rishikesh with trained pilots.",
    duration: "20–30 Min",
    bestTime: "Oct - June",
    difficulty: "Medium",
    safety: "Harness & Pilot",
    media: [
      { type: "image", src: "/images/paragliding.jpg" },
      { type: "video", src: "/videos/paragliding.mp4" },
    ],
    longDesc: "Paragliding allows you to glide gracefully over the scenic landscapes of Rishikesh. With trained pilots, experience breathtaking aerial views of mountains and rivers while enjoying the thrill of flying safely suspended in a harness.",
  },
  {
    id: 4,
    title: "Scad Jump",
    desc: "A free-fall experience with no harness, just pure adrenaline into a safe suspended net.",
    duration: "5 Min",
    bestTime: "All Year",
    difficulty: "High",
    safety: "Safety Net & Instructors",
    media: [
      { type: "image", src: "/images/scadjump2.jpg" },
      { type: "video", src: "/videos/scadjump.mp4" },
    ],
    longDesc: "The Scad Jump offers a unique free-fall adventure into a safely suspended net. Experience the thrill of weightlessness and adrenaline rush, guided by instructors ensuring your safety throughout the jump.",
  },
  {
    id: 5,
    title: "Giant Swing",
    desc: "Swing like a pendulum from dizzying heights for an unforgettable adrenaline rush.",
    duration: "10 Min",
    bestTime: "All Year",
    difficulty: "High",
    safety: "Double Harness & Instructors",
    media: [
      { type: "image", src: "/images/giant-swing2.jpg" },
      { type: "video", src: "/videos/giantswing.mp4" },
    ],
    longDesc: "The Giant Swing is a thrilling pendulum swing from a high platform. Experience the rush of speed and height as you swing back and forth safely secured by a double harness under expert supervision.",
  },
  {
    id: 6,
    title: "Zipline",
    desc: "Glide over rivers and forests on a thrilling zipline adventure across scenic landscapes.",
    duration: "15 Min",
    bestTime: "All Year",
    difficulty: "Easy",
    safety: "Harness & Helmet",
    media: [
      { type: "image", src: "/images/zipline1.jpg" },
      { type: "video", src: "/videos/zipline.mp4" },
    ],
    longDesc: "The Zipline adventure lets you glide across rivers and forests at high speed. Safely strapped in a harness, enjoy breathtaking scenery while feeling the thrill of flight.",
  },
  {
    id: 8,
    title: "Reverse Bungy",
    desc: "Get catapulted skywards in seconds and feel the thrill of zero gravity in reverse style.",
    duration: "5 Min",
    bestTime: "All Year",
    difficulty: "High",
    safety: "Secure Harness",
    media: [
      { type: "image", src: "/images/reversebungy.jpg" },
      { type: "video", src: "/videos/reversebungy.mp4" },
    ],
    longDesc: "Reverse Bungy launches you into the sky in seconds, giving a thrilling sensation of zero gravity. Experience extreme adrenaline safely with secure harnesses and expert operators.",
  },
  {
    id: 9,
    title: "Rocket Bungy",
    desc: "Experience an insane vertical launch like a rocket, blasting you into the sky in seconds.",
    duration: "5 Min",
    bestTime: "All Year",
    difficulty: "Extreme",
    safety: "Special Harness",
    media: [
      { type: "image", src: "/images/rocketbungy.jpg" },
      { type: "video", src: "/videos/rocketbungy.mp4" },
    ],
    longDesc: "Rocket Bungy propels you vertically at high speed for an extreme thrill. Feel the rush safely with specialized harnesses and trained instructors supervising every step.",
  },
  {
    id: 10,
    title: "Tower Top Swing",
    desc: "Swing off a tall tower and feel the adrenaline while dangling high above the ground.",
    duration: "10 Min",
    bestTime: "All Year",
    difficulty: "Medium",
    safety: "Harness & Rope",
    media: [
      { type: "image", src: "/images/towertop.jpg" },
      { type: "video", src: "/videos/tower.mp4" },
    ],
    longDesc: "The Tower Top Swing lets you swing from a high tower, experiencing breathtaking height and speed. Safely secured by harness and rope, enjoy the ultimate thrill of dangling above the ground.",
  },
  {
    id: 11,
    title: "Go-Kart",
    desc: "Race against your friends on thrilling tracks with sharp turns and high-speed action.",
    duration: "15–20 Min",
    bestTime: "All Year",
    difficulty: "Easy",
    safety: "Helmet & Safety Gear",
    media: [
      { type: "image", src: "/images/gokart.jpg" },
      { type: "video", src: "/videos/gokart.mp4" },
    ],
    longDesc: "Go-Karting provides fast-paced racing on tracks with sharp turns. Compete with friends safely with helmets and protective gear for an exciting racing experience.",
  },
  {
    id: 12,
    title: "Sky Cycling",
    desc: "Pedal your way on a suspended rope cycle high above the ground with breathtaking views.",
    duration: "10 Min",
    bestTime: "All Year",
    difficulty: "Medium",
    safety: "Safety Gear & Guides",
    media: [
      { type: "image", src: "/images/skycycling.jpg" },
      { type: "video", src: "/videos/skycycle.mp4" },
    ],
    longDesc: "Sky Cycling allows you to ride a suspended rope cycle high above the ground. Enjoy thrilling heights and stunning scenery while staying completely safe with guides and safety gear.",
  },
];  // ...

const Adventure = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [slideIndex, setSlideIndex] = useState({});
  const [openModal, setOpenModal] = useState(null);
  const videoRefs = useRef({});

  // Slideshow effect
  useEffect(() => {
    const intervals = {};

    adventures.slice(0, visibleCount).forEach((adv) => {
      if (slideIndex[adv.id] === undefined) {
        setSlideIndex((prev) => ({ ...prev, [adv.id]: 0 }));
      }

      const mediaLength = adv.media.length;
      const imageCount = adv.media.filter((m) => m.type === "image").length;

      intervals[adv.id] = setInterval(() => {
        setSlideIndex((prev) => {
          const current = prev[adv.id] ?? 0;

          // If current is an image
          if (adv.media[current].type === "image") {
            const nextIndex = current + 1 < mediaLength ? current + 1 : current;
            return { ...prev, [adv.id]: nextIndex };
          }

          // If current is video, do nothing (wait for onEnded)
          return prev;
        });
      }, 2000); // image switch every 2 seconds
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [visibleCount, slideIndex]);

  const toggleLoad = () => {
    if (visibleCount < adventures.length) setVisibleCount(visibleCount + 6);
    else setVisibleCount(6);
  };

  return (
    <section className="px-4 pt-12 pb-10 md:px-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Our Adventure Activities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {adventures.slice(0, visibleCount).map((adv) => {
          const currentIndex = slideIndex[adv.id] ?? 0;
          const currentMedia = adv.media[currentIndex];

          return (
            <div
              key={adv.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setOpenModal(adv.id)}
            >
              <div className="relative w-full h-60 overflow-hidden">
                {currentMedia.type === "image" ? (
                  <img
                    src={currentMedia.src}
                    alt={adv.title}
                    className="w-full h-full object-cover rounded-t-2xl transform hover:scale-105 transition duration-500"
                  />
                ) : (
                  <video
                    ref={(el) => (videoRefs.current[adv.id] = el)}
                    src={currentMedia.src}
                    controls
                    autoPlay
                    onEnded={() => {
                      // reset to first image after video ends
                      setSlideIndex((prev) => ({ ...prev, [adv.id]: 0 }));
                    }}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                )}

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                  {adv.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSlideIndex((prev) => ({ ...prev, [adv.id]: index }));
                        if (adv.media[index].type === "video") {
                          videoRefs.current[adv.id]?.play();
                        }
                      }}
                      className={`w-3 h-3 rounded-full ${
                        currentIndex === index ? "bg-purple-500" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{adv.desc}</p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                  <span>🕒 {adv.duration}</span>
                  <span>📅 {adv.bestTime}</span>
                  <span>💪 {adv.difficulty}</span>
                  <span>✅ {adv.safety}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={toggleLoad}
          className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
        >
          {visibleCount < adventures.length ? "Load More" : "Show Less"}
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-700 text-xl font-bold"
              onClick={() => setOpenModal(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">
              {adventures.find((a) => a.id === openModal).title}
            </h3>
            <p className="text-gray-700 mb-4">
              {adventures.find((a) => a.id === openModal).longDesc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Adventure;
