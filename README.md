# SPA Personal Fitness

<!-- Badges -->
<p align="center">
  <!-- Exemplo de Badges - Substitua pelos seus -->
  <a href="URL_DO_SEU_BUILD_STATUS"><img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status"></a>
  <a href="URL_DA_SUA_LICENCA"><img src="https://img.shields.io/badge/license-MIT-blue" alt="License"></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</p>

Este projeto é uma Single Page Application (SPA) moderna, concebida como uma plataforma para profissionais autônomos de personal training divulgarem seus trabalhos e se conectarem com potenciais clientes. Construído com React, Vite e TypeScript, o objetivo é oferecer uma vitrine digital elegante, informativa e de fácil navegação, permitindo que cada personal trainer destaque sua experiência, serviços e resultados de forma profissional.

## ✨ Features

A plataforma é estruturada para que os personal trainers possam apresentar as seguintes seções em sua página pessoal:

*   **Sobre**: Uma seção dedicada a apresentar o profissional, sua história, filosofia de trabalho, certificações e paixão pelo fitness.
*   **Serviços**: Detalhamento dos serviços oferecidos, como consultoria online, treinamento presencial individual ou em grupo, planos nutricionais (se aplicável), avaliações físicas, etc.
*   **Resultados**: Uma galeria ou seção com depoimentos e exemplos de transformações e sucessos de clientes anteriores (antes e depois, conquistas de metas, etc.), sempre com o consentimento dos mesmos.
*   **Metodologia**: Explicação da abordagem de treinamento utilizada pelo profissional, seus métodos, diferenciais e como ele adapta os treinos às necessidades individuais de cada cliente.
*   **Contato**: Formulário de contato direto, links para redes sociais, WhatsApp, e outras formas de interação para que interessados possam facilmente iniciar uma conversa.
*   **Interface Responsiva**: Garantia de que a página do profissional seja visualizada corretamente em desktops, tablets e smartphones.

## 📚 Sumário

