import { Clock, Users, Award, BookOpen, Video, FileText } from 'lucide-react';

const courses = [
  {
    title: 'Atendimento Acessível e Inclusivo',
    duration: '8 horas',
    format: 'Online ao vivo',
    students: '2.4k',
    level: 'Básico',
    description: 'Aprenda técnicas de atendimento respeitoso e eficaz para pessoas com diferentes tipos de deficiência.',
    topics: ['Comunicação acessível', 'Tipos de deficiência', 'Etiqueta e boas práticas', 'Casos práticos'],
    icon: Users,
    color: 'blue',
  },
  {
    title: 'Libras - Nível Básico',
    duration: '40 horas',
    format: 'Online gravado + prática',
    students: '1.8k',
    level: 'Básico',
    description: 'Curso introdutório de Língua Brasileira de Sinais para comunicação no ambiente corporativo.',
    topics: ['Alfabeto manual', 'Vocabulário empresarial', 'Frases do cotidiano', 'Prática conversacional'],
    icon: Video,
    color: 'purple',
  },
  {
    title: 'Acessibilidade Digital - WCAG',
    duration: '16 horas',
    format: 'Online ao vivo',
    students: '3.1k',
    level: 'Intermediário',
    description: 'Desenvolvimento web acessível segundo as diretrizes WCAG 2.1 para sites e aplicações.',
    topics: ['Padrões WCAG', 'HTML semântico', 'ARIA labels', 'Testes de acessibilidade'],
    icon: BookOpen,
    color: 'green',
  },
  {
    title: 'Gestão da Diversidade e Inclusão',
    duration: '12 horas',
    format: 'Presencial',
    students: '1.2k',
    level: 'Avançado',
    description: 'Estratégias para líderes implementarem cultura inclusiva e gerenciarem equipes diversas.',
    topics: ['Liderança inclusiva', 'Recrutamento PcD', 'Compliance legal', 'Indicadores de inclusão'],
    icon: Award,
    color: 'orange',
  },
  {
    title: 'Tecnologias Assistivas',
    duration: '6 horas',
    format: 'Online gravado',
    students: '980',
    level: 'Básico',
    description: 'Conheça ferramentas e tecnologias que auxiliam pessoas com deficiência no trabalho.',
    topics: ['Leitores de tela', 'Software de ampliação', 'Recursos de voz', 'Dispositivos adaptativos'],
    icon: FileText,
    color: 'pink',
  },
  {
    title: 'Legislação e Compliance',
    duration: '4 horas',
    format: 'Online gravado',
    students: '2.7k',
    level: 'Básico',
    description: 'Entenda as leis brasileiras sobre acessibilidade e como garantir conformidade legal.',
    topics: ['LBI', 'Lei de Cotas', 'NBR 9050', 'Penalidades e fiscalização'],
    icon: BookOpen,
    color: 'red',
  },
];

const colorClasses = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
  green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
  red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
};

export function Treinamentos() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Treinamentos Corporativos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capacite sua equipe com cursos especializados em acessibilidade, inclusão e diversidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">6</div>
            <p className="text-muted-foreground">Cursos Disponíveis</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">12k+</div>
            <p className="text-muted-foreground">Alunos Treinados</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
            <p className="text-muted-foreground">Avaliação Média</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const colors = colorClasses[course.color as keyof typeof colorClasses];

            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}>
                    {course.level}
                  </span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {course.students} alunos
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Formato: {course.format}</p>
                  <div className="space-y-1">
                    {course.topics.map((topic, i) => (
                      <div key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${colors.bg}`}></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full ${colors.bg} ${colors.text} py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity`}>
                  Inscrever Equipe
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Treinamento Personalizado</h2>
            <p className="mb-6">
              Precisa de um curso sob medida para as necessidades específicas da sua empresa?
              Criamos programas personalizados com conteúdo, duração e formato adaptados.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Solicitar Proposta Personalizada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
