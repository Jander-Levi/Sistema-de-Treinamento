// ui.js - Componentes e renderização de UI

import { cursos } from "./data.js";
import {
  obterEstado,
  atualizarFiltros,
  marcarAulaComoConcluida,
  desmarcarAula,
  calcularProgressoCurso,
  obterAulasConcluidasCurso,
  fazerLogin,
  fazerLogout,
} from "./state.js";
import { navegar } from "./router.js";

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

function obterUrlEmbed(videoUrl) {
  if (!videoUrl) return null;
  const match = videoUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/,
  );
  if (!match) return null;
  return `https://www.youtube.com/embed/${match[1]}`;
}

function mostrarToast(mensagem, tipo = "sucesso") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${tipo}`;
  toast.textContent = mensagem;
  toast.setAttribute("role", "alert");
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function filtrarCursos(cursos, filtros) {
  let resultado = cursos;

  if (filtros.categoria && filtros.categoria !== "Todas") {
    resultado = resultado.filter((c) => c.categoria === filtros.categoria);
  }

  if (filtros.busca) {
    const termo = filtros.busca.toLowerCase();
    resultado = resultado.filter(
      (c) =>
        c.titulo.toLowerCase().includes(termo) ||
        c.descricao.toLowerCase().includes(termo),
    );
  }

  return resultado;
}

function obterCursoById(id) {
  return cursos.find((c) => c.id === id);
}

function obterCategorias() {
  const cats = new Set(cursos.map((c) => c.categoria));
  return ["Todas", ...Array.from(cats).sort()];
}

// ============================================================================
// COMPONENTES
// ============================================================================

function alternarTema() {
  const html = document.documentElement;
  const temaAtual = html.getAttribute('data-tema') || 'claro';
  const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';
  
  html.setAttribute('data-tema', novoTema);
  localStorage.setItem('treinamento_tema', novoTema);
  
  // Atualizar o ícone do botão
  const btnTema = document.querySelector("#btnTema");
  if (btnTema) {
    const novoIcone = novoTema === 'claro' ? '🌙' : '☀️';
    const novaLabel = novoTema === 'claro' ? 'Ativar modo escuro' : 'Ativar modo claro';
    btnTema.textContent = novoIcone;
    btnTema.setAttribute('aria-label', novaLabel);
    btnTema.setAttribute('title', novaLabel);
  }
}

function inicializarTema() {
  const temaArmazenado = localStorage.getItem('treinamento_tema') || 'claro';
  document.documentElement.setAttribute('data-tema', temaArmazenado);
}

function criarHeader() {
  const estado = obterEstado();
  const header = document.createElement("header");
  header.className = "header";

  // Determinando o ícone e aria-label baseado no tema atual
  const temaAtual = document.documentElement.getAttribute('data-tema') || 'claro';
  const iconeTema = temaAtual === 'claro' ? '🌙' : '☀️';
  const ariaLabel = temaAtual === 'claro' ? 'Ativar modo escuro' : 'Ativar modo claro';

  header.innerHTML = `
    <div class="container">
      <div class="header-content">
        <a href="#/home" class="logo"><img src="https://intranet.g2gsistemas.com.br/arquivos_publicos//logo_g2g.png" alt="Logo G2G" class="logo-img"><span class="logo-text">Plataforma de Treinamento G2G</span></a>
        <nav class="nav">
          <a href="#/home">Início</a>
          <a href="#/courses">Cursos</a>
        </nav>
        <div class="header-actions">
          <button class="btn-tema" id="btnTema" aria-label="${ariaLabel}" title="${ariaLabel}">${iconeTema}</button>
          ${
            estado.usuarioLogado
              ? `<span class="usuario-nome">${estado.usuarioNome}</span>
               <button class="btn btn-secundario" id="btnLogout">Sair</button>
               <a href="#/dashboard" class="btn btn-primario">Dashboard</a>`
              : `<button class="btn btn-primario" id="btnEntrar">Entrar</button>`
          }
        </div>
      </div>
    </div>
  `;

  // Event listeners
  const btnEntrar = header.querySelector("#btnEntrar");
  const btnLogout = header.querySelector("#btnLogout");
  const btnTema = header.querySelector("#btnTema");

  if (btnTema) {
    btnTema.addEventListener("click", (e) => {
      e.preventDefault();
      alternarTema();
    });
  }

  if (btnEntrar) {
    btnEntrar.addEventListener("click", (e) => {
      e.preventDefault();
      const nome = prompt("Qual é seu nome?", "João");
      if (nome) fazerLogin(nome);
    });
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", (e) => {
      e.preventDefault();
      fazerLogout();
      mostrarToast("Desconectado com sucesso!", "info");
      navegar("#/home");
    });
  }

  return header;
}

function criarCardCurso(curso) {
  const cursoDisponivel = curso.categoria === "Financeiro";
  const card = document.createElement("div");
  card.className = "card-curso";

  if (!cursoDisponivel) {
    card.innerHTML = `
      <div class="card-body">
        <h3>Em produção</h3>
      </div>
    `;
    card.addEventListener("click", () => {
      mostrarToast("Curso em produção.", "info");
    });
    return card;
  }

  const progresso = calcularProgressoCurso(curso);
  const temProgresso = progresso > 0;

  card.innerHTML = `
    <div class="card-header">
      <span class="imagem-curso">${curso.imagem}</span>
    </div>
    <div class="card-body">
      <h3>${curso.titulo}</h3>
      <p>${curso.descricao}</p>
      <div class="card-footer">
        <span class="badge">${curso.nivel}</span>
        <span class="duracao">⏱️ ${curso.duracao}h</span>
      </div>
      ${
        temProgresso
          ? `
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progresso}%"></div>
          </div>
          <span class="progress-text">${progresso}% concluído</span>
        </div>
      `
          : ""
      }
    </div>
  `;

  card.addEventListener("click", () => navegar(`#/course/${curso.id}`));
  return card;
}

