
const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-mind-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <div className="text-xl font-bold text-mind-text">MIND</div>
              <div className="text-xs text-gray-500">mktscore.com.br</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="bg-mind-blue hover:bg-mind-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
          >
            Começar Diagnóstico
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
