<div align="center">
  <img src="https://raw.githubusercontent.com/BeiruthDEV/IronLog/main/public/vite.svg" alt="SCALE Logo" width="100"/>

  # SCALE: Siga seu Instinto, Domine o Aço

  [![React](https://img.shields.io/badge/React-19.0.0-blue.svg?style=flat&logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02.svg?style=flat)](https://gsap.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## 📌 Descrição Breve

**SCALE** é uma landing page cinemática e de alta fidelidade visual, construída para promover o aplicativo de rastreamento de treinos de mesmo nome. O projeto utiliza uma estética "Brutalist Fitness" (Dark Void + Flame Orange), enfatizando telemetria, densidade de informações e micro-interações de ponta para atrair atletas e entusiastas que buscam sobrecarga progressiva estruturada.

## 🚀 Características Principais

*   **Design System Editorial Brutalista:** Tema escuro denso com paleta acentuada em laranja (`#F97316`), tipografia em caixa alta e interface de navegação com bordas translúcidas.
*   **Animações Assíncronas (GSAP):** Animações complexas ativadas por rolagem (`ScrollTrigger`), efeitos de opacidade de entrada escalonados e interações magnéticas.
*   **Protocolos de UI Mockados:** Componentes que imitam a interface final do aplicativo visualmente através do *Sticky Stacking* garantindo profundidade.
*   **Textura e Ruído Global:** Implementação de ruído SVG nativo e gradientes lineares tipo malha-de-grade para replicar painéis de rastreamento industrial.
*   **Desempenho Otimizado (Vite + React):** Empacotador web rápido que entrega o site renderizado em frações de segundos.

## ⚙️ Pré-requisitos e Instalação

Siga as instruções abaixo para executar o projeto em sua máquina local para ambiente de desenvolvimento e testes.

### Dependências Iniciais
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no seu sistema.

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/BeiruthDEV/IronLog.git
   ```
2. Entre no diretório do projeto
   ```bash
   cd IronLog
   ```
3. Instale as dependências via NPM
   ```bash
   npm install
   ```

## 💻 Como Usar

Para iniciar o servidor de desenvolvimento e visualizar o site interativo no seu navegador em tempo real:

```bash
# Inicia o servidor Vite na porta 5173
npm run dev
```

Abra o navegador no endereço `http://localhost:5173`. Quaisquer alterações no código fonte (`.jsx` ou `.css`) refletirão na tela automaticamente (*Hot Module Replacement*).

Para construir o código para a versão em produção:

```bash
# Empacota e minifica os arquivos na pasta /dist
npm run build
```

## 📁 Estrutura do Projeto

Abaixo uma visão geral da principal organização do código-fonte:

```text
IronLog/
├── public/                 # Assets públicos e meta-flags
├── src/
│   ├── components/         # Blocos visuais modulares da aplicação
│   │   ├── Features.jsx    # "Diferenciais do App", interações micro-UI
│   │   ├── Footer.jsx      # Rodapé operativo de call-to-action
│   │   ├── Header.jsx      # Navigation Bar com efeito Blur/Magnetic
│   │   ├── Hero.jsx        # Capa Cinemática principal
│   │   ├── Philosophy.jsx  # Parallax Manifesto
│   │   └── Protocol.jsx    # Telas de UI com GSAP Sticky Stacking
│   ├── App.jsx             # Estrutura principal e montagem dos componentes
│   ├── index.css           # Estilos globais Tailwind e custom frames
│   └── main.jsx            # Entry point central React -> DOM
├── package.json            # Scripts de CLI e Registro de dependências
├── tailwind.config.js      # Integrações da paleta e tokens CSS 
└── vite.config.js          # Configurações de compilação da ferramenta Vite
```

## 🛠️ Tecnologias Utilizadas

A base do aplicativo e da interface utiliza a seguinte *Stack* técnica:

*   **[React 19](https://react.dev/):** Biblioteca para interfaces dinâmicas em Componentes.
*   **[Vite](https://vitejs.dev/):** Ferramenta de build web veloz otimizada de próxima geração.
*   **[Tailwind CSS v4](https://tailwindcss.com/):** Framework CSS utility-first para prototipagem relâmpago.
*   **[GSAP](https://gsap.com/):** O padrão da indústria para animações e manipulações visuais em JavaScript.
*   **[Lucide React](https://lucide.dev/):** Biblioteca vetorial moderna para iconografia limpa.

## 🤝 Contribuindo

Contribuições tornam a comunidade open source um lugar incrível de evolução técnica. Toda sugestão estrutural e relatórios de bugs são bem-vindos!

1. Faça o Fork do Projeto
2. Crie uma Branch para a sua nova feature (`git checkout -b feature/IncrivelNovaFeature`)
3. Adicione o seu código e faça os respectivos commits (`git commit -m 'Add: Uma Nova Funcionalidade Incrível'`)
4. Faça o push para a branch gerada localmente (`git push origin feature/IncrivelNovaFeature`)
5. Abra um Pull Request e descreva as alterações.

## 📝 Licença

Distribuído sob a licença MIT. Veja a raiz do arquivo `LICENSE` para maiores e mais detalhadas informações.

## ✉️ Autor / Contato

**BeiruthDEV** - [GitHub Profile](https://github.com/BeiruthDEV)

Link do Projeto Repositório: [https://github.com/BeiruthDEV/IronLog](https://github.com/BeiruthDEV/IronLog)