function criarSecaoHero() {
  const section = document.createElement("section");
  section.className = "hero";
  section.innerHTML = `
    <div class="container">
      <div class="hero-content">
        <h1>Bem-vindo à Plataforma de Treinamento</h1>
        <img src="https://intranet.g2gsistemas.com.br/arquivos_publicos//logo_g2g.png" alt="Logo G2G" class="hero-logo">
        <p>Cursos práticos e modernos para quem quer se destacar</p>
        <button class="btn btn-grande" id="btnComeco">Começar Agora</button>
      </div>
    </div>
  `;

  section.querySelector("#btnComeco").addEventListener("click", () => {
    navegar("#/courses");
  });

  return section;
}

function criarSecaoCursoEmDestaque() {
  const section = document.createElement("section");
  section.className = "secao secao-cursos-destaque";

  const cursosDestaque = cursos.slice(0, 3);

  let html = `
    <div class="container">
      <h2>Cursos em Destaque</h2>
      <div class="grid-cursos">
  `;

  cursosDestaque.forEach((curso) => {
    html += `<div class="grid-item"></div>`;
  });

  html += `
      </div>
    </div>
  `;

  section.innerHTML = html;

  const items = section.querySelectorAll(".grid-item");
  cursosDestaque.forEach((curso, idx) => {
    items[idx].appendChild(criarCardCurso(curso));
  });

  return section;
}

function criarSecaoComoFunciona() {
  const section = document.createElement("section");
  section.className = "secao secao-como-funciona";
  section.innerHTML = `
    <div class="container">
      <h2>Como Funciona</h2>
      <div class="passos">
        <div class="passo">
          <div class="passo-numero">1</div>
          <h3>Escolha</h3>
          <p>Nós temos centenas de cursos em várias categorias</p>
        </div>
        <div class="passo">
          <div class="passo-numero">2</div>
          <h3>Aprenda</h3>
          <p>Estude no seu próprio ritmo, em qualquer hora e lugar</p>
        </div>
        <div class="passo">
          <div class="passo-numero">3</div>
          <h3>Certificado</h3>
          <p>Ganhe certificados verificáveis ao completar cursos</p>
        </div>
      </div>
    </div>
  `;
  return section;
}

function criarFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div>
          <h4>Sobre</h4>
          <p>Plataforma de cursos online de qualidade</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li><a href="#/">Privacidade</a></li>
            <li><a href="#/">Termos</a></li>
            <li><a href="#/">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4>Redes</h4>
          <ul>
            <li><a href="#/">Twitter</a></li>
            <li><a href="#/">LinkedIn</a></li>
            <li><a href="#/">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Treinamento. Todos os direitos reservados | Desenvolvido por Levi Rodrigues.</p>
      </div>
    </div>
  `;
  return footer;
}

// ============================================================================
// PÁGINAS
// ============================================================================

export function renderLandingPage() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  main.appendChild(criarSecaoHero());
  main.appendChild(criarSecaoCursoEmDestaque());
  main.appendChild(criarSecaoComoFunciona());
}

export function renderCoursesPage() {
  const estado = obterEstado();
  const cursosFiltrados = filtrarCursos(cursos, estado.filtros);
  const categorias = obterCategorias();

  const main = document.querySelector("main");
  main.innerHTML = "";

  const container = document.createElement("div");
  container.className = "courses-container";

  // Filtros
  const filtrosDiv = document.createElement("div");
  filtrosDiv.className = "filtros";
  filtrosDiv.innerHTML = `
    <input type="text" id="busca" placeholder="Buscar curso..." class="input-busca" value="${estado.filtros.busca}">
    <select id="categoria" class="select-categoria">
      ${categorias
        .map(
          (cat) => `
        <option value="${cat}" ${cat === estado.filtros.categoria ? "selected" : ""}>
          ${cat}
        </option>
      `,
        )
        .join("")}
    </select>
  `;

  // Event listeners com debounce
  const inputBusca = filtrosDiv.querySelector("#busca");
  const selectCategoria = filtrosDiv.querySelector("#categoria");

  const atualizarBusca = debounce((valor) => {
    atualizarFiltros({ busca: valor });
  }, 300);

  inputBusca.addEventListener("input", (e) => {
    atualizarBusca(e.target.value);
  });

  selectCategoria.addEventListener("change", (e) => {
    atualizarFiltros({ categoria: e.target.value });
  });

  container.appendChild(filtrosDiv);

  // Grid de cursos
  const gridDiv = document.createElement("div");
  gridDiv.className = "grid-cursos";

  if (cursosFiltrados.length === 0) {
    gridDiv.innerHTML = '<p class="vazio">Nenhum curso encontrado</p>';
  } else {
    cursosFiltrados.forEach((curso) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "grid-item";
      itemDiv.appendChild(criarCardCurso(curso));
      gridDiv.appendChild(itemDiv);
    });
  }

  container.appendChild(gridDiv);
  main.appendChild(container);
}

export function renderCourseDetail(cursoId) {
  const curso = obterCursoById(cursoId);
  if (!curso) {
    navegar("#/courses");
    return;
  }

  const progresso = calcularProgressoCurso(curso);
  const aulasConcluidasIds = obterAulasConcluidasCurso(cursoId);

  const main = document.querySelector("main");
  main.innerHTML = "";

  const container = document.createElement("div");
  container.className = "course-detail";

  const header = document.createElement("div");
  header.className = "detail-header";
  header.innerHTML = `
    <button class="btn-voltar" id="btnVoltar">← Voltar</button>
    <h1>${curso.titulo}</h1>
    <p>${curso.descricao}</p>
    <div class="meta">
      <span>${curso.nivel}</span>
      <span>${curso.duracao}h</span>
      <span>by ${curso.categoria}</span>
    </div>
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progresso}%"></div>
      </div>
      <span class="progress-text">${progresso}% concluído</span>
    </div>
  `;

  header
    .querySelector("#btnVoltar")
    .addEventListener("click", () => navegar("#/courses"));
  container.appendChild(header);

  // Botão para acessar o sistema de juros (apenas para cursos da categoria Financeiro)
  if (curso.categoria === "Financeiro") {
    const jurosLink = document.createElement("a");
    jurosLink.href = "https://www.juros.systemcodex.com.br/";
    jurosLink.target = "_blank";
    jurosLink.rel = "noopener noreferrer";
    jurosLink.className = "btn btn-secundario btn-juros";
    jurosLink.textContent = "Sistema de Juros";
    header.appendChild(jurosLink);
  }

  // Módulos e aulas
  const modulosDiv = document.createElement("div");
  modulosDiv.className = "modulos";

  curso.modulos.forEach((modulo, modIdx) => {
    const moduloDiv = document.createElement("div");
    moduloDiv.className = "modulo";

    let aulasHtml = '<ul class="aulas-list">';
    modulo.aulas.forEach((aula) => {
      const concluida = aulasConcluidasIds.includes(aula.id);
      const videoEmbedUrl = obterUrlEmbed(aula.videoAula);
      const videoHtml = videoEmbedUrl
        ? `
            <div class="aula-video">
              <iframe
                src="${videoEmbedUrl}"
                title="Vídeo aula: ${aula.titulo}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          `
        : aula.videoAula
          ? `
            <div class="aula-video">
              <video controls src="${aula.videoAula}"></video>
            </div>
          `
          : "";
      aulasHtml += `
        <li class="aula-item ${concluida ? "concluida" : ""}">
          <div class="aula-main">
            <input type="checkbox" id="aula-${aula.id}" ${concluida ? "checked" : ""} class="aula-checkbox">
            <label for="aula-${aula.id}">
              <span class="aula-titulo">${aula.titulo}</span>
              ${concluida ? '<span class="badge-concluida">✓</span>' : ""}
            </label>
          </div>
          ${videoHtml}
        </li>
      `;
    });
    aulasHtml += "</ul>";

    moduloDiv.innerHTML = `
      <h3>${modulo.titulo}</h3>
      ${aulasHtml}
    `;

    // Eventos dos checkboxes
    moduloDiv.querySelectorAll(".aula-checkbox").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const aulaId = parseInt(checkbox.id.split("-")[1]);
        if (checkbox.checked) {
          marcarAulaComoConcluida(cursoId, aulaId);
          mostrarToast("Aula marcada como concluída! 🎉", "sucesso");
        } else {
          desmarcarAula(cursoId, aulaId);
          mostrarToast("Aula desmarcada", "info");
        }
      });
    });

    modulosDiv.appendChild(moduloDiv);
  });

  container.appendChild(modulosDiv);
  main.appendChild(container);
}

