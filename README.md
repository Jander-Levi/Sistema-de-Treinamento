# 🎓 Plataforma de Treinamento - Protótipo

Um protótipo funcional de plataforma de treinamento online com HTML, CSS e JavaScript puro. Sem frameworks, sem dependências externas, pronto para evolução.

## 📁 Estrutura do Projeto

```
Treinamento/
├── index.html                          # Arquivo HTML principal
├── assets/
│   ├── css/
│   │   └── styles.css                  # Estilos responsivos com variáveis CSS
│   └── js/
│       ├── app.js                      # Inicialização da aplicação
│       └── modules/
│           ├── data.js                 # Dados mockados (cursos, planos, FAQ)
│           ├── state.js                # Gerenciamento de estado global
│           ├── storage.js              # Persistência em localStorage
│           ├── router.js               # Navegação por hash
│           └── ui.js                   # Componentes e renderização
└── README.md                           # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Projeto
- Abra o arquivo `index.html` em um navegador (Firefox, Chrome, Safari, Edge)
- Adicione uma extensão live server (VS Code) para melhor experiência de desenvolvimento

### 2. Navegação
- **#/home** - Landing page (padrão)
- **#/courses** - Lista de todos os cursos com filtros
- **#/course/:id** - Detalhe de um curso (ex: #/course/1)
- **#/dashboard** - Dashboard do usuário (simulado, requer "login")

### 3. Funcionalidades da Landing Page
- Header com navegação
- Hero com CTA "Começar agora"
- 3 Cursos em destaque
- Seção "Como funciona" (3 passos)
- Depoimentos
- Planos de preço (3 opcões)
- FAQ com accordion interativo
- Footer

### 4. Funcionalidades Internas
- **Listar Cursos**: Vá para #/courses, veja todos os 6 cursos
- **Filtrar**: Busque por texto ou categoria
- **Ver Detalhe**: Clique em um curso para ver módulos e aulas
- **Marcar Aulas**: Clique no checkbox para marcar como concluída
- **Login Simulado**: Clique em "Entrar" no header para simular login
- **Dashboard**: Veja seu progresso geral e cursos em andamento
- **Persistência**: Todos os dados são salvos em localStorage

## 💾 Dados e Estado

### data.js
- 6 cursos com módulos e aulas
- 3 planos (Free, Pro, Enterprise)
- 5 perguntas FAQ
- 3 depoimentos

### state.js
- Estado global reativo
- Funções para atualizar progresso
- Cálculo de percentual de progresso
- Sistema de eventos customizados

### storage.js
- Salva/lê progresso do usuário
- Salva/lê filtros e preferências
- Simples e extensível

## 🎨 Design e Acessibilidade

### Variáveis CSS
- **Cores**: Primária, secundária, sucesso, info, alerta, erro, neutros
- **Espaçamento**: xs, sm, md, lg, xl, 2xl, 3xl
- **Border radius**: sm, md, lg, xl
- **Sombras**: sm, md, lg, xl
- **Transições**: smooth 0.3s

### Acessibilidade
- ✓ Navegação por teclado (Enter, Espaço)
- ✓ ARIA labels para botões
- ✓ Foco visível em interções
- ✓ Semântica HTML clara
- ✓ Contraste adequado de cores

### Responsivo
- Mobile-first
- Breakpoints: 768px e 480px
- Grid e flexbox adaptativos

## 🔧 Qualidade de Código

### Princípios Seguidos
- **Modularidade**: ESM imports/exports
- **Imutabilidade**: Estado nunca muta diretamente
- **Separação de responsabilidades**: dados ≠ estado ≠ UI ≠ storage
- **DRY**: Sem duplicação
- **Legibilidade**: Nomes claros, comentários apenas quando necessário

### Padrões
- Hash router para navegação client-side
- Event listeners centralizados
- Funções puras quando possível
- Debounce para search/filtros

## 📈 Como Evoluir

### Curto Prazo (Fáceis)
1. **Adicionar mais cursos** - Edite `data.js`
2. **Customizar cores** - Altere variáveis em `styles.css`
3. **Adicionar new seções** - Crie funções em `ui.js`
4. **Melhorar design** - Refine estilos CSS

### Médio Prazo (Intermediários)
5. **Autenticação Real**
   - Integre com backend (Firebase, Auth0, etc)
   - Substitua `fazerLogin/Logout` em `state.js`
   - Proteja rotas privadas

6. **API Backend**
   - Crie servidor Node/Express/Python
   - Substitua dados mockados por fetch()
   - Sincronize estado com backend

7. **Painel Admin**
   - Criar nova rota `#/admin`
   - CRUD de cursos
   - Relatórios de usuários

8. **Busca Avançada**
   - Filtros por múltiplos critérios
   - Ordenação
   - Paginação

### Longo Prazo (Complexos)
9. **Framework Frontend** (opcional)
   - Migre para React/Vue se crescer muito
   - Componentes reutilizáveis
   - State management (Redux/Vuex)

10. **Database**
    - FirebaseDB ou SQL (PostgreSQL)
    - Schema de usuários, cursos, progresso
    - Backups automáticos

11. **Pagamento**
    - Stripe/PayPal integration
    - Planos com cobrança real
    - Webhooks para ativar acesso

12. **Notificações**
    - Email de boas-vindas
    - Lembretes de cursos
    - Certificados via email

13. **Certificados**
    - Geração dinâmica (PDF/imagem)
    - Verificação online
    - Compartilhamento em redes

14. **Analytics**
    - Rastreamento de eventos
    - Funil de conversão
    - Relatórios de engajamento

## 🐛 Debug e Desenvolvimento

### Console
```javascript
// Verificar estado global
import { obterEstado } from './assets/js/modules/state.js';
console.log(obterEstado());

// Limpar localStorage
localStorage.clear();

// Ver todas as rotas mudadas
window.addEventListener('estadoMudou', console.log);
```

### Dicas
- Use DevTools do navegador (F12)
- Veja o console para mensagens de toast
- Teste em diferentes dispositivos (mobile, tablet, desktop)
- Verifique localStorage em devtools

## 📚 Tecnologias

- **HTML5** - Semântica
- **CSS3** - Variáveis, Grid, Flexbox, Media queries
- **JavaScript ES6+** - Modules (ESM), Promises
- **localStorage** - Persistência

## ⚡ Performance

- Carregamento instantâneo (sem build, sem dependencies)
- Apenas 4 requests HTTP (HTML, CSS, JS principal, favicon)
- Sem bibliotecas externas
- Minifiable para produção

## 📝 Próximos Passos Recomendados

1. **Abra no navegador** e explore a landing page
2. **Clique em "Entrar"** para simular um login
3. **Vá para Cursos** e marque algumas aulas
4. **Vá para Dashboard** e veja o progresso sendo atualizado
5. **Abra DevTools** e veja localStorage salvando seus dados
6. **Modifique estilos** para entender como funciona
7. **Adicione um novo curso** em data.js

Bom desenvolvimento! 🚀

## 📄 Licença

Use livremente para qualquer propósito. Protótipo educacional.
