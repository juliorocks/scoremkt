const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    formSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img alt="MIND Logo" src="/lovable-uploads/6a4c817f-c364-4efb-9ae9-cf03557f3398.png" className="w-auto h-10 " />
            <div>
              
              
            </div>
          </div>

          {/* CTA Button */}
          <button onClick={scrollToForm} className="bg-mind-blue hover:bg-mind-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 bg-[00A19A] bg-[#00a19a]">
            Começar Diagnóstico
          </button>
        </div>
      </div>
    </header>;
};
export default Header;