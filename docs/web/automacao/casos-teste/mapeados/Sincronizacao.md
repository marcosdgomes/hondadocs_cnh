---
sidebar_position: 2
title: Sincronização
author: Marcos Delano
category: Automação
description: Valida Sincronização
created: 26/03/24
last_updated: 26/03/24
---

# Funcionalidade: Sincronização de dados

Como um usuário do aplicativo
Eu quero sincronizar as Ordens de Serviço com o servidor
Para garantir que os dados estão atualizados

## Cenário: Tentar sincronizar sem Ordens de Serviço pendentes
Dado que eu abra o menu lateral
Quando eu clicar em "Sincronizar"
E não houver nenhuma Ordem de Serviço para sincronizar
Então o botão não deve realizar nenhuma ação

## Cenário: Sincronizar com sucesso uma ou mais Ordens de Serviço
Dado que eu abra o menu lateral
E haja 1 ou mais Ordens de Serviço para sincronizar
E a conexão com a internet esteja estável
Quando eu clicar em "Sincronizar"
Então o app deve tentar enviar os dados ao servidor
E eu devo ver uma mensagem de confirmação com o formato "XXXXXXX: OK - DD/MM/AAAA HH:MM"

## Cenário: Erro do servidor ao sincronizar Ordens de Serviço
Dado que eu abra o menu lateral
E haja 1 ou mais Ordens de Serviço para sincronizar
E a conexão com a internet esteja estável
Quando eu clicar em "Sincronizar"
E ocorrer um erro no servidor durante a sincronização
Então eu devo ver uma mensagem de erro com o formato "XXXXXXX: Número do erro - DD/MM/AAAA HH:MM"

## Cenário: Tentativa de sincronizar com conexão instável
Dado que eu abra o menu lateral
E haja 1 ou mais Ordens de Serviço para sincronizar
E a conexão com a internet esteja instável
Quando eu clicar em "Sincronizar"
Então eu devo ver uma mensagem de erro "É necessário estar online para sincronizar os dados"
E eu devo clicar em fechar
