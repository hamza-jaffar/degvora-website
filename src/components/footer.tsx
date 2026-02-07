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
        </div>
      </div>
    </div>
  );
};

export default Footer;
