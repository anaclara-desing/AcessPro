import { useState } from 'react';
import { Send, Bot, User, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestedTopics = [
  'Como adequar meu site às normas WCAG?',
  'Quais adaptações físicas são obrigatórias?',
  'Como treinar minha equipe em Libras?',
  'Qual o custo médio de implementação?',
  'Como cumprir a lei de cotas (Lei 8.213)?',
];

const mockResponses: Record<string, string> = {
  default: 'Entendo sua questão sobre acessibilidade. Para adequar seu negócio, recomendo começar por uma auditoria completa. Nosso diagnóstico pode identificar as principais lacunas e priorizar ações com melhor custo-benefício. Posso ajudar com aspectos específicos: acessibilidade digital, física, comunicacional ou de RH?',
  wcag: 'Para adequar seu site às normas WCAG 2.1 nível AA, recomendo: 1) Garantir navegação completa por teclado; 2) Adicionar textos alternativos em imagens; 3) Usar contraste mínimo de 4.5:1 para textos; 4) Tornar formulários compatíveis com leitores de tela; 5) Adicionar legendas em vídeos. Ferramentas como WAVE e aXe podem ajudar na auditoria automática.',
  fisica: 'Adaptações físicas obrigatórias segundo NBR 9050: 1) Rampas com inclinação máxima 8.33%; 2) Banheiros acessíveis com barras de apoio; 3) Sinalização tátil no piso; 4) Vagas reservadas (2% do total); 5) Portas com 80cm de largura mínima; 6) Elevadores acessíveis em prédios com mais de um pavimento. O custo varia, mas é possível implementar por etapas priorizando rotas acessíveis.',
  libras: 'Para treinar sua equipe em Libras: 1) Contrate cursos certificados (presenciais ou online); 2) Comece com vocabulário básico de atendimento; 3) Considere ter pelo menos um intérprete certificado; 4) Use apps como Hand Talk ou VLibras como apoio; 5) Promova cultura inclusiva com workshops. O tempo médio para proficiência básica é de 6-12 meses com prática regular.',
  custo: 'O custo de implementação varia conforme o porte e necessidades. Média estimada: 1) Pequena empresa: R$ 15-50 mil (adaptações básicas, site, treinamento inicial); 2) Média empresa: R$ 80-200 mil (auditoria completa, reformas, sistemas); 3) Grande empresa: R$ 300 mil+ (transformação estrutural, tecnologia, RH). Mas há benefícios fiscais, incentivos e ROI positivo a médio prazo via ampliação de mercado e conformidade legal.',
  cotas: 'A Lei 8.213/91 (Lei de Cotas) exige: 1) 100+ funcionários: 2% PcD; 2) 201-500: 3%; 3) 501-1000: 4%; 4) 1001+: 5%. Para cumprir: 1) Faça recrutamento ativo em plataformas especializadas; 2) Adapte ambiente de trabalho; 3) Ofereça suporte e acessibilidade; 4) Treine gestores em inclusão; 5) Documente tudo para fiscalização. Parcerias com ONGs e consultorias especializadas facilitam o processo.',
};

export function Consultoria() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou seu consultor virtual de acessibilidade. Como posso ajudar sua empresa hoje? Posso orientar sobre legislação, implementação, custos, treinamentos e boas práticas.',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      let response = mockResponses.default;
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('wcag') || lowerInput.includes('site') || lowerInput.includes('digital')) {
        response = mockResponses.wcag;
      } else if (lowerInput.includes('física') || lowerInput.includes('rampa') || lowerInput.includes('banheiro')) {
        response = mockResponses.fisica;
      } else if (lowerInput.includes('libras') || lowerInput.includes('treina')) {
        response = mockResponses.libras;
      } else if (lowerInput.includes('custo') || lowerInput.includes('preço') || lowerInput.includes('investimento')) {
        response = mockResponses.custo;
      } else if (lowerInput.includes('cota') || lowerInput.includes('8.213')) {
        response = mockResponses.cotas;
      }

      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Consultoria Virtual</h1>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas e receba orientações personalizadas sobre acessibilidade empresarial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="h-[500px] overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Digite sua pergunta sobre acessibilidade..."
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold">Tópicos Sugeridos</h3>
              </div>
              <div className="space-y-2">
                {suggestedTopics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(topic)}
                    className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors text-sm border border-border"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-3">Próximos Passos</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Faça o diagnóstico completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Priorize ações de maior impacto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Implemente gradualmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Monitore métricas no dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
