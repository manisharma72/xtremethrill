import React from "react";

const CallNowButton = () => {
  return (
    <a
      href="tel:+918979857450"
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg z-50 text-lg text-center transition-colors duration-300"
    >
      Call Now
    </a>
  );
};

export default CallNowButton;
