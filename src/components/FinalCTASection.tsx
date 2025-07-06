import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
const FinalCTASection = () => {
  const handleStartDiagnosis = () => {
    // Scroll to form section
    const formSection = document.getElementById('form-section');
    formSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="bg-mind-dark py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para descobrir onde sua empresa está 
            <span className="text-mind-blue text-[00A19A] text-[#00a19a]"> perdendo dinheiro </span>
            em marketing?
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Não deixe mais um dia passar sem saber onde investir seu orçamento de marketing. 
            Comece agora e tenha clareza em 5 minutos.
          </p>

          <div className="space-y-6">
            <Button onClick={handleStartDiagnosis} size="lg" className="bg-mind-blue hover:bg-mind-blue/90 text-white px-12 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 animate-pulse-glow bg-[00A19A] bg-[#00a19a]">
              <Zap className="mr-3 h-6 w-6" />
              Começar agora o diagnóstico MIND
            </Button>

            <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-mind-green rounded-full"></div>
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-mind-green rounded-full"></div>
                <span>5 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-mind-green rounded-full"></div>
                <span>Resultado imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;