// data.js - Dados mockados da plataforma

export const cursos = [
  {
    id: 1,
    titulo: "JavaScript Avançado",
    descricao: "Domine conceitos avançados de JavaScript moderno",
    categoria: "JavaScript",
    nivel: "Intermediário",
    duracao: 12,
    imagem: "📚",
    modulos: [
      {
        titulo: "Fundamentos",
        aulas: [
          { id: 1, titulo: "Escopo e Closure" },
          { id: 2, titulo: "Hoisting e Temporal Dead Zone" },
          { id: 3, titulo: "Protótipos e Herança" }
        ]
      },
      {
        titulo: "APIs Modernas",
        aulas: [
          { id: 4, titulo: "Promises e Async/Await" },
          { id: 5, titulo: "Fetch API" },
          { id: 6, titulo: "Web APIs" }
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "CSS Responsivo",
    descricao: "Crie layouts modernos que funcionam em qualquer dispositivo",
    categoria: "CSS",
    nivel: "Iniciante",
    duracao: 8,
    imagem: "🎨",
    modulos: [
      {
        titulo: "Fundamentos",
        aulas: [
          { id: 7, titulo: "Flexbox" },
          { id: 8, titulo: "CSS Grid" },
          { id: 9, titulo: "Media Queries" }
        ]
      },
      {
        titulo: "Avançado",
        aulas: [
          { id: 10, titulo: "Custom Properties" },
          { id: 11, titulo: "Animações CSS" }
        ]
      }
    ]
  },
  {
    id: 3,
    titulo: "HTML Semântico",
    descricao: "Estruture suas páginas com HTML de forma profissional",
    categoria: "HTML",
    nivel: "Iniciante",
    duracao: 5,
    imagem: "📄",
    modulos: [
      {
        titulo: "Essenciais",
        aulas: [
          { id: 12, titulo: "Elementos semânticos" },
          { id: 13, titulo: "Acessibilidade" },
          { id: 14, titulo: "SEO Básico" }
        ]
      }
    ]
  },
  {
    id: 4,
    titulo: "Web Design UX/UI",
    descricao: "Princípios de design moderno para web",
    categoria: "Design",
    nivel: "Iniciante",
    duracao: 10,
    imagem: "✨",
    modulos: [
      {
        titulo: "Princípios",
        aulas: [
          { id: 15, titulo: "Design Thinking" },
          { id: 16, titulo: "Cores e Tipografia" },
          { id: 17, titulo: "Componentes UI" }
        ]
      }
    ]
  },
  {
    id: 5,
    titulo: "JavaScript ES6+",
    descricao: "Aprenda as novidades do JavaScript moderno",
    categoria: "JavaScript",
    nivel: "Intermediário",
    duracao: 9,
    imagem: "⚡",
    modulos: [
      {
        titulo: "ES6 Basics",
        aulas: [
          { id: 18, titulo: "Arrow Functions" },
          { id: 19, titulo: "Destructuring" },
          { id: 20, titulo: "Classes" }
        ]
      }
    ]
  },
  {
    id: 6,
    titulo: "Performance Web",
    descricao: "Otimize suas aplicações web para máxima velocidade",
    categoria: "Performance",
    nivel: "Avançado",
    duracao: 11,
    imagem: "🚀",
    modulos: [
      {
        titulo: "Otimização",
        aulas: [
          { id: 21, titulo: "Web Vitals" },
          { id: 22, titulo: "Cache Strategies" },
          { id: 23, titulo: "Code Splitting" }
        ]
      }
    ]
  }
];

export const planos = [
  {
    id: "free",
    nome: "Gratuito",
    preco: "0",
    descricao: "Perfeito para começar",
    features: [
      "2 cursos de exemplo",
      "Comunidade de apoio",
      "Certificado digital"
    ]
  },
  {
    id: "pro",
    nome: "Profissional",
    preco: "49",
    descricao: "Mais poderoso para profissionais",
    features: [
      "Todos os cursos",
      "Suporte prioritário",
      "Certificados verificáveis",
      "Projetos práticos",
      "Comunidade VIP"
    ],
    destaque: true
  },
  {
    id: "enterprise",
    nome: "Enterprise",
    preco: "199",
    descricao: "Para equipes e organizações",
    features: [
      "Tudo do plano Pro",
      "Acesso corporativo",
      "Pessoas ilimitadas",
      "Relatórios avançados",
      "Suporte dedicado 24/7"
    ]
  }
];

export const faqItems = [
  {
    pergunta: "Como funciona a plataforma?",
    resposta: "Você se registra, escolhe um curso e aprende no seu próprio ritmo. Cada curso tem módulos e aulas que você pode marcar como concluídas."
  },
  {
    pergunta: "Posso baixar os cursos?",
    resposta: "Sim! Os alunos do plano Pro e Enterprise podem baixar o conteúdo para estudo offline."
  },
  {
    pergunta: "Quanto tempo duram os cursos?",
    resposta: "Varia de 5 a 12 horas cada um. Você controla seu próprio ritmo e pode fazer uma aula por semana ou todas em um dia."
  },
  {
    pergunta: "E se eu não gostar do curso?",
    resposta: "Oferecemos reembolso em 30 dias. Sem perguntas."
  },
  {
    pergunta: "Como obtenho certificado?",
    resposta: "Após completar 100% de um curso e passar na avaliação final, você recebe um certificado digital verificável."
  }
];

export const depoimentos = [
  {
    autor: "Ana Silva",
    funcao: "Front-end Developer",
    texto: "Os cursos mudaram minha carreira. Super prático e didático!"
  },
  {
    autor: "Carlos Costa",
    funcao: "Designer",
    texto: "Finalmente entendi CSS Grid e Flexbox. Recomendo muito!"
  },
  {
    autor: "Marina Santos",
    funcao: "Full-stack Dev",
    texto: "Material excelente, instrutores incríveis. Vale cada centavo."
  }
];
