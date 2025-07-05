
import { Lightbulb, BarChart, Mail, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      number: "1",
      title: "Você responde 15 perguntas estratégicas",
      description: "Questões objetivas sobre marketing, vendas e presença digital"
    },
    {
      icon: BarChart,
      number: "2", 
      title: "A gente calcula seu Score MKT (de 0 a 100)",
      description: "Algoritmo proprietário analisa suas respostas em tempo real"
    },
    {
      icon: Mail,
      number: "3",
      title: "Você recebe um relatório personalizado",
      description: "Diagnóstico completo direto no seu e-mail em minutos"
    },
    {
      icon: Zap,
      number: "4",
      title: "E recebe orientação com os próximos passos",
      description: "Recomendações práticas baseadas no seu nível de maturidade"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-mind-text mb-6">
            O que é o MIND?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O MIND é um diagnóstico estratégico criado para empresários que querem entender, 
            de forma objetiva e baseada em dados, onde seu marketing e vendas estão funcionando 
            – e onde estão travando.
          </p>
        </div>

        {/* Team analyzing data image */}
        <div className="mb-16">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=400&fit=crop"
            alt="Equipe analisando dados de marketing"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center space-y-6 p-6 rounded-2xl hover:bg-mind-gray/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-mind-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-mind-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-mind-text">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
