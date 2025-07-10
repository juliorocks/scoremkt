import { Check } from "lucide-react";
const TargetAudienceSection = () => {
  const targetPoints = ["Está perdido sobre o que está funcionando", "Já investiu em tráfego sem retorno", "Quer escalar mas sente que está patinando", "Busca profissionalizar o marketing com dados", "Quer clareza antes de contratar uma agência"];
  return <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-mind-text mb-6">
              Esse diagnóstico é ideal para você que:
            </h2>
          </div>

          {/* Person reflecting image */}
          <div className="mb-16">
            
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {targetPoints.map((point, index) => <div key={index} className="flex items-start space-x-4 p-6 bg-mind-gray rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-mind-blue/20">
                <div className="w-8 h-8 bg-mind-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-mind-text leading-relaxed">
                  {point}
                </span>
              </div>)}
          </div>

          <div className="text-center mt-12">
            <div className="bg-mind-blue/5 border border-mind-blue/20 rounded-2xl p-8">
              <p className="text-xl text-mind-text font-semibold">
                Se você se identificou com pelo menos 2 desses pontos, 
                o diagnóstico MIND vai trazer clareza que você precisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TargetAudienceSection;