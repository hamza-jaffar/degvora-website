const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Degvora
            </span>
          </div>
          {/* 
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div> */}

          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Degvora. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
