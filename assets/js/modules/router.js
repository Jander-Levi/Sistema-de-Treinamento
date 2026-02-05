// router.js - Gerenciamento de rotas via hash

import {
  renderLandingPage,
  renderCoursesPage,
  renderCourseDetail,
  renderDashboard,
} from "./ui.js";
import {
  definirCursoSelecionado,
  obterEstado,
  atualizarEstado,
} from "./state.js";

const rotas = {
  "": renderLandingPage,
  "#/home": renderLandingPage,
  "#/courses": renderCoursesPage,
  "#/dashboard": renderDashboard,
};

export function inicializarRouter() {
  window.addEventListener("hashchange", handleRouteChange);
  handleRouteChange();
}

function handleRouteChange() {
  const hash = window.location.hash || "#/home";
  const main = document.querySelector("main");

  // Rota dinâmica /course/:id
  if (hash.startsWith("#/course/")) {
    const cursoId = parseInt(hash.split("/")[2]);
    definirCursoSelecionado(cursoId);
    renderCourseDetail(cursoId);
    return;
  }

  // Rotas estáticas
  const renderFunc = rotas[hash];
  if (renderFunc) {
    atualizarEstado({ rotaAtual: hash });
    renderFunc();
  } else {
    window.location.hash = "#/home";
  }
}

export function navegar(rota) {
  window.location.hash = rota;
}
