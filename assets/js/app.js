// app.js - Inicialização da aplicação

import { inicializarUI } from "./modules/ui.js";
import { inicializarRouter } from "./modules/router.js";

document.addEventListener("DOMContentLoaded", () => {
  inicializarUI();
  inicializarRouter();
});
