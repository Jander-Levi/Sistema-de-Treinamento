// state.js - Gerenciamento de estado global

import { obterDoStorage, salvarNoStorage } from "./storage.js";

const estadoPadrao = {
  usuarioLogado: false,
  usuarioNome: "Usuário",
  cursoSelecionado: null,
  progressoPorCurso: {},
  filtros: {
    categoria: "Todas",
    busca: "",
  },
  rotaAtual: "#/home",
};

let estado = { ...estadoPadrao };

// Carrega o estado persistido do localStorage
function inicializarEstado() {
  const estadoSalvo = obterDoStorage("estado");
  if (estadoSalvo) {
    estado = { ...estado, ...estadoSalvo };
  }
}

// Retorna uma cópia do estado (imutabilidade)
export function obterEstado() {
  return { ...estado };
}

// Atualiza o estado e persiste
export function atualizarEstado(novosValores) {
  estado = { ...estado, ...novosValores };
  salvarNoStorage("estado", {
    progressoPorCurso: estado.progressoPorCurso,
    filtros: estado.filtros,
    usuarioNome: estado.usuarioNome,
  });
  // Dispara evento customizado para components reagirem
  window.dispatchEvent(new CustomEvent("estadoMudou", { detail: estado }));
}

// Atualiza filtros
export function atualizarFiltros(filtros) {
  atualizarEstado({
    filtros: { ...estado.filtros, ...filtros },
  });
}

// Define o curso selecionado
export function definirCursoSelecionado(cursoId) {
  atualizarEstado({ cursoSelecionado: cursoId });
}

// Marca uma aula como concluída
export function marcarAulaComoConcluida(cursoId, aulaId) {
  const progresso = estado.progressoPorCurso[cursoId] || {};
  progresso.aulasConcluidasIds = progresso.aulasConcluidasIds || [];

  if (!progresso.aulasConcluidasIds.includes(aulaId)) {
    progresso.aulasConcluidasIds.push(aulaId);
  }

  const novo = { ...estado.progressoPorCurso };
  novo[cursoId] = progresso;
  atualizarEstado({ progressoPorCurso: novo });
}

// Desmarcar aula
export function desmarcarAula(cursoId, aulaId) {
  const progresso = estado.progressoPorCurso[cursoId];
  if (progresso && progresso.aulasConcluidasIds) {
    progresso.aulasConcluidasIds = progresso.aulasConcluidasIds.filter(
      (id) => id !== aulaId,
    );
    const novo = { ...estado.progressoPorCurso };
    novo[cursoId] = progresso;
    atualizarEstado({ progressoPorCurso: novo });
  }
}

// Simula login
export function fazerLogin(nome) {
  atualizarEstado({
    usuarioLogado: true,
    usuarioNome: nome,
  });
}

// Simula logout
export function fazerLogout() {
  atualizarEstado({
    usuarioLogado: false,
    usuarioNome: "Usuário",
    progressoPorCurso: {},
  });
}

// Calcula progresso de um curso (percentual)
export function calcularProgressoCurso(curso) {
  if (!curso || !curso.modulos) return 0;

  const totalAulas = curso.modulos.reduce((acc, m) => acc + m.aulas.length, 0);
  if (totalAulas === 0) return 0;

  const progresso = estado.progressoPorCurso[curso.id];
  const aulasConcluidasCount = progresso?.aulasConcluidasIds?.length || 0;

  return Math.round((aulasConcluidasCount / totalAulas) * 100);
}

// Retorna todas as aulas concluídas de um curso
export function obterAulasConcluidasCurso(cursoId) {
  return estado.progressoPorCurso[cursoId]?.aulasConcluidasIds || [];
}

// Inicializa o estado na primeira vez
inicializarEstado();
