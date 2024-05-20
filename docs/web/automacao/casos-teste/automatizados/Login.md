---
sidebar_position: 1
title: Tela de Autenticação/Login Mobile
---

# Funcionalidade: Login no aplicativo

Como um usuário do aplicativo
Eu quero fazer login na minha conta
Para que eu possa acessar as funcionalidades do app

## Cenário: Login automático com a opção "Lembrar senha" marcada
Dado que eu tenha a opção "Lembrar senha" ativada no app
E que eu abra o app
Então o campo CPF deve estar preenchido automaticamente
Quando eu insiro minha senha
E clico no botão "Entrar"
Então a home do app deve ser carregada

## Cenário: Login manual sem a opção "Lembrar senha"
Dado que eu não tenha a opção "Lembrar senha" ativada no app
E que eu abra o app
Quando eu insiro meu CPF
E insiro minha senha
E clico no botão "Entrar"
Então a home do app deve ser carregada

## Cenário: Tentativa de login com credenciais inválidas
Dado que eu abra o app
Quando eu insiro um CPF inválido ou uma senha incorreta
E clico no botão "Entrar"
Então uma mensagem de erro com o texto "Cpf ou senha incorreta" deve ser exibida
