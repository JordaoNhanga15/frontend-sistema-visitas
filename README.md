# 🏗️ frontend-sistema-visitas-minfin

Projeto Angular baseado em **Angular Material** e Boas Práticas de Estrutura Corporativa, adaptado ao contexto **MINFIN** (Ministério das Finanças). Ideal para desenvolvedores que pretendem aprender organização de código, modularidade, tipagem forte e reutilização de componentes.

---

## 🚀 Stack Tecnológica

| Tecnologia                       | Versão Recomendada | Função                             |
| -------------------------------- | ------------------:| ---------------------------------- |
| Angular                          | 7.2.x              | Framework principal                |
| Angular Material                 | 7.3.x              | Componentes visuais (UI Kit)       |
| Bootstrap                        | 4.x                | Layout responsivo e grid           |
| RxJS                             | 6.x                | Programação reativa                |
| Chart.js / ECharts / Leaflet     | -                  | Visualização de dados e mapas      |
| TSLint + Prettier                | -                  | Linting e formatação de código     |
| Compodoc                         | -                  | Geração de documentação automática |

> ⚠️ Este projeto utiliza **Angular 7 (2018)** — recomenda-se **Node.js 12.22.x** e **npm 6.x** para compatibilidade total.

---

## 🧱 Estrutura de Pastas

A estrutura foi pensada para modularidade, legibilidade e manutenção.

```bash
src/
├── app/
│   ├── core/                      # Camada de lógica e domínio
│   │   ├── dto/                   # Data Transfer Objects (interfaces de req./res.)
│   │   ├── models/                # Modelos de dados (entidades de negócio)
│   │   ├── mappers/               # Conversores entre DTOs e Models
│   │   ├── services/              # Serviços e integrações (API, mock, etc.)
│   │   └── mock/                  # Base de dados mockada (simulação offline)
│   │
│   ├── shared/                    # Recursos reutilizáveis (componentes, pipes, diretivas)
│   │   ├── components/            # Componentes genéricos reutilizáveis
│   │   │   ├── app-button/
│   │   │   ├── app-dropdown/
│   │   │   ├── app-export/
│   │   │   ├── app-filters/
│   │   │   ├── app-list/
│   │   │   ├── app-pagination/
│   │   │   ├── app-table/
│   │   │   └── index.ts           # Export central dos componentes
│   │   ├── types/                 # Tipos globais
│   │   ├── utils/                 # Funções auxiliares
│   │   └── shared.module.ts       # Módulo que exporta todos os componentes/pipes comuns
│   │
│   ├── layout/                    # Estrutura visual principal (Shell, Sidebar, Toolbar)
│   ├── pages/                     # Páginas principais do sistema
│   │   ├── dashboard/
│   │   ├── visits/
│   │   ├── visitors/
│   │   ├── users/
│   │   ├── pages.module.ts
│   │   └── pages-routing.module.ts
│   │
│   ├── auth/                      # Módulo de autenticação (login, register, guard)
│   ├── app-routing.module.ts      # Rotas principais (lazy load)
│   └── app.module.ts              # Módulo raiz
│
├── assets/                        # Recursos estáticos (imagens, ícones, traduções)
├── environments/                  # Variáveis de ambiente
└── styles.scss                    # Estilos globais
```

---

## 📦 Padrão de Imports com Aliases

Defina aliases em `tsconfig.json` para simplificar imports e evitar caminhos relativos longos. Exemplo:

```json
"paths": {
  "@app/*": ["app/*"],
  "@core/*": ["app/core/*"],
  "@shared/*": ["app/shared/*"],
  "@models/*": ["app/core/models/*"],
  "@services/*": ["app/core/services/*"],
  "@dto/*": ["app/core/dto/*"],
  "@mappers/*": ["app/core/mappers/*"],
  "@mock/*": ["app/core/mock/*"]
}
```

Exemplo prático:

```ts
// Antes
import { VisitService } from '../../../core/services/visit.service';

// Agora
import { VisitService } from '@services/visit.service';
```

---

## 🗂️ Arquitetura e Indexação

Cada pasta importante possui um ficheiro `index.ts`, permitindo importações directas e limpas.

Exemplo `shared/components/index.ts`:

