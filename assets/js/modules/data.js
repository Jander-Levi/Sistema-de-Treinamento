// data.js - Dados mockados da plataforma

export const cursos = [
  {
    id: 1,
    titulo: "Finananceiro",
    descricao: "Em produção...",
    categoria: "Financeiro",
    nivel: "Iniciante",
    duracao: 2,
    imagem: "💰",
    instrutor: "Nome do Instrutor",
    publicoAlvo: "Analistas, gestores e empreendedores",
    objetivos: [
      "Controlar fluxo de caixa e capital de giro",
      "Interpretar balanço patrimonial e DRE",
      "Aplicar indicadores financeiros para tomada de decisão"
    ],
    preRequisitos: [
      "Conhecimentos relacionados ao financeiro/ cobrança",
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
            titulo: "Em produção...",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 3,
            titulo: "Em produção...",
            videoAula: "",
            materialDidatico: ""
          }
        ]
      },
      {
        titulo: "Em produção...",
        aulas: [
          {
            id: 4,
            titulo: "Em produção...",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 5,
            titulo: "Em produção...",
            videoAula: "",
            materialDidatico: ""
          },
          {
            id: 6,
            titulo: "Em produção...",
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
