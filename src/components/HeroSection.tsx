
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
const HeroSection = () => {
  const scrollToForm = () => {
    window.open('https://mktscore.com.br/mind', '_blank');
  };
  return <section className="bg-mind-dark min-h-screen flex items-center py-12 sm:py-20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Descubra o{" "}
                <span className="text-[#00a19a]">SCORE</span>{" "}
                de Marketing da sua empresa
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
                com o método{" "}
                <span className="text-[#00a19a]">MIND</span>{" "}
                – Mapeamento Inteligente de Negócios e Diagnóstico
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Em menos de 5 minutos, você vai saber o nível de maturidade do seu marketing 
                e quais pontos estão bloqueando seu crescimento.
              </p>
            </div>

            <Button onClick={scrollToForm} className="bg-mind-blue hover:bg-mind-blue/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow w-full sm:w-auto" size="lg">
              <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Quero descobrir meu Score MKT agora
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            <img alt="Dashboard de análise de marketing e métricas de performance" src="https://mktscore.com.br/wp-content/uploads/2025/07/Ja-calculou-o-seu-Score-MKT-4.webp" className="w-full h-auto rounded-2xl shadow-2xl object-contain" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
