
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
              className="bg-mind-green hover:bg-mind-green/90 text-white px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
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
      </div>
    </section>
  );
};

export default FormSection;
