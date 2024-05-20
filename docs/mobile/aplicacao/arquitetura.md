---
sidebar_position: 1
title: teste title arquitetura mobile
---

#  Introdução

#### Automação utilizando Cypress 12 com BDD e Page Object Model

## Explicações sobre projeto e objetivos 
- Instalação, execução de testes no browser e CLI e geração de reports automatizados
- Report da execução dos testes está disponivel em *reports/cucumber-htmlreport.html/index.html*

## 🔧 Funcionalidades
- Automação de testes utilizando Cucumber e POM (Page Object Model)
- Plugins para consumo e geração de massa de dados (ExcelCommands, GeneranteCPForCNPJ e GenerateBankData)
- Geração de massa de dados aleatórios utilizando Faker.JS
- Geração de reports automatizados com Multiple Cucumber HTML Report
- Screenshots são salvos automaticamentes SE houver falha na execução dos testes em cypress>screenshots (na execução por CLI)
- Gravação automatica salva em cypress>videos

## 🔴 Pré-requisitos

1. Node JS 14.19.0(ou superior)

## 🚀 Instale o projeto

1. Clone o repositório via terminal
   ```sh
   git clone https://git.stefanini.io/ads/honda/banco/front/cnh_automacao_web.git
3. Instale as dependências e pacotes NPM
   ```sh
   npm install
   ```

## 💻 Execute o projeto via terminal:

### Execução via Browser
1. Execute o comando usando terminal na raíz do projeto
   ```sh 
   npx cypress open
   ```
 2. Após o carregamento, selecione a opção E2E Testing
 3. Selecione o navegador desejado e clique em "Start E2E Testing browser"
 4. Execute o teste .feature disponível
 
### Execução via CLI e geração de report na pasta reports>index.html
1. Execução de testes via CLI, gera JSON para report e exibe resultados (funciona em Headless Mode): 
    ```sh 
   npx cypress run  
   ```
   
2. Atualiza report HTML na pasta reports>index.html
   ```sh 
    node .\multiple-cucumber-html-reporter.js
    ```

## 📖 Plugins desenolvidos para o projeto
### ExcelCommands
Consumo de dados predefinidos em série (consome dado e inválida dado que já foi utilizado)
### GenerateCPForCNPJ
Geração de CPF e CNPJ considerados válidos de acordo com os cálculos de verificação
### GenerateBankData
Geração de dados bancários considerados válidos pelas mascaras de validação


## 📖 Dependências

Integrado com:
- [x] Cucumber preprocessor https://www.npmjs.com/package/cypress-cucumber-preprocessor
- [x] Eslint https://www.npmjs.com/package/eslint
- [x] Faker.js https://github.com/faker-js/faker (geração de dados aleatórios)
- [x] Multiple Cucumber HTML reporter https://www.npmjs.com/package/multiple-cucumber-html-reporter
    
 ## ✍️ Autor
 #### Marcos Delano - mdfreitas@stefanini.com 
 Sinta-se a vontade para em contato no Teams ou e-mail para dúvidas, melhorias e sugestões. 

