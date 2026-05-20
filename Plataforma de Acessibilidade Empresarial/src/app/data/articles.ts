export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  readTime: string;
  fullContent: Array<{
    heading?: string;
    paragraphs: string[];
    list?: string[];
  }>;
  conclusion?: string;
}

export const articles: Article[] = [
  {
    slug: 'lei-brasileira-inclusao-2026',
    title: 'Nova atualização da Lei Brasileira de Inclusão: O que muda para empresas em 2026',
    category: 'Legislação',
    date: '10 Mai 2026',
    author: 'Dra. Ana Paula Silva',
    excerpt: 'Entenda as principais mudanças na LBI e como sua empresa deve se adequar às novas exigências legais sobre acessibilidade digital e física.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    readTime: '8 min',
    fullContent: [
      {
        heading: 'Contexto das Mudanças',
        paragraphs: [
          'A Lei Brasileira de Inclusão (LBI), também conhecida como Estatuto da Pessoa com Deficiência, passou por importantes atualizações em 2026. Essas mudanças refletem o avanço tecnológico e as novas demandas da sociedade por ambientes mais inclusivos.',
          'As empresas agora têm prazos mais rígidos e penalidades mais severas para o descumprimento das normas de acessibilidade, tanto no ambiente físico quanto digital.',
        ],
      },
      {
        heading: 'Principais Mudanças',
        paragraphs: [
          'Entre as alterações mais significativas, destacam-se:',
        ],
        list: [
          'Obrigatoriedade de acessibilidade digital (WCAG 2.1 nível AA) para todos os sites corporativos até dezembro de 2027',
          'Ampliação da cota de contratação de pessoas com deficiência para empresas com mais de 50 funcionários',
          'Exigência de relatórios anuais de acessibilidade para empresas de médio e grande porte',
          'Certificação obrigatória de acessibilidade para novos empreendimentos comerciais',
          'Multas que podem chegar a 5% do faturamento anual para empresas em descumprimento',
        ],
      },
      {
        heading: 'Acessibilidade Digital',
        paragraphs: [
          'Um dos pontos mais importantes da atualização diz respeito à acessibilidade digital. Todas as empresas que possuem presença online, incluindo sites, aplicativos e plataformas de e-commerce, deverão garantir que seus canais digitais sejam plenamente acessíveis.',
          'Isso inclui navegação por teclado, compatibilidade com leitores de tela, textos alternativos em imagens, contraste adequado de cores, legendas em vídeos e formulários acessíveis.',
        ],
      },
      {
        heading: 'Ambiente Físico',
        paragraphs: [
          'As exigências para o ambiente físico também foram reforçadas. Estabelecimentos comerciais terão que adequar completamente suas instalações seguindo a NBR 9050, incluindo rampas, banheiros adaptados, elevadores acessíveis, sinalização tátil e visual.',
          'Novos empreendimentos precisarão obter certificação de acessibilidade antes mesmo de iniciar as operações.',
        ],
      },
      {
        heading: 'Como se Preparar',
        paragraphs: [
          'Para garantir a conformidade com a nova legislação, recomenda-se que as empresas:',
        ],
        list: [
          'Realizem uma auditoria completa de acessibilidade (física e digital)',
          'Desenvolvam um plano de adequação com cronograma e orçamento',
          'Treinem equipes em atendimento acessível e cultura inclusiva',
          'Contratem consultoria especializada para garantir conformidade',
          'Estabeleçam processos contínuos de monitoramento e melhoria',
        ],
      },
    ],
    conclusion: 'A atualização da LBI representa um avanço importante para a inclusão no Brasil. Empresas que se anteciparem às exigências não apenas evitarão penalidades, mas também ampliarão seu mercado, melhorarão sua reputação e contribuirão para uma sociedade mais justa e inclusiva.',
  },
  {
    slug: 'ia-acessibilidade-digital',
    title: 'Como a Inteligência Artificial está revolucionando a acessibilidade digital',
    category: 'Tecnologia',
    date: '08 Mai 2026',
    author: 'Carlos Mendes',
    excerpt: 'Descubra as principais ferramentas de IA que estão tornando websites e aplicativos mais acessíveis para pessoas com deficiência visual e auditiva.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    readTime: '6 min',
    fullContent: [
      {
        heading: 'O Papel da IA na Acessibilidade',
        paragraphs: [
          'A Inteligência Artificial tem se mostrado uma aliada poderosa na promoção da acessibilidade digital. Tecnologias como reconhecimento de imagem, processamento de linguagem natural e síntese de voz estão eliminando barreiras que antes pareciam intransponíveis.',
          'Ferramentas baseadas em IA podem automatizar tarefas que antes exigiam intervenção humana constante, como a geração de descrições de imagens, legendas automáticas e tradução para linguagem de sinais.',
        ],
      },
      {
        heading: 'Principais Tecnologias',
        paragraphs: [
          'Entre as tecnologias de IA mais impactantes para acessibilidade, destacam-se:',
        ],
        list: [
          'Descrição automática de imagens usando visão computacional',
          'Legendagem automática em tempo real para vídeos e eventos ao vivo',
          'Conversão de texto em linguagem de sinais (avatares virtuais)',
          'Leitores de tela inteligentes que entendem contexto',
          'Navegação assistida por voz com processamento de linguagem natural',
          'Ajuste automático de contraste e layout baseado nas necessidades do usuário',
        ],
      },
      {
        heading: 'Casos de Uso Práticos',
        paragraphs: [
          'Empresas líderes já estão implementando soluções de IA para acessibilidade. Sites de e-commerce usam IA para gerar descrições detalhadas de produtos automaticamente. Plataformas de streaming oferecem legendas e audiodescrição geradas por IA em múltiplos idiomas.',
          'Aplicativos corporativos utilizam assistentes virtuais que auxiliam usuários com deficiência visual a navegar por formulários complexos e realizar tarefas sem precisar enxergar a tela.',
        ],
      },
      {
        heading: 'Desafios e Limitações',
        paragraphs: [
          'Apesar dos avanços, a IA ainda apresenta limitações. Descrições automáticas de imagens podem não capturar nuances importantes. Legendas automáticas ainda cometem erros, especialmente com termos técnicos ou sotaques.',
          'Por isso, a supervisão humana continua essencial. A IA deve ser vista como uma ferramenta de apoio, não como substituição completa da curadoria humana.',
        ],
      },
    ],
    conclusion: 'A Inteligência Artificial está democratizando a acessibilidade digital, tornando-a mais viável e escalável. Empresas que investirem nessas tecnologias estarão à frente, oferecendo experiências verdadeiramente inclusivas a todos os usuários.',
  },
  {
    slug: 'erros-comuns-acessibilidade-sites',
    title: '10 erros comuns de acessibilidade em sites corporativos e como evitá-los',
    category: 'Boas Práticas',
    date: '05 Mai 2026',
    author: 'Marina Costa',
    excerpt: 'Lista prática dos erros mais frequentes que impedem pessoas com deficiência de navegar em sites empresariais e soluções simples para corrigi-los.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    readTime: '10 min',
    fullContent: [
      {
        heading: 'Introdução',
        paragraphs: [
          'Muitos sites corporativos, mesmo os modernos e visualmente atraentes, apresentam barreiras sérias para pessoas com deficiência. A boa notícia é que a maioria desses problemas tem soluções simples e baratas.',
          'Neste artigo, apresentamos os 10 erros mais comuns e como corrigi-los de forma prática.',
        ],
      },
      {
        heading: '1. Falta de Texto Alternativo em Imagens',
        paragraphs: [
          'Erro: Imagens sem atributo alt ou com descrições genéricas como "imagem1.jpg".',
          'Solução: Adicione descrições significativas em todas as imagens. Para imagens decorativas, use alt="" (vazio). Para imagens informativas, descreva o conteúdo relevante.',
        ],
      },
      {
        heading: '2. Contraste Insuficiente',
        paragraphs: [
          'Erro: Texto cinza claro sobre fundo branco, ou cores que não atendem ao padrão WCAG.',
          'Solução: Garanta contraste mínimo de 4.5:1 para textos normais e 3:1 para textos grandes. Use ferramentas como WebAIM Contrast Checker para validar.',
        ],
      },
      {
        heading: '3. Navegação Apenas por Mouse',
        paragraphs: [
          'Erro: Menus, botões e formulários que não funcionam com teclado.',
          'Solução: Teste toda a navegação usando apenas Tab, Enter e setas. Adicione estados de foco visíveis. Use elementos HTML semânticos (button, nav, etc.).',
        ],
      },
      {
        heading: '4. Formulários sem Labels',
        paragraphs: [
          'Erro: Campos de formulário sem rótulos associados ou com placeholders como única indicação.',
          'Solução: Use o elemento <label> corretamente associado a cada campo. Mantenha placeholders apenas como dicas adicionais, nunca como única orientação.',
        ],
      },
      {
        heading: '5. Vídeos sem Legendas',
        paragraphs: [
          'Erro: Conteúdo em vídeo sem legendas ou audiodescrição.',
          'Solução: Adicione legendas sincronizadas a todos os vídeos. Para conteúdo essencial, inclua também audiodescrição ou transcrição completa.',
        ],
      },
      {
        heading: 'Outros Erros Críticos',
        paragraphs: [
          'Além desses, outros erros comuns incluem:',
        ],
        list: [
          'Uso incorreto de heading tags (h1, h2, etc.) sem hierarquia lógica',
          'Links com textos genéricos como "clique aqui" ou "saiba mais"',
          'Tabelas sem cabeçalhos ou estrutura semântica adequada',
          'Pop-ups e modais que prendem o foco do usuário',
          'Ausência de skip links para pular navegação repetitiva',
        ],
      },
    ],
    conclusion: 'Evitar esses erros não é apenas uma questão de conformidade legal, mas de respeito e responsabilidade social. Sites acessíveis beneficiam todos os usuários, melhoram o SEO e ampliam o alcance do seu negócio.',
  },
  {
    slug: 'techcorp-certificacao-iso',
    title: 'Empresa brasileira conquista certificação internacional de acessibilidade',
    category: 'Casos de Sucesso',
    date: '02 Mai 2026',
    author: 'Roberto Lima',
    excerpt: 'Conheça a jornada da TechCorp que transformou sua cultura organizacional e conquistou o selo ISO 30071-1 de acessibilidade em TI.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    readTime: '7 min',
    fullContent: [
      {
        heading: 'A Jornada da TechCorp',
        paragraphs: [
          'A TechCorp, empresa brasileira de tecnologia com 500 funcionários, acaba de se tornar a primeira empresa da América Latina a conquistar a certificação ISO 30071-1, padrão internacional de acessibilidade em tecnologia da informação.',
          'A jornada começou há dois anos, quando a empresa percebeu que estava perdendo oportunidades de negócio devido à falta de acessibilidade em seus produtos e processos internos.',
        ],
      },
      {
        heading: 'Primeiros Passos',
        paragraphs: [
          'O processo começou com uma auditoria completa que revelou problemas sérios: site inacessível, produtos de software sem compatibilidade com tecnologias assistivas e ausência de processos formais de acessibilidade no desenvolvimento.',
          'A diretoria decidiu investir pesado: contratou uma consultoria especializada, formou um comitê de acessibilidade e estabeleceu metas ambiciosas para os próximos 24 meses.',
        ],
      },
      {
        heading: 'Implementação',
        paragraphs: [
          'A transformação envolveu múltiplas frentes:',
        ],
        list: [
          'Treinamento de 100% dos desenvolvedores em acessibilidade digital',
          'Revisão completa de todos os produtos e serviços',
          'Implementação de testes automatizados e manuais de acessibilidade',
          'Contratação de profissionais com deficiência para testes de usabilidade',
          'Criação de biblioteca de componentes acessíveis',
          'Estabelecimento de políticas de acessibilidade em todas as áreas',
        ],
      },
      {
        heading: 'Resultados',
        paragraphs: [
          'Após 18 meses de trabalho intenso, os resultados surpreenderam positivamente. A empresa viu aumento de 30% em vendas para órgãos governamentais, que exigem conformidade com acessibilidade. A satisfação dos clientes melhorou significativamente.',
          'Internamente, a contratação de pessoas com deficiência cresceu 200%, trazendo diversidade e novas perspectivas para as equipes.',
        ],
      },
      {
        heading: 'A Certificação',
        paragraphs: [
          'A ISO 30071-1 certifica que a empresa possui processos maduros de gestão de acessibilidade, incluindo governança, políticas, treinamento, desenvolvimento, testes e manutenção contínua.',
          'A auditoria de certificação durou três semanas e avaliou não apenas os produtos, mas toda a cultura organizacional e processos relacionados à acessibilidade.',
        ],
      },
    ],
    conclusion: 'A história da TechCorp mostra que acessibilidade é um investimento, não um custo. A empresa não apenas conquistou uma certificação prestigiosa, mas transformou completamente sua cultura, ampliou seu mercado e se posicionou como líder em inclusão no setor de tecnologia.',
  },
  {
    slug: 'audiodescricao-eventos-corporativos',
    title: 'Audiodescrição: guia completo para implementar em eventos corporativos',
    category: 'Boas Práticas',
    date: '28 Abr 2026',
    author: 'Juliana Andrade',
    excerpt: 'Passo a passo para incluir audiodescrição em apresentações, treinamentos e eventos, tornando-os acessíveis para pessoas com deficiência visual.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
    readTime: '5 min',
    fullContent: [
      {
        heading: 'O que é Audiodescrição',
        paragraphs: [
          'Audiodescrição é um recurso de acessibilidade que traduz imagens em palavras, permitindo que pessoas com deficiência visual compreendam conteúdos visuais. Em eventos corporativos, isso inclui descrição de slides, vídeos, demonstrações e elementos visuais das apresentações.',
          'É um direito garantido por lei e uma prática essencial para eventos verdadeiramente inclusivos.',
        ],
      },
      {
        heading: 'Quando Usar',
        paragraphs: [
          'A audiodescrição deve ser oferecida em:',
        ],
        list: [
          'Palestras e apresentações com slides',
          'Treinamentos corporativos',
          'Webinars e eventos online',
          'Lançamentos de produtos',
          'Assembleias e reuniões gerais',
          'Vídeos institucionais e de marketing',
        ],
      },
      {
        heading: 'Como Implementar',
        paragraphs: [
          'Para eventos presenciais: Contrate um audiodescritor profissional certificado. O profissional deve receber o material com antecedência para preparação. Durante o evento, a audiodescrição é transmitida por fone de ouvido para os participantes que necessitam.',
          'Para eventos online: A audiodescrição pode ser transmitida em canal de áudio separado ou integrada ao áudio principal. Plataformas como Zoom e Teams suportam múltiplos canais de áudio.',
        ],
      },
      {
        heading: 'Boas Práticas',
        paragraphs: [
          'Para garantir qualidade na audiodescrição:',
        ],
        list: [
          'Forneça todo o material com pelo menos 48 horas de antecedência',
          'Descreva elementos visuais relevantes, não óbvios',
          'Seja objetivo e neutro nas descrições',
          'Não interprete, apenas descreva',
          'Ajuste o ritmo às pausas naturais da apresentação',
          'Teste o equipamento antes do evento',
        ],
      },
    ],
    conclusion: 'Implementar audiodescrição em eventos corporativos não é apenas cumprir a lei, é demonstrar compromisso genuíno com a inclusão. Com planejamento adequado e profissionais qualificados, é possível tornar qualquer evento acessível a todos.',
  },
  {
    slug: 'tecnologias-assistivas-trabalho',
    title: 'Tecnologias assistivas: 15 ferramentas essenciais para o ambiente de trabalho',
    category: 'Tecnologia',
    date: '25 Abr 2026',
    author: 'Pedro Santos',
    excerpt: 'Conheça softwares, dispositivos e recursos que facilitam o trabalho de colaboradores com diferentes tipos de deficiência.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    readTime: '12 min',
    fullContent: [
      {
        heading: 'O que são Tecnologias Assistivas',
        paragraphs: [
          'Tecnologias assistivas são recursos, dispositivos, estratégias e serviços que promovem a funcionalidade de pessoas com deficiência, incapacidades ou mobilidade reduzida. No ambiente de trabalho, essas tecnologias são essenciais para garantir produtividade e autonomia.',
          'Investir em tecnologias assistivas não apenas beneficia colaboradores com deficiência, mas melhora a experiência de trabalho para todos.',
        ],
      },
      {
        heading: 'Para Deficiência Visual',
        paragraphs: [
          'Ferramentas essenciais:',
        ],
        list: [
          'JAWS e NVDA - Leitores de tela profissionais',
          'ZoomText - Software de ampliação de tela',
          'VoiceOver (Mac) e Narrator (Windows) - Leitores nativos',
          'Braille displays - Dispositivos para leitura em braille',
          'OCR (Reconhecimento Óptico de Caracteres) - Para digitalizar documentos',
        ],
      },
      {
        heading: 'Para Deficiência Auditiva',
        paragraphs: [
          'Recursos importantes:',
        ],
        list: [
          'Sistemas de legendagem automática (Otter.ai, Google Meet)',
          'Aplicativos de transcrição em tempo real',
          'Hand Talk e VLibras - Tradução para Libras',
          'Sistemas de alerta visual para notificações',
          'Amplificadores e fones de ouvido especializados',
        ],
      },
      {
        heading: 'Para Deficiência Motora',
        paragraphs: [
          'Tecnologias de apoio:',
        ],
        list: [
          'Mouses e trackballs adaptados',
          'Teclados ergonômicos e especiais',
          'Softwares de reconhecimento de voz (Dragon NaturallySpeaking)',
          'Eye tracking - Controle por movimento dos olhos',
          'Switches e acionadores customizados',
        ],
      },
      {
        heading: 'Como Escolher',
        paragraphs: [
          'A escolha da tecnologia assistiva deve ser personalizada. Envolva o colaborador no processo, teste diferentes opções e considere aspectos como compatibilidade com sistemas existentes, facilidade de uso e suporte técnico disponível.',
          'Ofereça treinamento adequado e suporte contínuo para garantir que as ferramentas sejam utilizadas de forma eficaz.',
        ],
      },
    ],
    conclusion: 'Tecnologias assistivas são investimentos estratégicos que promovem inclusão, diversidade e produtividade. Empresas que disponibilizam essas ferramentas demonstram compromisso real com a acessibilidade e criam ambientes de trabalho mais justos e eficientes.',
  },
  {
    slug: 'stf-sites-acessiveis-2027',
    title: 'STF decide: sites de empresas devem ser 100% acessíveis até 2027',
    category: 'Notícias',
    date: '20 Abr 2026',
    author: 'Equipe AccessPro',
    excerpt: 'Supremo Tribunal Federal estabelece prazo para adequação de todos os sites corporativos às normas de acessibilidade. Saiba como se preparar.',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop',
    readTime: '4 min',
    fullContent: [
      {
        heading: 'A Decisão',
        paragraphs: [
          'Em decisão histórica, o Supremo Tribunal Federal estabeleceu que todos os sites corporativos brasileiros devem estar em conformidade total com as normas de acessibilidade digital (WCAG 2.1 nível AA) até dezembro de 2027.',
          'A decisão atende a ação movida por organizações de defesa dos direitos das pessoas com deficiência e estabelece multas significativas para empresas que não cumprirem o prazo.',
        ],
      },
      {
        heading: 'Abrangência',
        paragraphs: [
          'A decisão se aplica a:',
        ],
        list: [
          'Sites institucionais de empresas de todos os portes',
          'Plataformas de e-commerce',
          'Portais de atendimento ao cliente',
          'Aplicativos web corporativos',
          'Intranets e sistemas internos com acesso externo',
        ],
      },
      {
        heading: 'Penalidades',
        paragraphs: [
          'Empresas em descumprimento poderão receber multas diárias de até R$ 10.000,00, além de restrições para participar de licitações públicas e perda de certificações de qualidade.',
          'A fiscalização ficará a cargo do Ministério Público e de órgãos de defesa do consumidor.',
        ],
      },
      {
        heading: 'Como se Preparar',
        paragraphs: [
          'Especialistas recomendam ação imediata:',
        ],
        list: [
          'Realizar auditoria de acessibilidade do site atual',
          'Contratar consultoria especializada',
          'Treinar equipes de desenvolvimento em WCAG',
          'Implementar testes automatizados e manuais',
          'Estabelecer processos contínuos de conformidade',
        ],
      },
    ],
    conclusion: 'A decisão do STF marca um momento histórico para a inclusão digital no Brasil. Empresas têm tempo hábil para se adequar, mas devem agir com urgência para garantir conformidade dentro do prazo estabelecido.',
  },
  {
    slug: 'cultura-inclusao-empresas',
    title: 'Como criar uma cultura de inclusão: lições de empresas referência',
    category: 'Casos de Sucesso',
    date: '15 Abr 2026',
    author: 'Dra. Ana Paula Silva',
    excerpt: 'Análise de estratégias bem-sucedidas de grandes empresas que tornaram a inclusão parte do DNA organizacional.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
    readTime: '9 min',
    fullContent: [
      {
        heading: 'O Desafio da Cultura Inclusiva',
        paragraphs: [
          'Criar uma cultura verdadeiramente inclusiva vai muito além de cumprir cotas ou fazer adaptações físicas. Trata-se de transformar valores, comportamentos e processos em todos os níveis organizacionais.',
          'Empresas referência em inclusão compartilham práticas comuns que podem servir de inspiração para outras organizações.',
        ],
      },
      {
        heading: 'Comprometimento da Liderança',
        paragraphs: [
          'Em todas as empresas analisadas, o compromisso visível da alta liderança foi fundamental. CEOs e diretores não apenas apoiam iniciativas de inclusão, mas participam ativamente, estabelecem metas e cobram resultados.',
          'A inclusão é tratada como prioridade estratégica, com recursos adequados e responsabilidades claras.',
        ],
      },
      {
        heading: 'Práticas de Destaque',
        paragraphs: [
          'Entre as melhores práticas identificadas:',
        ],
        list: [
          'Comitês de diversidade com poder decisório',
          'Metas de inclusão vinculadas a bônus de executivos',
          'Programas estruturados de mentoria para PcD',
          'Processos seletivos adaptados e sem vieses',
          'Treinamentos obrigatórios sobre viés inconsciente',
          'Grupos de afinidade apoiados pela empresa',
          'Comunicação interna acessível e inclusiva',
          'Avaliação contínua de clima organizacional',
        ],
      },
      {
        heading: 'Casos Inspiradores',
        paragraphs: [
          'A Empresa A aumentou a contratação de PcD de 2% para 15% em três anos, criando um centro de excelência em acessibilidade. A Empresa B transformou 100% de seus treinamentos em formatos acessíveis e viu aumento de 40% na satisfação geral dos colaboradores.',
          'A Empresa C implementou trabalho remoto acessível, permitindo que pessoas com mobilidade reduzida em todo o país se candidatassem a vagas.',
        ],
      },
      {
        heading: 'Medindo o Sucesso',
        paragraphs: [
          'Empresas de sucesso estabelecem métricas claras: percentual de PcD contratados, taxa de retenção, satisfação no trabalho, número de líderes com deficiência, incidentes de discriminação e índice de acessibilidade de sistemas.',
          'Essas métricas são acompanhadas mensalmente e divulgadas em relatórios de sustentabilidade.',
        ],
      },
    ],
    conclusion: 'Criar uma cultura de inclusão exige compromisso de longo prazo, investimento consistente e vontade genuína de transformação. As empresas que lideram nessa área mostram que inclusão não é apenas o certo a fazer, mas também uma vantagem competitiva significativa.',
  },
];
