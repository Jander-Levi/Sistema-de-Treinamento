// storage.js - Persistência em localStorage

const PREFIXO = "treinamento_";

export function salvarNoStorage(chave, valor) {
  try {
    localStorage.setItem(PREFIXO + chave, JSON.stringify(valor));
  } catch (erro) {
    console.error("Erro ao salvar no storage:", erro);
  }
}

export function obterDoStorage(chave) {
  try {
    const valor = localStorage.getItem(PREFIXO + chave);
    return valor ? JSON.parse(valor) : null;
  } catch (erro) {
    console.error("Erro ao ler do storage:", erro);
    return null;
  }
}

export function removerDoStorage(chave) {
  try {
    localStorage.removeItem(PREFIXO + chave);
  } catch (erro) {
    console.error("Erro ao remover do storage:", erro);
  }
}

export function limparStorage() {
  try {
    const chaves = Object.keys(localStorage);
    chaves.forEach((chave) => {
      if (chave.startsWith(PREFIXO)) {
        localStorage.removeItem(chave);
      }
    });
  } catch (erro) {
    console.error("Erro ao limpar storage:", erro);
  }
}
