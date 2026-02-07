import { Facebook, Instagram, Youtube } from "lucide-react";
import AppLogo from "./app-logo";

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-400 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <AppLogo showText={true} />
          <div className="flex items-center gap-2">
            <span className="text-sm">
              © 2026 Degvora. All rights reserved.
            </span>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61572858336690"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-[#57007B]" />
            </a>
            <a
              href="https://www.instagram.com/degvora_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-[#57007B]" />
            </a>
            <a
              href="https://www.youtube.com/@Degvora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-[#57007B]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
