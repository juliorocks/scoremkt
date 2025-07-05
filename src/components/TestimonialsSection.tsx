
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "CEO",
      company: "TechFlow Soluções",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "O MIND me mostrou exatamente onde estava perdendo dinheiro. Em 2 meses aumentamos nossa conversão em 45%."
    },
    {
      name: "Ana Paula Santos",
      role: "Diretora de Marketing",
      company: "Inovare Digital",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Finalmente entendi quais canais realmente funcionam. O relatório é super detalhado e prático."
    },
    {
      name: "Roberto Silva",
      role: "Fundador",
      company: "GrowthLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Mudou completamente minha visão sobre marketing. Agora invisto com base em dados, não em achismos."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-mind-text mb-6">
            Empresários que já transformaram seus resultados
          </h2>
          <div className="inline-flex items-center space-x-2 bg-mind-green/10 px-6 py-3 rounded-full">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-mind-green text-mind-green" />
              ))}
            </div>
            <span className="text-mind-green font-semibold">
              + de 1.200 empresas já descobriram seu Score MKT
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-mind-gray/50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-mind-text">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-mind-green text-mind-green" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
