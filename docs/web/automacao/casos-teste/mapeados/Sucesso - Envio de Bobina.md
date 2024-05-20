---
sidebar_position: 5
title: Sucesso - Envio de Bobina
author: Marcos Delano
category: Automação
description: Valida fluxos de Envio de Bobina a partir de OS na grid de listagem
created: 26/03/24
last_updated: 26/03/24
---

# Funcionalidade: Atendimento de Serviço de Envio de Bobina Sucesso

Como um técnico do aplicativo
Eu quero concluir um atendimento de envio de bobina
Para que eu possa atualizar o status do serviço e garantir o registro das informações

## Cenário: Sucesso no atendimento dentro ou fora do perímetro com permissão
Dado que eu clique em "Iniciar atendimento"
E eu tenha permissão para atender fora do perímetro
Quando eu visualizar o pop-up mostrando a distância até o local do atendimento
E clicar em "Sim" para confirmar o prosseguimento
Então eu devo inserir o "Nome do recebedor"
E o "Documento do recebedor"
E o "Email do recebedor" se aplicável
E marcar os "Equipamentos instalados" que são opcionais
E marcar os "Equipamentos removidos" que são opcionais
E anexar evidências (fotos)
Quando as evidências forem inseridas
E a OS requerer assinatura
E a assinatura for inserida
Então o botão "Finalizar Atendimento" deve ser liberado
Quando eu clicar em "Finalizar Atendimento"
E a conexão estiver instável
Então eu devo receber a mensagem "Atendimento da Ordem de Serviço gravado com sucesso"
E ser redirecionado para a Home com o indicador de sincronização atualizado
Quando a conexão estiver estável
Então o app deve tentar enviar os dados do atendimento para o servidor
E retornar uma mensagem de sucesso ou erro conforme o resultado da sincronização

## Cenário: Sucesso no atendimento dentro do perímetro sem permissão
Dado que eu clique em "Iniciar atendimento"
E eu não tenha permissão para atender fora do perímetro
E eu esteja dentro da distância permitida
Então eu devo seguir os mesmos passos do cenário anterior para concluir o atendimento com sucesso

## Cenário: Tentativa de atendimento fora do perímetro sem permissão
Dado que eu clique em "Iniciar atendimento"
E eu não tenha permissão para atender fora do perímetro
E eu não esteja dentro da distância permitida
Quando eu visualizar o pop-up mostrando a distância até o local do atendimento
E o pop-up indicar "Para continuar o atendimento esteja dentro de um perímetro adequado"
Quando eu clicar em "Ok"
Então eu devo ser redirecionado para a Home

## Cenário: Sucesso no atendimento sem necessidade de assinatura
[Este cenário segue a mesma estrutura do primeiro cenário, mas é aplicável quando a OS não requer assinatura.]

Lembre-se de substituir "XXXXXXX: Número do erro - DD/MM/AAAA HH:MM" e "XXXXXXX: OK - DD/MM/AAAA HH:MM" com mensagens de erro ou sucesso reais, conforme apropriado para a aplicação.
