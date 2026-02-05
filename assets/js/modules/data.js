// data.js - Dados mockados da plataforma

export const cursos = [
  {
    id: 1,
    titulo: "Finanças Empresariais",
    descricao: "Aprenda fluxo de caixa, análise de demonstrativos e planejamento financeiro na prática",
    categoria: "Financeiro",
    nivel: "Intermediário",
    duracao: 12,
    imagem: "💰",
    instrutor: "Nome do Instrutor",
    publicoAlvo: "Analistas, gestores e empreendedores",
    objetivos: [
      "Controlar fluxo de caixa e capital de giro",
      "Interpretar balanço patrimonial e DRE",
      "Aplicar indicadores financeiros para tomada de decisão"
    ],
    preRequisitos: [
      "Noções básicas de matemática financeira"
    ],
    modulos: [
      {
        titulo: "Fundamentos Financeiros",
        aulas: [
          {
            id: 1,
            titulo: "Geração Financeiro em Lotes",
            videoAula: "https://youtube.com/watch?v=FnK5rw0TiG4",
            materialDidatico: ""
          },
          {
            id: 2,
            titulo: "Juros simples e compostos",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 3,
            titulo: "Valor do dinheiro no tempo",
            videoAula: "",
            materialDidatico: ""
          }
        ]
      },
      {
        titulo: "Análise e Planejamento",
        aulas: [
          {
            id: 4,
            titulo: "Balanço patrimonial e DRE",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 5,
            titulo: "Fluxo de caixa e capital de giro",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 6,
            titulo: "Indicadores e KPIs financeiros",
            videoAula: "",
            materialDidatico: ""
          }
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
          { id: 7, titulo: "Flexbox", videoAula: "", materialDidatico: "" },
          { id: 8, titulo: "CSS Grid", videoAula: "", materialDidatico: "" },
          { id: 9, titulo: "Media Queries", videoAula: "", materialDidatico: "" }
        ]
      },
      {
        titulo: "Avançado",
        aulas: [
          {
            id: 10,
            titulo: "Custom Properties",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 11,
            titulo: "Animações CSS",
            videoAula: "",
            materialDidatico: ""
          }
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
          {
            id: 12,
            titulo: "Elementos semânticos",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 13,
            titulo: "Acessibilidade",
            videoAula: "",
            materialDidatico: ""
          },
          { id: 14, titulo: "SEO Básico", videoAula: "", materialDidatico: "" }
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
          {
            id: 15,
            titulo: "Design Thinking",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 16,
            titulo: "Cores e Tipografia",
            videoAula: "",
            materialDidatico: ""
          },
          { id: 17, titulo: "Componentes UI", videoAula: "", materialDidatico: "" }
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
          {
            id: 18,
            titulo: "Arrow Functions",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 19,
            titulo: "Destructuring",
            videoAula: "",
            materialDidatico: ""
          },
          { id: 20, titulo: "Classes", videoAula: "", materialDidatico: "" }
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
          { id: 21, titulo: "Web Vitals", videoAula: "", materialDidatico: "" },
          {
            id: 22,
            titulo: "Cache Strategies",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 23,
            titulo: "Code Splitting",
            videoAula: "",
            materialDidatico: ""
          }
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
