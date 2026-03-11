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
            titulo: "Como gerar boleto avulso",
            videoAula: "assets/videos/Financeiro avulso.mp4",
            materialDidatico: `Passo a passo para gerar um Financeiro Avulso no sistema IXC Provedor:

Passo 1: Acessar o Contrato do Cliente
- No painel principal do cliente, clique na aba Contratos.
- Selecione o contrato desejado e clique no botao Editar (ou de um duplo clique).
- Com o contrato aberto, localize o botao Financeiro no menu superior e escolha a opcao Gerar financeiro avulso.

Passo 2: Configurar a Venda (Saida)
- Uma nova tela de "Venda" sera aberta. Preencha os campos obrigatorios.
- Tipo de documento: no video, e utilizado o codigo 501 (Pedido de Venda).
- Condicao de pagamento: selecione a opcao desejada (exemplo: "A vista").
- Obs: adicione uma descricao para identificar a cobranca (exemplo: "Boleto teste").
- Clique em Salvar.

Passo 3: Adicionar o Produto ou Servico
- Clique na aba Produtos dentro da mesma tela de Venda.
- Clique em Novo.
- No campo Produto, insira o codigo ou busque pelo item (no video, usa-se o codigo 1503 - Acordo Financeiro).
- Ajuste o Valor Unitario (exemplo: R$ 150,00) e a Quantidade.
- Clique em Salvar para incluir o item na venda e, em seguida, clique em Finalizar Saida.

Passo 4: Fechamento e Gerar Boleto
- Na tela de Fechamento, insira a Carteira de cobranca (exemplo: Gerencianet/Efi).
- Clique em Salvar e Gerar Financeiro.
- Va ate a aba Financeiro que aparecera no topo.
- Se precisar alterar a data de vencimento, clique em Editar, mude o campo Data de vencimento e clique em Salvar.
- Por fim, clique em Validar e Finalizar.

Passo 5: Impressao do Titulo
- Para visualizar o boleto gerado, acesse a aba Financeiro do contrato ou do cliente.
- Selecione o titulo, clique em Imprimir Boletos e escolha a opcao desejada.
- O sistema abrira o PDF do boleto pronto para envio ou impressao.`
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
