---
sidebar_position: 2
title: Arquitetura de Automação
author: Marcos Delano
---

A estrutura do projeto de automação segue uma organização lógica e modular para facilitar o desenvolvimento e a manutenção dos testes automatizados. \
No nosso cenário, optamos por seguir o padrão POM (Page Object Model) e BDD (Behavior Driven Development).

## Estrutura de Pastas

<span dir="">:file_folder: projectName</span>

* :file_folder: e2e
  * :file_folder: feature
    * :page_facing_up: examples.feature
  * :file_folder: pages
    * :page_facing_up: elements.js
    * :page_facing_up: models.js
  * :file_folder: step_definitions
    * :page_facing_up: step_example.js
* :file_folder: fixtures
* :file_folder: plugins
  * :page_facing_up: excelCommands.js
  * :page_facing_up: generateCPForCNPJ.js
  * :page_facing_up: generateBankData.js
* :file_folder: reports
  * :page_facing_up: index.html
* :file_folder: screenshots
* :file_folder: support
* :file_folder: videos
* :page_facing_up: .gitlab-ci.yml
* :page_facing_up: codecept.conf.js
* :page_facing_up: multiple-cucumber-html-reporter.js

Aqui está uma breve explicação de cada pasta:

- `fixtures`: Armazena os arquivos de dados de teste usados nos cenários de teste.
- `e2e`: Contém os principais items das etapas de testes
  - feature: Contém os arquivos de especificações de teste escritos em formato Gherkin usando o Cucumber.
  - pages: Seguindo POM (page object model) essa é a pasta onde se encontram funções e elementos reutilizáveis onde podem ser aproveitados em qualquer etapa do teste.
  - step_definitions: É onde são armazenados os arquivos que contêm as implementações dos passos dos cenários de teste escritos em Gherkin da pasta feature. Esses arquivos são responsáveis por mapear os passos descritos nos cenários para a implementação dos testes automatizados.
- `plugins`: Local para armazenar os plugins personalizados e extensões adicionais usados durante a execução dos testes (generateCPForCNPJ, GenerateBankData e excelCommands).
- `helpers`: Contém arquivos de suporte, como comandos personalizados e configurações específicas do Codecept.
- `reports`: Armazena os relatórios de teste gerados durante a execução dos testes automatizados.
- `screenshots`: Contém capturas de tela capturadas durante a execução dos testes.
- `videos`: Armazena gravações de vídeo das execuções dos testes.

Essa estrutura de pastas permite uma separação clara de diferentes tipos de testes e recursos relacionados, facilitando a navegação e a manutenção do projeto de automação.