---
sidebar_position: 2
title: Critérios DOR e DOD
authors: [delano]

---

# Visão Geral da Arquitetura da Automação

#### Automação utilizando Appium + Codecept + WebDriverIO (JS)

Bem-vindo à página de visão geral da automação. Aqui você encontrará uma breve descrição da arquitetura do projeto de automação e links para páginas mais detalhadas sobre diferentes aspectos da automação.

![roadmap](../../static/img/mp.png)

## Descrição do Projeto

Esta automação foi desenvolvida para testar a aplicação mobile MobyApp.
<!-- ![Gif da automação](../../static/img/automation1.gif) -->

## Estrutura do Projeto

A estrutura do projeto é organizada de acordo com as melhores práticas de automação, seguindo o padrão de design Page Object Model (POM) e a abordagem BDD (Behavior-Driven Development).

## Menu

- [Arquitetura da Automação](/docs/mobyan/automacao-web/arquitetura-automacao)
- [Configuração do Ambiente e Testes](/docs/mobyan/automacao-web/configuracao-ambiente-testes)
- [Guia de Desenvolvimento](/docs/mobyan/automacao-web/guia-desenvolvimento)
- [Integração com o GitLab CI/CD](/docs/mobyan/automacao-web/integracao-pipeline)
- [Perguntas Frequentes (FAQ)](/docs/mobyan/automacao-web/faq)
- [Plugins](/docs/mobyan/automacao-web/plugins)
- [Relatórios](/docs/mobyan/automacao-web/relatorios)


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
   git clone https://github.com/marcosdgomes/mobyan_docs
3. Instale as dependências e pacotes NPM
   ```sh
   npm install
   ```
# mobyan-mobile-automation
 Mobile Automation with Appium and Codecept to Mobyan App

## Pré-requisitos

- NodeJS
- Java JDK
- Android Studio com SDK
```
npm i -g appium-doctor
npm i -g appium
appium driver install uiautomator2
npm install
```
- Instação de pacotes adicionais via SDKManager
- 
- Necessário configurações das seguintes variaveis no Windows
Exemplo de novas variaveis:
```
ANDROID_HOME C:\Users\<USER>\AppData\Local\Android\Sdk
JAVA_HOME C:\Program Files\Java\jdk-21\
```
Exemplo de como devem ser inseridas na variavel já existente PATH:
```
PATH: 
%ANDROID_HOME%\tools\bin 
%ANDROID_HOME%\platform-tools 
%ANDROID_HOME%\emulator
```

## Executando Testes
### Iniciar Appium
- Necessário --allow-cors para evitar problemas de comunicação entre a API e --base-path=/wd/hub pois é o caminho onde o CodeceptJS escuta
```
appium --allow-cors --base-path=/wd/hub
```
### Listar Emuladores
``` 
emulator -list-avds
```
### Listar Devices fisicos
``` 
adb devices -l
``` 
### Iniciar Emulador 
``` 
emulator -avd Pixel_3a_API_34_extension_level_7_x86_64
emulator -avd fullhd_pixel
```
### Rodar todos os testes e teste isolado
```
npx codeceptjs run 
npx codeceptjs run --steps tests/login_test.js
npx codeceptjs run --steps tests/insucesso_test.js
npx codeceptjs run --steps tests/ordemServiço_test.js
npx codeceptjs run --steps device_test.js

```

### Appium Inspector
Download Appium Inspector: https://github.com/appium/appium-inspector

Json de configuração do Appium Inspector para funcionamento minimo (Necessário ter os requisitos anteriores atendidos para utilização do inspector):
```
{"appium:deviceName": "Pixel_3a_API_34_extension_level_7_x86_64","platformName": "Android","appium:automationName": "UiAutomator2","appium:app": "C:\\mobyan-it\\mobyan-mobile-automation\\app\\app-hml-NOs-2.5.apk","autoGrantPermissions": "true"}
```


### Comandos para steps
- Executa script clickGesture do uiAutomator com coordenadas necessárias (método I.tap do Codecept com coordenadas não funciona)
```
  await I.executeScript('mobile: clickGesture', {
        x: 578,
        y: 993
    });
```
- Scroll com Elemento
```
I.tap(874, 1099)
    await I.executeScript('mobile: scrollGesture', {
        elementId: '//android.widget.ScrollView', // ID do elemento ScrollView
        direction: 'down', // Direção da rolagem
        percent: 0.75, // Porcentagem da área de rolagem a ser percorrida
        speed: 1000 // Velocidade da rolagem em pixels por segundo
    });
    await I.wait(2); // 
```

- Scroll down
```
    await I.executeScript('mobile: scrollGesture', {
        left: 0, // coordenada x do canto superior esquerdo da área de rolagem
        top: 400, // coordenada y do canto superior esquerdo da área de rolagem
        width: 600, // largura da área de rolagem
        height: 1000, // altura da área de rolagem
        direction: 'down', // direção da rolagem
        percent: 0.75, // porcentagem da área de rolagem a ser percorrida
        speed: 1000 // velocidade da rolagem em pixels por segundo
    });
    ```
```


    await I.executeScript('mobile: swipeGesture', {
        direction: 'down',
        percent: 1, // Rola a tela inteira
        left: 100, // Coordenada X inicial
        top: 100, // Coordenada Y inicial
        width: 200, // Largura da área de rolagem
        height: 200 // Altura da área de rolagem
    });
```

- Outras dicas:
```

// Long click gesture
await driver.executeScript('mobile: longClickGesture', {
    elementId: 'element_id',
    duration: 1000 // milliseconds
});

// Double click gesture
await driver.executeScript('mobile: doubleClickGesture', {
    elementId: 'element_id'
});

// Click gesture
await driver.executeScript('mobile: clickGesture', {
    elementId: 'element_id',
    x: 100,
    y: 100
});

// Drag gesture
await driver.executeScript('mobile: dragGesture', {
    elementId: 'element_id',
    startX: 100,
    startY: 100,
    endX: 200,
    endY: 200,
    speed: 1000 // pixels per second
});

// Fling gesture
await driver.executeScript('mobile: flingGesture', {
    elementId: 'element_id',
    direction: 'down',
    speed: 1000 // pixels per second
});

// Pinch open gesture
await driver.executeScript('mobile: pinchOpenGesture', {
    elementId: 'element_id',
    percent: 0.75
});

// Pinch close gesture
await driver.executeScript('mobile: pinchCloseGesture', {
    elementId: 'element_id',
    percent: 0.75
});

// Swipe gesture
await driver.executeScript('mobile: swipeGesture', {
    elementId: 'element_id',
    direction: 'down',
    percent: 0.75,
    speed: 1000 // pixels per second
});

// Scroll gesture
await driver.executeScript('mobile: scrollGesture', {
    elementId: 'element_id',
    direction: 'down',
    percent: 0.75,
    speed: 1000 // pixels per second
});
```

## 💻 Execute o projeto via terminal:

### Execução via Browser
1. Execute o comando usando terminal na raíz do projeto
   ```sh 
   npx cypress open
   ```
 2. Após o carregamento, selecione a opção E2E Testing


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

