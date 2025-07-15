
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O diagnóstico MIND é realmente gratuito?",
      answer: "Sim, completamente gratuito. Não há custos ocultos ou taxas. Você recebe seu MKT Score e relatório personalizado sem pagar nada. Nossa missão é ajudar empresários a tomar decisões mais inteligentes baseadas em dados."
    },
    {
      question: "Leva quanto tempo para preencher?",
      answer: "O diagnóstico leva entre 3 a 5 minutos para ser completado. São 15 perguntas estratégicas e objetivas sobre seu marketing e vendas. Cada pergunta foi desenvolvida para capturar informações essenciais sobre sua maturidade digital."
    },
    {
      question: "Vou ter que falar com alguém depois?",
      answer: "Não há obrigatoriedade. Você recebe seu relatório completo por e-mail automaticamente. Se quiser, poderá solicitar uma consultoria para aprofundar os resultados, mas isso é totalmente opcional e por sua escolha."
    },
    {
      question: "Como vocês calculam o MKT Score?",
      answer: "Utilizamos um algoritmo proprietário que avalia múltiplas dimensões do seu marketing: presença digital, estratégia de conteúdo, automação, conversão, métricas e muito mais. O score é comparado com benchmarks do seu setor."
    },
    {
      question: "O que acontece com meus dados?",
      answer: "Seus dados são protegidos e utilizados apenas para gerar seu diagnóstico personalizado. Não compartilhamos informações com terceiros e você pode solicitar a exclusão dos seus dados a qualquer momento."
    }
  ];

  return (
    <section className="bg-mind-gray py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-mind-text mb-6">
              Dúvidas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 px-8"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-mind-text hover:text-mind-blue py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
