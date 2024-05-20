---
title: Relatórios
description: Reports de automações
authors: delano
---
# Relatório de Execução de Testes

## Resumo Executivo
- **Funcionalidade:** Encaminhamento e gestão de Ordens de Serviço no Farol
- **Arquivo de Feature:** Farol.feature
- **Plataforma de Teste:** web
- **Principais ferramentas de Teste da execução:** Cypress e Cucumber
- **Integração de IA:** Não especificada

## Resultados dos Testes
- **Total de Cenários:** 19
- **Cenários Bem-Sucedidos:** 17
- **Cenários Falhos:** 2
- **Cobertura de Teste:** 89.47%

## Detalhamento dos Erros
- **Erro no Encaminhamento massivo por cliente bem-sucedido de Ordens de Serviço:** 
  - **Mensagem de Erro:** AssertionError: A requisição PUT deve retornar status 200: expected 400 to equal 200
  - **Localização:** cypress/e2e/step_definitions/farol.js:139:48
- **Erro na Tentativa de encaminhamento de uma OS com status inadequado:**
  - **Mensagem de Erro:** AssertionError: Timed out retrying after 25000ms: Expected to find element: `input[type="checkbox"]`, but never found it.
  - **Localização:** cypress/e2e/pages/models.js:111:53

## Análise de Desempenho
- **Tempo Médio por Cenário:** Varia entre 11 segundos e 13 segundos
- **Cenário Mais Demorado:** Encaminhamento bem-sucedido de uma Ordem de Serviço (OS)
- **Desempenho da Aplicação:** Estável em termos de desempenho com exceção dos erros mencionados.

## Ações Recomendadas
- **Revisão dos Status HTTP:** Verificar o código de status retornado na requisição PUT para garantir que seja 200.
- **Verificação de Elementos na Página:** Assegurar que os elementos necessários estão sendo renderizados corretamente antes de tentar interagir com eles.

## Outras análises e insights
- **Padrões de Erro:** Os erros estão relacionados principalmente a falhas de asserção e elementos não encontrados, sugerindo problemas de sincronização ou mudanças na UI que não foram refletidas nos testes.

## Análise de Tendências 
- **Melhoria Contínua:** A tendência indica a necessidade de ajustes contínuos nos scripts de teste à medida que a aplicação evolui.

## Próximos Passos
- **Retestes:** Necessário para os cenários falhos após correções.
- **Testes de Regressão:** Recomendado para garantir que novas mudanças não afetem funcionalidades existentes.
- **Testes Futuros:** Incluir mais cenários de borda e testes de stress.

## Observações Adicionais
- Ambiente Stage/Estruturantes
- Ainda existem fluxos com problemas existentes

## Links úteis
- **Cypress Cloud Dashboard:** [Acessar Dashboard](https://cloud.cypress.io/invitation/f96f7c73-eca2-4496-8dac-cd68695eef82)