export function renderDashboard() {
  const estado = obterEstado();

  if (!estado.usuarioLogado) {
    navegar("#/home");
    return;
  }

  const main = document.querySelector("main");
  main.innerHTML = "";

  const container = document.createElement("div");
  container.className = "dashboard-container";

  const header = document.createElement("div");
  header.className = "dashboard-header";
  header.innerHTML = `
    <h1>Dashboard</h1>
    <p>Bem-vindo, ${estado.usuarioNome}!</p>
  `;
  container.appendChild(header);

  // Resumo de progresso
  const resumoDiv = document.createElement("div");
  resumoDiv.className = "resumo-progresso";

  let totalAulas = 0;
  let totalConcluidas = 0;

  cursos.forEach((curso) => {
    const aulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0);
    totalAulas += aulas;
    totalConcluidas += obterAulasConcluidasCurso(curso.id).length;
  });

  const percent =
    totalAulas > 0 ? Math.round((totalConcluidas / totalAulas) * 100) : 0;

  resumoDiv.innerHTML = `
    <div class="resumo-card">
      <h3>Progresso Geral</h3>
      <div class="progress-bar big">
        <div class="progress-fill" style="width: ${percent}%"></div>
      </div>
      <p>${totalConcluidas} de ${totalAulas} aulas concluídas</p>
    </div>
  `;
  container.appendChild(resumoDiv);

  // Cursos em andamento
  const emAndamento = cursos.filter((curso) => {
    const prog = obterAulasConcluidasCurso(curso.id);
    return prog.length > 0;
  });

  if (emAndamento.length > 0) {
    const cursosDiv = document.createElement("div");
    cursosDiv.className = "meus-cursos";
    cursosDiv.innerHTML = "<h2>Seus Cursos</h2>";

    const gridDiv = document.createElement("div");
    gridDiv.className = "grid-cursos";

    emAndamento.forEach((curso) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "grid-item";
      itemDiv.appendChild(criarCardCurso(curso));
      gridDiv.appendChild(itemDiv);
    });

    cursosDiv.appendChild(gridDiv);
    container.appendChild(cursosDiv);
  } else {
    const vazio = document.createElement("p");
    vazio.className = "msg-vazia";
    vazio.innerHTML = 'Comece um curso! <a href="#/courses">Ver cursos →</a>';
    container.appendChild(vazio);
  }

  main.appendChild(container);
}

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

export function inicializarUI() {
  // Inicializar tema
  inicializarTema();
  
  const body = document.body;

  // Header
  const header = criarHeader();
  body.insertBefore(header, body.firstChild);

  // Footer
  body.appendChild(criarFooter());

  // Observar mudanças de estado para atualizar header
  window.addEventListener("estadoMudou", () => {
    const novoHeader = criarHeader();
    const headerAntigo = document.querySelector("header");
    headerAntigo.replaceWith(novoHeader);
  });
}
