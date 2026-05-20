import { useParams, Link, useNavigate } from 'react-router';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { articles } from '../data/articles';

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    navigate('/blog');
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Blog
        </Link>

        <article>
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                <Share2 className="w-4 h-4" />
                Compartilhar
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                <Bookmark className="w-4 h-4" />
                Salvar
              </button>
            </div>
          </div>

          <div className="relative h-96 bg-muted rounded-xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {article.fullContent.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && (
                  <h2 className="text-2xl font-bold mb-4 mt-8">{section.heading}</h2>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4 text-foreground/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    {section.list.map((item, lIndex) => (
                      <li key={lIndex} className="text-foreground/90">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {article.conclusion && (
              <div className="mt-12 p-6 bg-muted rounded-xl border-l-4 border-primary">
                <h3 className="font-semibold mb-3">Conclusão</h3>
                <p className="text-foreground/90">{article.conclusion}</p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sobre {article.author}</h3>
                  <p className="text-muted-foreground">
                    Especialista em acessibilidade e inclusão com mais de 10 anos de experiência
                    ajudando empresas a se tornarem mais acessíveis e inclusivas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles
                .filter(a => a.category === article.category && a.slug !== article.slug)
                .slice(0, 2)
                .map((relatedArticle, index) => (
                  <Link
                    key={index}
                    to={`/blog/${relatedArticle.slug}`}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-40 bg-muted overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
