---
title: Relatórios
description: Reports de automações
authors: delano
---
# Relatório de Execução de Testes

## Resumo Executivo
- **Funcionalidade:** Teste integrado do farol de OSs
- **Arquivo de Feature:** farol_estruturantes.feature
- **Plataforma de Teste:** Web (Cypress e Cucumber)
- **Principais ferramentas de Teste da execução:** Cypress, Cucumber
- **Integração de IA:** Não especificada

## Resultados dos Testes
- **Total de Cenários:** 11
- **Cenários Bem-Sucedidos:** 8
- **Cenários Falhos:** 3
- **Cobertura de Teste:** 72.73%

## Detalhamento dos Erros
- **Encaminhamento bem-sucedido de uma Ordem de Serviço (OS)**: Falha de asserção na confirmação de sucesso, esperava-se um código 200, mas foi recebido um 400.
- **Encaminhamento massivo bem-sucedido de Ordens de Serviço**: Falha similar ao cenário anterior, com erro de asserção esperando código 200, mas recebido 400.
- **Pesquisa bem-sucedida por chamado no Farol por OS**: Erro de tipo ao tentar ler propriedades de um objeto indefinido.
- **Filtragem por status válido nos cards de totais**: Erro no Cypress ao misturar código assíncrono com síncrono.
- **Filtragem por status inválido nos cards de totais**: Falha de asserção esperando `null`, mas recebido `false`.
- **Filtragem avançada por múltiplos critérios**: Falha de asserção esperando `true`, mas recebido `false`.

## Análise de Desempenho
- **Tempo Médio por Cenário:** Informação não disponível
- **Cenário Mais Demorado:** Pesquisa bem-sucedida por referência no Farol por OS (39,38 segundos)
- **Desempenho da Aplicação:** Informação não disponível

## Ações Recomendadas
- **Revisão de Códigos de Status**: Verificar a implementação dos endpoints para garantir que os códigos de status estejam corretos.
- **Revisão de Tratamento de Erros**: Assegurar que o tratamento de erros esteja correto para evitar falhas inesperadas.
- **Revisão de Sincronização no Cypress**: Corrigir problemas de sincronização no teste de filtragem por status válido.

## Outras análises e insights
- A análise dos erros sugere uma revisão na consistência das respostas da API, especialmente em termos de códigos de status esperados versus recebidos.

## Análise de Tendências 
- A tendência indica problemas recorrentes com asserções de status e tratamento de erros, que precisam de atenção para melhorar a estabilidade dos testes.

## Próximos Passos
- **Retestes:** Retestar cenários falhos após correções.
- **Testes de Regressão:** Planejar uma bateria de testes de regressão após as correções.
- **Testes Futuros:** Continuar expandindo os casos de testes para cobrir novos cenários e funcionalidades.

## Observações Adicionais
- Ambiente Stage/Estruturantes
- Ainda existem fluxos com problemas existentes

## Links úteis
- **Cypress Cloud Dashboard:** [Cypress Cloud Dashboard](https://cloud.cypress.io/invitation/f96f7c73-eca2-4496-8dac-cd68695eef82)