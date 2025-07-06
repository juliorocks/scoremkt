
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const FormSection = () => {
  const handleStartDiagnosis = () => {
    // In a real implementation, this would open a form modal or redirect to Typeform/Tally
    console.log("Starting MIND diagnosis...");
    // Example: window.open('https://your-typeform-url', '_blank');
    
    // For now, we'll show an alert
    alert("Formulário de diagnóstico seria aberto aqui (integração com Typeform/Tally)");
  };

  return (
    <section id="form-section" className="bg-mind-blue py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Comece agora e descubra o seu Score MKT
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                O diagnóstico é gratuito, rápido e pode mudar o rumo do seu marketing.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">15</div>
                    <div className="text-blue-100">perguntas estratégicas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">5min</div>
                    <div className="text-blue-100">para completar</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-blue-100">gratuito</div>
                  </div>
                </div>

                <Button 
                  onClick={handleStartDiagnosis}
                  className="bg-mind-green hover:bg-mind-green/90 text-white px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 animate-pulse-glow w-full lg:w-auto"
                  size="lg"
                >
                  <Zap className="mr-3 h-6 w-6" />
                  Quero meu Score agora
                </Button>
              </div>

              <p className="text-blue-100 text-sm">
                Não coletamos dados desnecessários. Apenas o essencial para gerar seu diagnóstico personalizado.
              </p>
            </div>

            {/* Right Content - Result Preview Image */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-mind-text mb-2">
                  Seu resultado será assim:
                </h3>
                <p className="text-gray-600">Score MKT personalizado</p>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                alt="Dashboard mostrando resultados de análise de marketing e métricas de performance"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Exemplo de pontuação que você receberá
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
