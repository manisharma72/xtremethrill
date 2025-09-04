import React from "react";

const packagesData = [
  {
    title: "River Rafting",
    image: "/images/rafting1.jpg",
    description:
      "Conquer the rapids of the Ganga with thrilling rafting routes ranging from 12 km to 32 km — perfect for both beginners and adrenaline junkies!",
    prices: [
      { option: "12 km", price: "₹520 / person" },
      { option: "14 km", price: "₹620 / person" },
      { option: "16 km", price: "₹720 / person" },
      { option: "28 km", price: "₹1100 / person" },
      { option: "32 km", price: "₹2000 / person" },
    ],
  },
  {
    title: "Bungee Jumping",
    image: "/images/bungee2.jpg",
    description:
      "Leap off towering heights and feel the rush of freefall! From splash bungy to couple bungy, challenge your limits with breathtaking jumps.",
    prices: [
      { option: "Splash Bungy (109 m)", price: "₹3999 / person" },
      { option: "Air Bag Bungy (85 m)", price: "₹2999 / person" },
      { option: "Couple Bungy (109 m)", price: "₹7999 / couple" },
      { option: "117 m", price: "₹4600 / person" },
    ],
  },
  {
    title: "Paragliding",
    image: "/images/paragliding3.jpg",
    description:
      "Soar high like a bird above the valleys and rivers of Rishikesh — a sky adventure that will leave you speechless!",
    prices: [{ option: "Per Person", price: "₹3500" }],
  },
  {
    title: "Rocket Bungy",
    image: "/images/rocketbungy.jpg",
    description:
      "Experience the ultimate reverse freefall! Get launched skyward at 85 meters for a rocket-speed adrenaline surge.",
    prices: [{ option: "85 m", price: "₹1999 / person" }],
  },
  {
    title: "Reverse Bungy",
    image: "/images/reversebungy1.jpg",
    description:
      "Strap in and blast into the sky at extreme speeds — reverse bungy will flip your world upside down in seconds!",
    prices: [{ option: "Per Person", price: "₹2000" }],
  },
  {
    title: "Giant Swing",
    image: "/images/giantswing1.jpg",
    description:
      "Swing like never before! Jump off and sway across the valleys on India’s highest giant swing, solo or with friends.",
    prices: [
      { option: "Single", price: "₹1500 / person" },
      { option: "Double", price: "₹2500 / 2 persons" },
      { option: "Triple", price: "₹3000 / 3 persons" },
    ],
  },
  {
    title: "Zipline",
    image: "/images/zipline1.jpg",
    description:
      "Glide across the river with breathtaking views — the fastest and most scenic zipline in the region!",
    prices: [
      { option: "Adult", price: "₹2000" },
      { option: "Student", price: "₹1800" },
    ],
  },
  {
    title: "Scad Jump",
    image: "/images/scadjump1.jpg",
    description:
      "Freefall into a safety net from towering heights — the only SCAD jump of its kind for thrill seekers!",
    prices: [{ option: "Per Person", price: "₹4500" }],
  },
  {
    title: "Go-Kart",
    image: "/images/gokart.jpg",
    description:
      "Feel the thrill of racing with friends! Take on sharp turns and speedy laps — fun for both kids and adults.",
    prices: [
      { option: "Kids (3 rounds)", price: "₹600" },
      { option: "Adult (3 rounds)", price: "₹800" },
    ],
  },

];

const Packages = () => {
  return (
    <section
      id="packages"
      className="py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          Adventure <span className="text-purple-500">Packages</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {pkg.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
              <ul className="text-gray-300 text-left space-y-2 flex-1">
                {pkg.prices.map((p, i) => (
                  <li
                    key={i}
                    className="flex justify-between bg-white/5 px-3 py-2 rounded-lg"
                  >
                    <span>{p.option}</span>
                    <span className="font-semibold text-white">{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
