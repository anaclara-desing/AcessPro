import { Accessibility, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <Accessibility className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">AccessPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando empresas através da acessibilidade e inclusão.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Início</Link></li>
              <li><Link to="/diagnostico" className="text-muted-foreground hover:text-foreground transition-colors">Diagnóstico</Link></li>
              <li><Link to="/consultoria" className="text-muted-foreground hover:text-foreground transition-colors">Consultoria</Link></li>
              <li><Link to="/treinamentos" className="text-muted-foreground hover:text-foreground transition-colors">Treinamentos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Legislação</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Boas Práticas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@accesspro.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 AccessPro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
