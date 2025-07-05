
import { Button } from "@/components/ui/button";
import { BarChart, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-mind-dark min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Descubra o{" "}
                <span className="text-mind-blue">SCORE</span>{" "}
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

            <Button 
              onClick={scrollToForm}
              className="bg-mind-blue hover:bg-mind-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
              size="lg"
            >
              <Zap className="mr-2 h-5 w-5" />
              Quero descobrir meu Score MKT agora
            </Button>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-mind-text">Score MKT</h3>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-mind-green">87</div>
                    <div className="text-sm text-gray-500">de 100</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-mind-text">Presença Digital</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded">
                        <div className="w-20 h-2 bg-mind-green rounded"></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-mind-text">Conversão</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded">
                        <div className="w-16 h-2 bg-mind-blue rounded"></div>
                      </div>
                      <span className="text-sm font-medium">67%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-mind-text">Automação</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded">
                        <div className="w-12 h-2 bg-orange-400 rounded"></div>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <BarChart className="h-5 w-5 text-mind-blue" />
                    <span className="text-sm text-gray-600">
                      Relatório completo disponível
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
