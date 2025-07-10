import { Lightbulb, BarChart, Mail, Zap } from "lucide-react";
const HowItWorksSection = () => {
  const steps = [{
    icon: Lightbulb,
    number: "1",
    title: "Você responde 15 perguntas estratégicas",
    description: "Questões objetivas sobre marketing, vendas e presença digital"
  }, {
    icon: BarChart,
    number: "2",
    title: "A gente calcula seu Score MKT (de 0 a 100)",
    description: "Algoritmo proprietário analisa suas respostas em tempo real"
  }, {
    icon: Mail,
    number: "3",
    title: "Você recebe um relatório personalizado",
    description: "Diagnóstico completo direto no seu e-mail em minutos"
  }, {
    icon: Zap,
    number: "4",
    title: "E recebe orientação com os próximos passos",
    description: "Recomendações práticas baseadas no seu nível de maturidade"
  }];
  return <section className="bg-white py-12 sm:py-20 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mind-text mb-4 sm:mb-6">
            O que é o MIND?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            O MIND é um diagnóstico estratégico criado para empresários que querem entender, 
            de forma objetiva e baseada em dados, onde seu marketing e vendas estão funcionando 
            – e onde estão travando.
          </p>
        </div>

        {/* Team analyzing data image */}
        <div className="mb-12 sm:mb-16 px-4">
          <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=400&fit=crop" alt="Equipe analisando dados de marketing" className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-lg" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {steps.map((step, index) => <div key={index} className="text-center space-y-4 sm:space-y-6 p-4 sm:p-6 rounded-2xl hover:bg-mind-gray/50 transition-all duration-300 border border-gray-200" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-mind-blue rounded-full flex items-center justify-center mx-auto mb-4 bg-slate-50">
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" style={{
                color: '#00A19A'
              }} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-mind-text leading-tight">
                {step.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;