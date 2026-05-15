# Plataforma de Acessibilidade Empresarial

Este repositório contém o bundle de código da **Plataforma de Acessibilidade Empresarial**, exportado a partir do Figma Make.

- Projeto original (Figma): https://www.figma.com/design/DhAOT91QLYy1T6LiOjQmzg/Plataforma-de-Acessibilidade-Empresarial

## 📌 Status atual do repositório

> ⚠️ **Importante:** no estado atual deste checkout, o projeto não compila porque o entrypoint esperado (`/src/main.tsx`) não está presente.

Se você acabou de clonar/baixar este bundle, confirme se a pasta `src/` foi incluída corretamente.

## ✅ Pré-requisitos

- Node.js 20+
- npm 10+

> Dica: use `node -v` e `npm -v` para validar as versões.

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
```

O Vite exibirá a URL local (geralmente `http://localhost:5173`).

## 🏗️ Build de produção

```bash
npm run build
```

Se o build falhar com erro de resolução de `/src/main.tsx`, revise a seção **Status atual do repositório**.

## 🧪 Checklist rápido de diagnóstico

Execute estes comandos para validar se o bundle está íntegro:

```bash
# 1) Verificar entrypoint referenciado pelo HTML
cat index.html

# 2) Confirmar existência do diretório src
find . -maxdepth 2 -type d -name src

# 3) Tentar build
npm run build
```

## 📁 Estrutura esperada (mínima)

```text
.
├─ index.html
├─ package.json
├─ vite.config.ts
└─ src/
   └─ main.tsx
```

## 📦 Scripts disponíveis

- `npm run dev`: inicia servidor de desenvolvimento com Vite.
- `npm run build`: gera build de produção.

## 🤝 Próximas melhorias recomendadas

- Adicionar scripts de qualidade (`lint`, `typecheck`, `test`).
- Documentar variáveis de ambiente (se houver).
- Incluir guia de deploy.
- Incluir seção de contribuição (`CONTRIBUTING.md`).

## 📄 Licenças e atribuições

Este projeto inclui atribuições de terceiros em [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md).
