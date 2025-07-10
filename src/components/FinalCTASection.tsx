import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
const FinalCTASection = () => {
  const handleStartDiagnosis = () => {
    window.open('https://mktscore.com.br/mind', '_blank');
  };
  return <section className="bg-mind-dark py-12 sm:py-20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para descobrir onde sua empresa está 
            <span className="text-[#00a19a]"> perdendo dinheiro </span>
            em marketing?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed px-4">Não deixe mais um dia passar sem saber onde investir seu orçamento de marketing. 
Comece agora e tenha clareza em 5 minutos.</p>

          <div className="space-y-4 sm:space-y-6">
            <Button onClick={handleStartDiagnosis} size="lg" className="bg-mind-blue hover:bg-mind-blue/90 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 animate-pulse-glow w-full sm:w-auto">
              <Zap className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Começar agora o diagnóstico MIND
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 text-xs sm:text-sm">
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