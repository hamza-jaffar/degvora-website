const AppLogo = ({ showText = false }: { showText: boolean }) => {
  return (
    <div className="flex items-center gap-1">
      <img className="w-10 h-10" src="/assets/logo.svg" />
      {showText && <span className="text-lg font-semibold">Degvora</span>}
    </div>
  );
};

export default AppLogo;
