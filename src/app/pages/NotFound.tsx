import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            404
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Home className="w-5 h-5" />
            Voltar ao Início
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/80 transition-colors"
          >
            <Search className="w-5 h-5" />
            Explorar Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
