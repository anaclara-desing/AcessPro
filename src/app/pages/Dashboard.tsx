import { TrendingUp, TrendingDown, Users, CheckCircle, AlertTriangle, Target } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', score: 45, incidents: 12 },
  { month: 'Fev', score: 52, incidents: 10 },
  { month: 'Mar', score: 58, incidents: 8 },
  { month: 'Abr', score: 64, incidents: 6 },
  { month: 'Mai', score: 72, incidents: 4 },
  { month: 'Jun', score: 78, incidents: 3 },
];

const categoryData = [
  { category: 'Física', score: 85 },
  { category: 'Digital', score: 72 },
  { category: 'Atendimento', score: 68 },
  { category: 'RH', score: 90 },
];

const complianceData = [
  { name: 'Conforme', value: 75, color: '#10b981' },
  { name: 'Em andamento', value: 18, color: '#f59e0b' },
  { name: 'Pendente', value: 7, color: '#ef4444' },
];

const trainingData = [
  { name: 'Libras Básico', completed: 24, total: 30 },
  { name: 'Atendimento Acessível', completed: 45, total: 50 },
  { name: 'WCAG Digital', completed: 12, total: 15 },
  { name: 'Gestão Inclusiva', completed: 8, total: 10 },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard de Acessibilidade</h1>
          <p className="text-muted-foreground">Acompanhe métricas, evolução e conformidade em tempo real</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                +12%
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">78%</div>
            <p className="text-sm text-muted-foreground">Índice Geral de Acessibilidade</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                +8%
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">89</div>
            <p className="text-sm text-muted-foreground">Ações Concluídas</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
                <TrendingDown className="w-4 h-4" />
                -65%
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">3</div>
            <p className="text-sm text-muted-foreground">Incidentes no Mês</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                +24
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">89</div>
            <p className="text-sm text-muted-foreground">Colaboradores Treinados</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Evolução do Índice de Acessibilidade</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} name="Índice (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Pontuação por Categoria</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="category" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="score" fill="#8b5cf6" name="Pontuação (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Status de Conformidade</h2>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={complianceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {complianceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {complianceData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-2xl font-bold">{item.value}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Progresso dos Treinamentos</h2>
            <div className="space-y-4">
              {trainingData.map((training, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{training.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {training.completed}/{training.total}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-900 to-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${(training.completed / training.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Taxa de Conclusão Geral</p>
              <p className="text-2xl font-bold">
                {Math.round(
                  (trainingData.reduce((acc, t) => acc + t.completed, 0) /
                    trainingData.reduce((acc, t) => acc + t.total, 0)) *
                    100
                )}
                %
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Próxima Auditoria: 15/06/2026</h3>
              <p className="text-blue-100">
                Continue implementando melhorias para alcançar a meta de 85% até a próxima avaliação.
              </p>
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
              Ver Plano de Ação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
