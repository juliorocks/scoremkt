
const Header = () => {
  const scrollToForm = () => {
    window.open('https://scoremkt.jhow.com.br/mind/', '_blank');
  };

  return (
    <header className="bg-white shadow-sm py-3 sm:py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              alt="MIND Logo" 
              src="/lovable-uploads/6a4c817f-c364-4efb-9ae9-cf03557f3398.png" 
              className="w-auto h-8 sm:h-10" 
            />
          </div>

          {/* CTA Button */}
          <button 
            onClick={scrollToForm} 
            className="bg-[#00a19a] hover:bg-[#00a19a]/90 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base"
          >
            Começar Diagnóstico
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
