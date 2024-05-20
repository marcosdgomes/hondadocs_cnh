---
sidebar_position: 3
title: Guia de Desenvolvimento
---

### **Fluxo de Trabalho Git Flow para Automação com Cypress:**

 1. **Feature Branch:**
    * Cada novo trabalho começa com a criação de uma branch de feature a partir da branch **`develop`**. Por exemplo, **`feature/nome-da-feature`**.
 2. **Desenvolvimento de Casos de Teste:**
    * Os QA's podem escrever casos de teste usando o Cypress na branch de feature correspondente.
 3. **Commit e Push:**
    * Os QA's devem fazer commits incrementais à medida que desenvolvem casos de teste e enviar-los para o repositório remoto.
 4. **Merge Request:**
    * Quando a implementação estiver concluída, um Merge Request deve ser criado para a branch **`develop`**.
 5. **Code Review:**
    * Os membros da equipe ou líderes técnicos revisam o Merge Request para garantir a qualidade do código e a conformidade com as práticas de automação estabelecidas.
 6. **Testes Automatizados:**
    * Após o code review, os testes automatizados devem ser executados na branch de desenvolvimento para garantir que a integração e as funcionalidades não tenham sido comprometidas.
 7. **Merge na Branch de Desenvolvimento:**
    * Após a aprovação e a conclusão bem-sucedida dos testes, o Merge Request é mesclado com a branch **`develop`**.
 8. **Release Branch:**
    * Periodicamente, uma nova branch de release é criada a partir de **`develop`** para iniciar a preparação para uma nova versão.
 9. **Testes de Release:**
    * Testes adicionais, incluindo testes de regressão, devem ser executados na branch de release.
10. **Merge na Master:**
    * Quando a release estiver pronta, a branch de release é mesclada na **`main`**.

## **Desenvolvimento da Base de Automação**

Para garantir uma base sólida e facilmente adaptável para a automação em diferentes equipes, seguimos as práticas e estratégias a seguir:

### **Page Object Model (POM)**

Implementamos o modelo Page Object para melhorar a manutenção e a escalabilidade dos testes automatizados. O POM nos permite separar os elementos da interface do usuário do código de teste, facilitando a atualização dos testes quando houver mudanças na interface do usuário.

### **Estratégias de Reutilização de Código**

Adotamos estratégias eficazes de reutilização de código para maximizar a eficiência e reduzir a redundância no processo de automação. Isso inclui a criação de funções e métodos reutilizáveis que podem ser compartilhados e utilizados em diferentes testes, garantindo a consistência e a modularidade do código.

### **Padrões de Nomenclatura**

Padronizamos a nomenclatura dos elementos de teste, funções e variáveis de modo a promover a clareza e a compreensão em toda a estrutura de automação. Ao adotar padrões consistentes de nomenclatura, facilitamos a colaboração entre as equipes e garantimos uma compreensão unificada do código de automação.

## **Criação de Guias e Documentação**

Para orientar as equipes no uso eficaz da estrutura de automação, elaboramos guias detalhados e documentação abrangente, que incluem as práticas recomendadas e os procedimentos para testes. Os guias e a documentação abrangem o seguinte:

### **Padrões de Codificação**

Detalhamos os padrões de codificação a serem seguidos ao criar casos de teste automatizados. Isso inclui diretrizes sobre a estrutura do código, a organização dos testes, a escrita de asserções e outras práticas recomendadas para garantir a clareza e a manutenibilidade do código de automação.

### **Procedimentos para Testes**

Detalhamos os procedimentos a serem seguidos ao criar, executar e analisar os resultados dos testes automatizados. Isso inclui orientações passo a passo sobre a configuração do ambiente de teste, a execução de testes, a análise de falhas e a geração de relatórios de testes abrangentes.

### Snippets Vscode

#### Snippet Cucumber (bdd)

* Digite `bdd + tab` e a definição de step definitions, deve ser exibida.
* Para utilizar, deve ser inserido na raiz do projeto o código no arquivo `.vscode/cypresscucumber_snippet.code-snippets` (se não existir a pasta .vscode, crie):
* Insira o código abaixo no arquivo:

`{ "Custom Cypress/Cucumber Snippet": { "prefix": "bdd", "body": [ "Then(\"$1\", () => {", " cy.location('pathname').should('eq', '$2');", "});" ], "description": "Snippet of cucumber cypress args" } }`