```ts
export * from './app-button/app-button.component';
export * from './app-dropdown/app-dropdown.component';
export * from './app-export/app-export.component';
export * from './app-filters/app-filters.component';
export * from './app-list/app-list.component';
export * from './app-pagination/app-pagination.component';
export * from './app-table/app-table.component';
```

Dessa forma, qualquer módulo pode importar rapidamente:

```ts
import { SharedModule } from '@shared/shared.module';
```

---

## 🧹 Linting e Formatação

O projeto usa **TSLint** e **Prettier** para padronização do código.

### ✅ Scripts úteis

```bash
# Corrigir lint
npm run lint

# Formatar código
npm run format
```

### Principais regras (exemplo em `tslint.json`)

- no-unused-variable
- member-ordering
- semicolons (semicolon)
- quotemark (preferência por aspas simples ou duplas)
- trailing-comma
- no-console (exceto em mocks)

Objetivo: manter código limpo, legível e uniforme em toda a equipa.

---

## 🔐 Autenticação e Guardas

O módulo `auth` contém:

- `auth.service.ts` — lógica de login, logout e persistência (ex.: localStorage / JWT)
- `auth.guard.ts` — protege rotas autenticadas (usa AuthService)
- `login/` e `register/` components com validação reativa (ReactiveForms)

---

## ⚙️ Scripts NPM

```bash
npm run start       # Inicia servidor de desenvolvimento (localhost:4200)
npm run build       # Compila o projeto
npm run build:prod  # Build otimizado para produção
npm run lint        # Verifica o lint
npm run format      # Formata o código (Prettier)
npm run docs        # Gera documentação (Compodoc)
```

---

## 🧭 Rotas e Lazy Loading

- `/auth` → módulo de autenticação
- `/` → layout principal (`ShellComponent`)
- `/dashboard`, `/visits`, `/visitors`, `/users` → páginas carregadas dinamicamente (lazy loaded quando possível)

Exemplo de route lazy-load:

```ts
{
  path: 'pages',
  loadChildren: () => import('@app/pages/pages.module').then(m => m.PagesModule),
  canActivate: [AuthGuard]
}
```

---

## 🧠 Boas Práticas Implementadas

- Arquitetura em camadas (`core`, `shared`, `pages`)
- Componentização genérica reutilizável
- DTOs, Models e Mappers separados
- Estrutura escalável e modular
- Alias e indexação limpa
- Linting + formatação padronizada
- Lazy Loading nos módulos principais

---

## 🧭 Roadmap para quem começa

1. Correr o projecto:
   ```bash
   nvm install
   nvm use
   npm install
   npm run start
   ```

2. Explorar páginas em `src/app/pages`.

3. Criar um componente simples:
   ```bash
   npx ng g c shared/hello-world --style=scss --skip-tests --module=src/app/shared/shared.module.ts
   ```

4. Trocar cores no tema Nebular / Material (`src/app/@theme/styles/styles.scss`).

5. Adicionar um gráfico simples numa página.

6. Gerar documentação:
   ```bash
   npm run docs
   npm run docs:serve
   ```

---

## 💬 Contribuição

1. Faça fork do repositório.  
2. Crie uma branch (`feat/nova-feature`).  
3. Commit com mensagem no padrão Conventional Commits:
   ```
   feat: criar componente de tabela genérica
   ```
4. Abra um Pull Request descrevendo a mudança.

---

## 📜 Licença

MIT © 2025 — Desenvolvido por **Portal Munice team** 🧑‍💻  
Com amor e código limpo ❤️ para o **MINFIN**.

---

## 🔍 Diagrama da Arquitectura (Mermaid)

```mermaid
flowchart TD
  AppModule -->|imports| CoreModule
  AppModule -->|imports| SharedModule
  AppModule -->|lazy| PagesModule
  AppModule -->|lazy| AuthModule
  PagesModule --> DashboardComponent
  PagesModule --> VisitsComponent
  PagesModule --> VisitorsComponent
  PagesModule --> UsersComponent
  AuthModule --> LoginComponent
  AuthModule --> RegisterComponent
  CoreModule --> Services[Services (API, Auth, Storage)]
  SharedModule --> Components[Reusable Components]
  Services -->|uses| Models[Models & DTOs]
```