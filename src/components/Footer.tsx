const Footer = () => {
  return <footer className="bg-mind-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3">
            
            <div>
              <div className="text-2xl font-bold text-white">Score MKT | MIND</div>
              <div className="text-sm text-gray-400">Mapeamento Inteligente de Negócios e Diagnóstico</div>
            </div>
          </div>

          {/* Domain */}
          <div className="text-mind-blue font-semibold text-lg">scoremkt.com.br</div>

          {/* Divider */}
          <div className="border-t border-gray-600 pt-6">
            <div className="text-gray-400 text-sm">
              <p>© 2025 Score MKT | MIND - Todos os direitos reservados</p>
              <p className="mt-2">
                Transforme dados em decisões inteligentes de marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;