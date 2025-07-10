import { BarChart, Compass, Lightbulb, Handshake, Zap } from "lucide-react";

const BusinessBenefitsSection = () => {
  const benefits = [{
    icon: BarChart,
    title: "Clareza sobre sua real situação",
    description: "Dados objetivos ao invés de achismos sobre performance"
  }, {
    icon: Compass,
    title: "Evite erros e desperdícios",
    description: "Identifique gargalos antes de investir mais dinheiro"
  }, {
    icon: Lightbulb,
    title: "Encontre oportunidades escondidas",
    description: "Descubra potenciais de crescimento não explorados"
  }, {
    icon: Handshake,
    title: "Veja se está pronto para escalar",
    description: "Entenda se sua estrutura suporta crescimento acelerado"
  }, {
    icon: Zap,
    title: "Ações práticas, não achismos",
    description: "Recomendações baseadas em dados e benchmarks do mercado"
  }];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-mind-text mb-6">
            Decisões melhores, com base em dados.
          </h2>
        </div>

        {/* Professional presenting results image */}
        <div className="mb-16">
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-mind-blue/20 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-mind-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-mind-blue group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="h-8 w-8 text-mind-blue group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-mind-text mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsSection;
