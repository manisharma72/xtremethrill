import React from "react";
import { Facebook, Instagram, YoutubeIcon, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Xtremethrill<span className="text-purple-500">Zone</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            Experience the thrill of a lifetime with our adventure activities in
            Rishikesh. From rafting to sky-high jumps, we bring you closer to
            adrenaline and nature.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/share/1CQrRzcHPw/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/xtremethrillzone?igsh=MWV2cTdkZWo0MG1uZQ==" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com/@xtremethrillzone?si=ZA1yzRNXtJvyMS5j" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all">
              <YoutubeIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-purple-400 transition-all">Home</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition-all">About</a></li>
            <li><a href="#adventure" className="hover:text-purple-400 transition-all">Adventure</a></li>
            <li><a href="#packages" className="hover:text-purple-400 transition-all">Packages</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin size={18} className="text-purple-400" />
              <span>Shivpuri, Rishikesh, Uttarakhand, India</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-purple-400" />
              <a href="tel:+918979857450" className="hover:text-purple-400 transition-all">
                +91 8979857450
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-purple-400" />
              <a href="mailto:xtremethrillzone@gmail.com" className="hover:text-purple-400 transition-all">
                xtremethrillzone@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Map Embed */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Find Us</h3>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27605.171054587787!2d78.36426133726579!3d30.13293067452279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390916ccb13b42ad%3A0x627f55cd218e5659!2sPalm%20Resort%20Shivpuri!5e0!3m2!1sen!2sin!4v1756970436711!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XtremethrillZone Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} XtremethrillZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
