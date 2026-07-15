# React + TypeScript + Vite
PROJETO FINAL DA DICIPLINA DE DESENVOLVIMENTO DE SOFTWARE PROFESSOR TASSIO

LINK PARA O PROJETO: https://github.com/DAJINHOO/trabalho_final.git

README AINDA ME DESENVOLVIMETO, ASSIM COMO O PROJETO.

# 📊 CryptoDash - Dashboard de Criptomoedas

## 📖 Sobre o Projeto

O **CryptoDash** é uma aplicação web desenvolvida com **React + TypeScript** que consome dados da API pública **CoinGecko** para exibir informações sobre criptomoedas em um dashboard interativo.

O projeto tem como objetivo aplicar conceitos modernos de desenvolvimento Front-end, como consumo de APIs REST, componentização, gerenciamento de estado, roteamento, responsividade e visualização de dados.

---

## 🚀 Funcionalidades

- Consumo de dados em tempo real da API CoinGecko
- Dashboard com estatísticas das criptomoedas
- Cards com informações principais
- Gráfico interativo utilizando Chart.js
- Tabela com dados detalhados das moedas
- Busca por nome da criptomoeda
- Atualização manual dos dados
- Exportação dos dados em:
  - JSON
  - CSV
- Página de detalhes de cada moeda
- Página de relatórios
- Página de configurações
- Loading durante requisições
- Tratamento de erros da API
- Interface responsiva

---

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- Chart.js
- React ChartJS 2
- React Icons
- Tailwind CSS

---

## 📁 Estrutura do Projeto

```text
crypto-dashboard/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── ChartCard/
│   │   │   ├── CoinCard/
│   │   │   ├── CoinTable/
│   │   │   ├── ExportButtons/
│   │   │   ├── FilterBar/
│   │   │   ├── Header/
│   │   │   ├── layout/
│   │   │   ├── Loading/
│   │   │   └── Sidebar/
│   │   │
│   │   ├── constants/
│   │   │   └── navigation.ts
│   │   │
│   │   ├── ErrorMessage/
│   │   │
│   │   └── types/
│   │       └── coin.ts
│   │
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Reports.tsx
│   │   ├── Settings.tsx
│   │   ├── CoinDetails.tsx
│   │   └── NotFound.tsx
│   │
│   ├── routes/
│   │   └── AppRoutes.tsx
│   │
│   ├── services/
│   │   ├── api.ts
│   │   └── coins.ts
│   │
│   ├── App.tsx
│   └── App.css
│
├── package.json
└── README.md
📄 Páginas da Aplicação
📈 Dashboard

Página principal contendo:

Estatísticas gerais
Gráfico de valores
Tabela de criptomoedas
Pesquisa
Exportação de dados
Atualização manual
📊 Relatórios

Apresenta uma visão consolidada dos dados utilizando:

Gráficos
Tabelas
Informações da API
⚙️ Configurações

Área destinada às preferências da aplicação, como:

Configuração da moeda utilizada
Preferências do dashboard
🔎 Detalhes da Criptomoeda

Página dinâmica utilizando parâmetro de rota:

/coin/:id

Exibe informações específicas de uma moeda selecionada.

🔌 Integração com API

A aplicação utiliza a API pública:

CoinGecko API

Responsável por fornecer:

Nome das moedas
Símbolos
Imagens
Preços atuais
Market Cap
Variações de preço

A comunicação é realizada utilizando Axios através de uma camada de serviços:

services/
├── api.ts
└── coins.ts
▶️ Como Executar o Projeto

Clone o repositório:

git clone <https://github.com/DAJINHOO/trabalho_final.git>

Entre na pasta:

cd crypto-dashboard

Instale as dependências:

npm install

Execute o projeto:

npm run dev

A aplicação será iniciada pelo Vite.

🎯 Objetivo Acadêmico

Este projeto foi desenvolvido como atividade prática de desenvolvimento Front-end, aplicando:

Componentização React
TypeScript
Consumo de APIs
Gerenciamento de estados
Rotas dinâmicas
Organização modular
Criação de interfaces responsivas