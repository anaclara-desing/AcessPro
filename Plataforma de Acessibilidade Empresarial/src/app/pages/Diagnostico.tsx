import { useState } from 'react';
import { CheckCircle, Circle, AlertCircle, Download, FileText } from 'lucide-react';

const questions = [
  {
    category: 'Acessibilidade Física',
    items: [
      'Há rampas de acesso em todos os níveis do estabelecimento?',
      'Os banheiros possuem adaptações para pessoas com deficiência?',
      'Existe sinalização tátil e visual adequada?',
      'As portas têm largura mínima de 80cm?',
      'Há vagas de estacionamento reservadas e sinalizadas?',
    ],
  },
  {
    category: 'Acessibilidade Digital',
    items: [
      'O site possui navegação por teclado?',
      'Há textos alternativos em todas as imagens?',
      'O contraste de cores atende aos padrões WCAG?',
      'O site é compatível com leitores de tela?',
      'Existem legendas em vídeos e conteúdos multimídia?',
    ],
  },
  {
    category: 'Atendimento e Comunicação',
    items: [
      'Funcionários são treinados para atendimento acessível?',
      'Há intérpretes de Libras disponíveis ou sob demanda?',
      'Documentos estão disponíveis em formatos acessíveis?',
      'Existe canal de atendimento acessível (chat, vídeo, telefone adaptado)?',
      'A empresa possui política de inclusão documentada?',
    ],
  },
  {
    category: 'Recursos Humanos',
    items: [
      'Há programa de contratação de pessoas com deficiência?',
      'Cumpre-se a cota legal (Lei 8.213/91)?',
      'Existem programas de capacitação inclusiva?',
      'O ambiente de trabalho é adaptado às necessidades diversas?',
      'Há benefícios específicos para colaboradores PcD?',
    ],
  },
];

export function Diagnostico() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (category: string, index: number, value: boolean) => {
    setAnswers({ ...answers, [`${category}-${index}`]: value });
  };

  const calculateScore = () => {
    const totalQuestions = questions.reduce((acc, cat) => acc + cat.items.length, 0);
    const positiveAnswers = Object.values(answers).filter(Boolean).length;
    return Math.round((positiveAnswers / totalQuestions) * 100);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return { text: 'Excelente! Sua empresa está no caminho certo.', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' };
    if (score >= 60) return { text: 'Bom! Há oportunidades de melhoria.', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' };
    if (score >= 40) return { text: 'Atenção! É necessário investir em acessibilidade.', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
    return { text: 'Crítico! Requer ação imediata para conformidade.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const score = calculateScore();
  const scoreMessage = getScoreMessage(score);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Diagnóstico de Acessibilidade</h1>
          <p className="text-lg text-muted-foreground">
            Avalie o nível de acessibilidade da sua empresa respondendo às perguntas abaixo
          </p>
        </div>

        {!showResults ? (
          <div className="space-y-8">
            {questions.map((category, catIndex) => (
              <div key={catIndex} className="bg-card p-6 rounded-xl border border-border">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">
                    {catIndex + 1}
                  </div>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((question, qIndex) => (
                    <div key={qIndex} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <span className="text-muted-foreground mt-1">{qIndex + 1}.</span>
                      <div className="flex-1">
                        <p className="mb-3">{question}</p>
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleAnswer(category.category, qIndex, true)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                              answers[`${category.category}-${qIndex}`] === true
                                ? 'bg-green-50 border-green-500 text-green-700'
                                : 'border-border hover:bg-accent'
                            }`}
                          >
                            {answers[`${category.category}-${qIndex}`] === true ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <Circle className="w-4 h-4" />
                            )}
                            Sim
                          </button>
                          <button
                            onClick={() => handleAnswer(category.category, qIndex, false)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                              answers[`${category.category}-${qIndex}`] === false
                                ? 'bg-red-50 border-red-500 text-red-700'
                                : 'border-border hover:bg-accent'
                            }`}
                          >
                            {answers[`${category.category}-${qIndex}`] === false ? (
                              <AlertCircle className="w-4 h-4" />
                            ) : (
                              <Circle className="w-4 h-4" />
                            )}
                            Não
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-center pt-4">
              <button
                onClick={handleSubmit}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Ver Resultado do Diagnóstico
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className={`${scoreMessage.bg} ${scoreMessage.border} border-2 rounded-xl p-8 text-center`}>
              <div className="mb-4">
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                  {score}%
                </div>
                <p className="text-xl text-muted-foreground">Índice de Acessibilidade</p>
              </div>
              <p className={`text-lg font-semibold ${scoreMessage.color}`}>
                {scoreMessage.text}
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h2 className="text-xl font-semibold mb-4">Recomendações Prioritárias</h2>
              <ul className="space-y-3">
                {score < 80 && (
                  <>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Realizar auditoria completa de acessibilidade</p>
                        <p className="text-sm text-muted-foreground">
                          Contratar especialistas para avaliação técnica detalhada
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Treinar equipe em atendimento acessível</p>
                        <p className="text-sm text-muted-foreground">
                          Capacitar funcionários para melhor atender pessoas com deficiência
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Adequar site e sistemas digitais</p>
                        <p className="text-sm text-muted-foreground">
                          Implementar padrões WCAG 2.1 nível AA em todas as plataformas
                        </p>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowResults(false)}
                className="flex-1 bg-muted text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/80 transition-colors"
              >
                Refazer Diagnóstico
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                <Download className="w-5 h-5" />
                Baixar Relatório PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
