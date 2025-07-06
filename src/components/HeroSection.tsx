import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    formSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="bg-mind-dark min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Descubra o{" "}
                <span className="text-mind-blue text-[00A19A] text-[#00a19a]">SCORE</span>{" "}
                de Marketing da sua empresa
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300">
                com o método{" "}
                <span className="text-mind-green">MIND</span>{" "}
                – Mapeamento Inteligente de Negócios e Diagnóstico
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Em menos de 5 minutos, você vai saber o nível de maturidade do seu marketing 
                e quais pontos estão bloqueando seu crescimento.
              </p>
            </div>

            <Button onClick={scrollToForm} className="bg-mind-blue hover:bg-mind-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow" size="lg">
              <Zap className="mr-2 h-5 w-5" />
              Quero descobrir meu Score MKT agora
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center" alt="Dashboard de análise de marketing e métricas de performance" className="w-full h-auto rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;