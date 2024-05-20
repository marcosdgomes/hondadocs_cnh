---
sidebar_position: 1
title: Fluxos de Insucesso
author: Marcos Delano
category: Automação
description: Valida principais fluxos de OS com insucesso a partir da listagem da grid
created: 26/03/24
last_updated: 26/03/24
---

# Funcionalidade: Processo de insucesso de atendimento

Como um técnico do aplicativo
Eu quero registrar um insucesso de atendimento
Para que eu possa gerenciar corretamente as situações de cancelamento

## Cenário: Insucesso com permissão para atender fora do perímetro e com visitas anteriores
Dado que eu clique em "Cancelar atendimento"
E eu tenha permissão para atender fora do perímetro
E a Ordem de Serviço (OS) já teve uma ou mais visitas
Quando eu visualizar o pop-up de confirmação e clicar em "Sim"
E visualizar o Modal de cancelamento
E confirmar o prosseguimento no modal de confirmação
E selecionar o Motivo de cancelamento
E inserir Observações do atendimento
Então o botão "Avançar" deve ser liberado após a validação dos dados
Quando eu anexar a Evidência
E a OS requerer assinatura
E a assinatura estiver inserida
Então o botão "Cancelar Atendimento" deve ser liberado
Quando eu clicar em "Cancelar Atendimento"
E a conexão estiver estável
Então devo receber a mensagem "XXXXXXX: OK - DD/MM/AAAA HH:MM"
E ser redirecionado para a Home com o indicador de sincronização atualizado
Quando a conexão não estiver estável
Então devo receber a mensagem "É necessário estar online para sincronizar os dados"

## Cenário: Insucesso com permissão para atender fora do perímetro e sem visitas anteriores
[Este cenário segue a mesma estrutura do anterior, começando diretamente no ponto de seleção do Motivo de cancelamento.]

## Cenário: Insucesso sem permissão para atender fora do perímetro, mas dentro da distância permitida
[Este cenário segue a mesma estrutura dos anteriores, mas é aplicável quando o técnico não tem permissão para atender fora do perímetro e está dentro da distância permitida.]

## Cenário: Insucesso sem permissão e fora do perímetro permitido
Dado que eu clique em "Cancelar atendimento"
E eu não tenha permissão para atender fora do perímetro
E eu não esteja dentro da distância permitida
Quando eu visualizar o pop-up de confirmação e clicar em "Sim"
Então eu devo ver um pop-up indicando "Para continuar o atendimento esteja dentro de um perímetro adequado"
Quando eu clicar em "Ok"
Então eu devo ser redirecionado para a Home

## Cenário: Cancelamento de atendimento quando o técnico clica em "Não" no pop-up de confirmação
Dado que eu clique em "Cancelar atendimento"
Quando eu visualizar o pop-up de confirmação e clicar em "Não"
Então o pop-up deve ser fechado
E eu devo retornar para a Visualização expandida da OS
