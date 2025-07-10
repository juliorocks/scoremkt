import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
const FormSection = () => {
  const handleStartDiagnosis = () => {
    window.open('https://mktscore.com.br/mind', '_blank');
  };
  return <section id="form-section" className="bg-mind-blue py-12 sm:py-20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Comece agora e descubra o seu Score MKT
              </h2>
              
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                O diagnóstico é gratuito, rápido e pode mudar o rumo do seu marketing.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">15</div>
                    <div className="text-sm sm:text-base text-blue-100">perguntas estratégicas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">5min</div>
                    <div className="text-sm sm:text-base text-blue-100">para completar</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                    <div className="text-sm sm:text-base text-blue-100">gratuito</div>
                  </div>
                </div>

                <Button onClick={handleStartDiagnosis} className="bg-mind-green hover:bg-mind-green/90 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 animate-pulse-glow w-full" size="lg">
                  <Zap className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                  Quero meu Score agora
                </Button>
              </div>

              <p className="text-blue-100 text-xs sm:text-sm">
                Não coletamos dados desnecessários. Apenas o essencial para gerar seu diagnóstico personalizado.
              </p>
            </div>

            {/* Right Content - Result Preview Image */}
            <div className="p-6 sm:p-8 rounded-2xl object-scale-down">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-mind-text mb-2">
                  Seu resultado será assim:
                </h3>
                <p className="text-sm sm:text-base text-gray-600">Score MKT personalizado</p>
              </div>
              
              <img alt="Dashboard mostrando resultados de análise de marketing e métricas de performance" className="w-full h-auto rounded-xl shadow-lg" src="https://mktscore.com.br/wp-content/uploads/2025/07/Ja-calculou-o-seu-Score-MKT-Resultado-1.png" />
              
              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-gray-600 text-xs sm:text-sm">
                  Exemplo de pontuação que você receberá
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FormSection;