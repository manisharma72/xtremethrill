import React from "react";

// Images - same as before
const images = [
  "/images/rafting.jpg",
  "/images/giant-swing2.jpg",
  "/images/paragliding.jpg",
  "/images/bungee2.jpg",
];

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-poppins">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Welcome to <span className="text-purple-500">XtremeThrillZone</span>
        </h2>
        <p className="mt-4 text-gray-700 text-lg sm:text-xl">
          Adventure is not just an activity — it’s an unforgettable experience. 🌍✨
        </p>
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
        {/* Left - Text */}
        <div className="space-y-4 text-gray-800">
          <p>
            At XtremeThrillZone, we believe that adventure is not just an activity — it’s an unforgettable experience. 
            Based in the heart of Rishikesh, we bring you the best of thrill and nature with activities like River Rafting, 
            Bungee Jumping, Giant Swing, Paragliding, and Zipline.
          </p>
          <p>
            Our mission is to create memories filled with excitement, safety, and fun. With certified guides, 
            world-class equipment, and years of expertise, we ensure every adventure is not only thrilling but also completely safe.
          </p>
          <p>
            Whether you are a solo traveler, a group of friends, or a family looking for a getaway, 
            XtremeThrillZone promises to give you moments you will cherish forever.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+918979857450"
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 text-center"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918979857450"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transform hover:scale-105 transition-all duration-300 text-center"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Right - Image collage */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
              <img
                src={img}
                alt={`Adventure ${idx + 1}`}
                className="w-full h-48 sm:h-52 md:h-48 lg:h-52 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Us</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-2 text-purple-500">🛡️</div>
            <h4 className="font-semibold mb-1">Safety First</h4>
            <p className="text-gray-600 text-sm">Certified guides & world-class equipment.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-2 text-purple-500">💰</div>
            <h4 className="font-semibold mb-1">Affordable Packages</h4>
            <p className="text-gray-600 text-sm">Adventure without burning a hole in your pocket.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-2 text-purple-500">🌲</div>
            <h4 className="font-semibold mb-1">Nature & Comfort</h4>
            <p className="text-gray-600 text-sm">Adventure + nature experience with comfort.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-2 text-purple-500">⏱️</div>
            <h4 className="font-semibold mb-1">24/7 Support</h4>
            <p className="text-gray-600 text-sm">We are always available for queries and assistance.</p>
          </div>
        </div>
      </div>

      {/* Optional Team / Guides */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Meet Our Certified Guides</h3>
        <p className="text-gray-700">
          Our certified adventure guides ensure your experience is safe, thrilling, and fun. 🌟
        </p>
      </div>
    </section>
  );
};

export default About;
