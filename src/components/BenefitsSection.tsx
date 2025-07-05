
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Seu Score de Marketing",
    "Análise de maturidade digital", 
    "Comparativo com empresas do seu setor",
    "3 recomendações imediatas",
    "Indicação personalizada de próximo passo"
  ];

  return (
    <section className="bg-mind-gray py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-mind-text">
              Você recebe muito mais que um número.
            </h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 bg-mind-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-mind-text">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Report Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center border-b pb-6">
                  <h3 className="text-2xl font-bold text-mind-text mb-2">
                    Relatório MIND
                  </h3>
                  <p className="text-gray-600">Diagnóstico Personalizado</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-mind-gray p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-mind-text">Score Geral</span>
                      <span className="text-2xl font-bold text-mind-green">78/100</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded">
                      <div className="w-4/5 h-2 bg-mind-green rounded"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-bold text-mind-text">Principais Oportunidades:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-mind-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>Otimizar funil de conversão (+23% potencial)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-mind-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>Implementar automação de e-mail marketing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-mind-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>Melhorar segmentação de audiência</span>
                      </li>
                    </ul>
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

export default BenefitsSection;
