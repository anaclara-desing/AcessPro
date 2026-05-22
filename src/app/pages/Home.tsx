import { ArrowRight, CheckCircle, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Acessibilidade que Transforma Empresas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Soluções completas para tornar seu negócio mais inclusivo, acessível e preparado para o futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/diagnostico"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Fazer Diagnóstico
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/consultoria"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-blue-500"
              >
                Consultoria Virtual
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Acessibilidade?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Investir em acessibilidade não é apenas cumprir legislação, é ampliar mercado, melhorar a imagem e criar valor real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">45 milhões de brasileiros</h3>
              <p className="text-muted-foreground">
                Têm algum tipo de deficiência. Esse é um mercado consumidor significativo e crescente.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conformidade Legal</h3>
              <p className="text-muted-foreground">
                Lei Brasileira de Inclusão (LBI) exige acessibilidade em ambientes físicos e digitais.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reputação e ESG</h3>
              <p className="text-muted-foreground">
                Empresas inclusivas têm melhor imagem, atraem talentos diversos e melhoram indicadores ESG.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-lg text-muted-foreground">
              Um ecossistema completo para sua jornada de acessibilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/diagnostico" className="group bg-card p-6 rounded-xl border border-border hover:border-blue-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                Diagnóstico Empresarial
              </h3>
              <p className="text-muted-foreground mb-4">
                Avaliação completa do nível de acessibilidade da sua empresa com relatórios detalhados e recomendações.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                Iniciar diagnóstico
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/consultoria" className="group bg-card p-6 rounded-xl border border-border hover:border-purple-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                Consultoria Virtual
              </h3>
              <p className="text-muted-foreground mb-4">
                Orientações personalizadas, priorização de ações e roadmap de implementação com assistente inteligente.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-medium">
                Acessar consultoria
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/treinamentos" className="group bg-card p-6 rounded-xl border border-border hover:border-green-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">
                Treinamentos Corporativos
              </h3>
              <p className="text-muted-foreground mb-4">
                Capacitação em atendimento acessível, Libras, acessibilidade digital e cultura inclusiva.
              </p>
              <div className="flex items-center gap-2 text-green-600 font-medium">
                Ver treinamentos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/dashboard" className="group bg-card p-6 rounded-xl border border-border hover:border-orange-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-600 transition-colors">
                Dashboard de Métricas
              </h3>
              <p className="text-muted-foreground mb-4">
                Acompanhe indicadores, evolução, conformidade e impacto das iniciativas de acessibilidade.
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-medium">
                Ver dashboard
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/blog" className="group bg-card p-6 rounded-xl border border-border hover:border-pink-500 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-pink-600 transition-colors">
                Blog & Recursos
              </h3>
              <p className="text-muted-foreground mb-4">
                Artigos, notícias, legislação, tecnologias assistivas e boas práticas atualizadas.
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-medium">
                Explorar conteúdo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-3">
                Ferramentas de Acessibilidade
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Alto contraste</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Ajuste de fonte</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Leitura por voz</span>
                </li>
              </ul>
              <p className="text-sm text-blue-100">
                Use o painel no canto inferior direito para ativar as ferramentas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