*   [Tecnologias Utilizadas](#-tecnologias-utilizadas)
*   [Estrutura do Projeto](#-estrutura-do-projeto)
*   [Pré-requisitos](#-pré-requisitos)
*   [Como Editar e Rodar Localmente](#-como-editar-e-rodar-localmente)
*   [Scripts Disponíveis](#-scripts-disponíveis)
*   [Contribuição](#-contribuição)
*   [Licença](#-licença)
*   [Contato](#-contato)

## 🚀 Tecnologias Utilizadas

Este projeto é construído com as seguintes tecnologias de ponta:

*   **Vite**: Build tool moderna e rápida para desenvolvimento frontend.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
*   **React**: Biblioteca JavaScript para construir interfaces de usuário.
*   **shadcn-ui**: Coleção de componentes de UI reutilizáveis e lindamente desenhados.
*   **Tailwind CSS**: Framework CSS utility-first para estilização rápida.

## 📂 Estrutura do Projeto

O projeto segue uma estrutura padrão para aplicações React com Vite e TypeScript:

-   **`public/`**: Contém assets estáticos que são servidos diretamente pelo servidor web (ex: `favicon.ico`).
-   **`src/`**: Contém todo o código-fonte da aplicação.
    -   **`components/`**: Componentes React reutilizáveis.
        -   **`ui/`**: Componentes gerados pelo `shadcn-ui`.
    -   **`hooks/`**: Custom React Hooks.
    -   **`lib/`**: Funções utilitárias e lógica de negócios.
        -   `utils.ts`: Funções utilitárias genéricas (ex: `cn` para Tailwind).
    -   **`pages/`**: Componentes que representam as diferentes páginas da aplicação.
    -   `App.tsx`: Componente raiz da aplicação, onde o roteamento e layout principal são definidos.
    -   `main.tsx`: Ponto de entrada da aplicação, onde o React é renderizado no DOM.
    -   `index.css`: Estilos globais e configurações do Tailwind CSS.
-   **`package.json`**: Define os metadados do projeto, dependências e scripts.
-   **`vite.config.ts`**: Arquivo de configuração do Vite.
-   **`tailwind.config.ts`**: Arquivo de configuração do Tailwind CSS.
-   **`tsconfig.json`**: Arquivo de configuração do TypeScript para o projeto.

## 📋 Pré-requisitos

Antes de começar, garanta que você tem o seguinte instalado:

*   [Node.js](https://nodejs.org/) (versão recomendada: LTS)
*   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js) ou [yarn](https://yarnpkg.com/)

## 🛠️ Como Editar e Rodar Localmente

**Use sua IDE preferida**

Se você quer trabalhar localmente usando sua própria IDE, pode clonar este repositório e enviar as alterações. As alterações enviadas também serão refletidas no Lovable.

O único requisito é ter Node.js & npm instalados - [instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Siga estes passos:

```sh
# 1. Clone o repositório (substitua <YOUR_GIT_URL> pela URL do seu repositório Git)
git clone <YOUR_GIT_URL>

# 2. Navegue até o diretório do projeto (substitua <YOUR_PROJECT_NAME> pelo nome do seu projeto)
cd <YOUR_PROJECT_NAME>

# 3. Instale as dependências necessárias
npm install
# ou, se você usa yarn:
# yarn install

# 4. Inicie o servidor de desenvolvimento
npm run dev
# ou, se você usa yarn:
# yarn dev
```

Após executar `npm run dev` (ou `yarn dev`), a aplicação estará disponível em `http://localhost:5173` (ou a porta configurada no Vite).

### ⚙️ Scripts Disponíveis

Além do script de desenvolvimento, os seguintes scripts estão disponíveis no `package.json`:

-   **`npm run dev`**: Inicia o servidor de desenvolvimento com Vite.
-   **`npm run build`**: Compila a aplicação para produção.
-   **`npm run lint`**: Executa o ESLint para verificar erros de linting no código.
-   **`npm run preview`**: Inicia um servidor local para pré-visualizar a build de produção.

**Outras formas de edição:**

*   **Editar um arquivo diretamente no GitHub**:
    *   Navegue até o(s) arquivo(s) desejado(s).
    *   Clique no botão "Edit" (ícone de lápis) no canto superior direito da visualização do arquivo.
    *   Faça suas alterações e comite-as.
*   **Usar GitHub Codespaces**:
    *   Navegue até a página principal do seu repositório.
    *   Clique no botão "Code" (botão verde) próximo ao canto superior direito.
    *   Selecione a aba "Codespaces".
    *   Clique em "New codespace" para iniciar um novo ambiente Codespace.
    *   Edite os arquivos diretamente no Codespace e comite e envie suas alterações quando terminar.


Atualmente, não há uma suíte de testes configurada. Considere adicionar testes unitários e de integração para garantir a qualidade e a manutenibilidade do código.

## 🤝 Contribuição

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer serão **muito apreciadas**.

Se você tem uma sugestão que tornaria este projeto melhor, por favor, faça um fork do repositório e crie um pull request. Você também pode simplesmente abrir uma issue com a tag "enhancement".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1.  Faça um Fork do Projeto
2.  Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Comite suas Mudanças (`git commit -m 'Add some AmazingFeature'`)
4.  Faça um Push para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra um Pull Request

Considere criar um arquivo `CONTRIBUTING.md` com diretrizes mais detalhadas para contribuição.

## 📜 Licença

Este projeto é distribuído sob a Licença MIT. Veja o arquivo `LICENSE.txt` (você precisará criar este arquivo) para mais informações.

<!-- Exemplo:
Distribuído sob a Licença MIT. Veja `LICENSE.txt` para mais informações.
Você pode escolher outra licença que se adeque melhor ao seu projeto. Visite https://choosealicense.com/ para ajuda.
-->

## 📞 Contato

DevPorto - https://devporto.dev - contato@devporto.dev

Link do Projeto: https://github.com/Devrpgs/personal-trainer.git <!-- Substitua pelo link real do seu repositório -->

---
