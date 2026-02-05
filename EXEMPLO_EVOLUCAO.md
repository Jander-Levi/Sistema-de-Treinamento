// EXEMPLO: Como adicionar novo conteúdo à plataforma

// ============================================================
// 1. ADICIONAR NOVO CURSO
// ============================================================
// Edite assets/js/modules/data.js e adicione:

const novoClase = {
  id: 7, // Incrementar ID
  titulo: "React Essentials",
  descricao: "Aprenda a construir aplicações modernas com React",
  categoria: "React",
  nivel: "Intermediário",
  duracao: 15,
  imagem: "⚛️",
  modulos: [
    {
      titulo: "Fundamentos React",
      aulas: [
        { id: 24, titulo: "JSX e Componentes" },
        { id: 25, titulo: "Props e State" },
        { id: 26, titulo: "Hooks" }
      ]
    },
    {
      titulo: "Avançado",
      aulas: [
        { id: 27, titulo: "Context API" },
        { id: 28, titulo: "Performance" }
      ]
    }
  ]
};

// Adicione o array dos cursos:
export const cursos = [
  // ... cursos existentes ...
  novoClase // Adicione aqui
];

// ============================================================
// 2. ADICIONAR NOVO PLANO
// ============================================================
// Em data.js:

const unicornPlan = {
  id: "unicorn",
  nome: "Unicorn",
  preco: "299",
  descricao: "Plano premium máximo",
  features: [
    "Tudo do plano Enterprise",
    "1:1 com mentores",
    "Early access a novos cursos",
    "Custom learning paths"
  ]
};

export const planos = [
  // ... planos existentes ...
  unicornPlan
];

// ============================================================
// 3. ADICIONAR NOVO FAQ
// ============================================================
// Em data.js:

export const faqItems = [
  // ... itens existentes ...
  {
    pergunta: "Posso cancelar a qualquer momento?",
    resposta: "Sim! Sem contrato de longa duração. Cancele quando quiser."
  }
];

// ============================================================
// 4. ADICIONAR DEPOIMENTO
// ============================================================
// Em data.js:

export const depoimentos = [
  // ... depoimentos existentes ...
  {
    autor: "Paula Oliveira",
    funcao: "Tech Lead",
    texto: "Transformou minha equipe. Todos completaram pelo menos 3 cursos."
  }
];

// ============================================================
// 5. ADICIONAR NOVA SEÇÃO NA LANDING PAGE
// ============================================================
// Em assets/js/modules/ui.js:

function criarSecaoBlog() {
  const section = document.createElement('section');
  section.className = 'secao secao-blog';
  section.innerHTML = `
    <div class="container">
      <h2>Blog & Recursos</h2>
      <div class="grid-posts">
        <article class="post-card">
          <h3>5 Dicas de JavaScript</h3>
          <p>Aprenda truques avançados de Java Script...</p>
          <a href="#/" class="btn btn-secundario">Ler mais</a>
        </article>
      </div>
    </div>
  `;
  return section;
}

// Em renderLandingPage(), adicione:
export function renderLandingPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  
  main.appendChild(criarSecaoHero());
  main.appendChild(criarSecaoCursoEmDestaque());
  main.appendChild(criarSecaoComoFunciona());
  main.appendChild(criarSecaoBlog()); // ← NOVA SEÇÃO
  main.appendChild(criarSecaoDepoimentos());
  main.appendChild(criarSecaoPrecos());
  main.appendChild(criarFAQ());
}

// E em styles.css, adicione:
.secao-blog {
  background-color: var(--cor-neutro-50);
}

.grid-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--espacamento-lg);
}

.post-card {
  background: white;
  padding: var(--espacamento-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--sombra-sm);
}

.post-card h3 {
  margin-bottom: var(--espacamento-md);
}

// ============================================================
// 6. ADICIONAR NOVA ROTA
// ============================================================
// Em assets/js/modules/router.js:

const rotas = {
  '': renderLandingPage,
  '#/home': renderLandingPage,
  '#/courses': renderCoursesPage,
  '#/dashboard': renderDashboard,
  '#/blog': renderBlogPage // ← NOVA ROTA
};

// E em ui.js:
export function renderBlogPage() {
  const main = document.querySelector('main');
  main.innerHTML = '<div class="container"><h1>Blog</h1><p>Vindo em breve...</p></div>';
}

// ============================================================
// 7. ADICIONAR NOVO ESTADO GLOBAL
// ============================================================
// Em assets/js/modules/state.js:

export function definirTemaBuscado(tema) {
  atualizarEstado({
    temaBuscado: tema
  });
}

// ============================================================
// 8. PERSISTIR NOVO DADO
// ============================================================
// Em state.js, dentro de inicializarEstado():

function inicializarEstado() {
  const estadoSalvo = obterDoStorage('estado');
  if (estadoSalvo) {
    estado = { ...estado, ...estadoSalvo };
  }
}

// E dentro de atualizarEstado():
salvarNoStorage('estado', {
  progressoPorCurso: estado.progressoPorCurso,
  filtros: estado.filtros,
  usuarioNome: estado.usuarioNome,
  temaBuscado: estado.temaBuscado // ← NOVO CAMPO
});

// ============================================================
// 9. ADICIONAR NOVO COMPONENTE
// ============================================================
// Em ui.js:

function criarModalCertificado(nomeUsuario, nomeCurso) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">×</button>
      <div class="certificado">
        <h2>Certificado</h2>
        <p>${nomeUsuario} completou</p>
        <p>${nomeCurso}</p>
      </div>
    </div>
  `;
  
  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.remove();
  });
  
  return modal;
}

// E em styles.css:
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: var(--espacamento-2xl);
  border-radius: var(--border-radius-lg);
  max-width: 500px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: var(--espacamento-md);
  right: var(--espacamento-md);
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

// ============================================================
// 10. MODIFICAR COR DA PALETA
// ============================================================
// Em styles.css, altere :root:

:root {
  --cor-primaria: #ec4899; /* de #6366f1 para pink */
  --cor-secundaria: #f43f5e;
  // ... outras cores ...
}

// ============================================================
// DICAS GERAIS PARA EVOLUÇÃO
// ============================================================

/*
1. ESTRUTURA
   - Não adicione muita lógica em ui.js, quebre em funções menores
   - Crie utils.js para funções reutilizáveis (validação, formatação)
   - Crie um modules/api.js para chamar backend depois

2. PERFORMANCE
   - Evite rerender de tudo, use event listeners específicos
   - Use debounce para search/filtros (já implementado)
   - Prefira CSS classes a inline styles

3. LÓGICA
   - State é source of truth, sempre atualizar via state.js
   - Não mude dados diretamente, sempre use atualizarEstado()
   - Dispare eventos customizados para notificar mudanças

4. TESTES
   - Teste em mobile primeiro (mobile-first mindset)
   - Teste sem internet (funciona offline via localStorage)
   - Teste com zoom (accessible font sizes)
   - Teste no Firefox, Chrome, Safari

5. DEPLOY
   - Coloque em GitHub Pages (grátis)
   - Minifique CSS/JS antes de produção
   - Configure um favicon
   - Adicione OpenGraph meta tags para compartilhamento

*/
