// Contact.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Get in <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Have questions or want to book your next adventure?  
            Contact us today and our team will help you plan the thrill of a lifetime.
          </p>
          <div className="space-y-4">
            <p className="flex items-center space-x-3">
              <Phone className="text-purple-400" /> 
              <span>+91 8979857450</span>
            </p>
            <p className="flex items-center space-x-3">
              <Mail className="text-purple-400" /> 
              <span>xtremethrillzone@gmail.com</span>
            </p>
            <p className="flex items-center space-x-3">
              <MapPin className="text-purple-400" /> 
              <span>Shivpuri, Rishikesh, Uttarakhand</span>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            ></textarea>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
