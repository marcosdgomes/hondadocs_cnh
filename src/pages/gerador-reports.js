import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';


function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
}

function GeradorReports() {
  useEffect(() => {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', () => {
      document.getElementById('generate-pdf').addEventListener('click', function() {
        const doc = new window.jspdf.jsPDF();

        // // Adicione os logos
        // doc.addImage(logo1, 'JPEG', 10, 10);
        // doc.addImage(logo2, 'JPEG', 10, 30);

        // Adicione os dados
        doc.text('Nome do Projeto/Sistema: ' + document.getElementById('project-name').value, 10, 50);
        doc.text('Id/Título da Task/Story: ' + document.getElementById('task-id').value, 10, 60);
        doc.text('Tipo: ' + document.getElementById('type').value, 10, 70);
        doc.text('Data da Execução: ' + document.getElementById('execution-date').value, 10, 80);
        doc.text('Ambiente do teste: ' + document.getElementById('test-environment').value, 10, 90);
        doc.text('Responsável: ' + document.getElementById('responsible').value, 10, 100);
        doc.text('Detalhes do Teste e Descrição do teste: ' + document.getElementById('test-details').value, 10, 110);
        doc.text('Resultados esperados/obtidos: ' + document.getElementById('expected-results').value, 10, 120);
        doc.text('Status do teste: ' + document.getElementById('test-status').value, 10, 130);
        doc.text('Evidências (Screenshots, Logs, etc.): ' + document.getElementById('evidences').value, 10, 140);

        // Salve o PDF
        var taskId = document.getElementById('task-id').value;
        doc.save(taskId + '- TestReport.pdf');
      });
    });
  }, []);
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
    title={`Gerador de Reports`}
    description="Portal de Documentações e Relatórios Mobyan Docs <head/>">
    <div>
    <Heading as="h4" className="hero__title" style={{textAlign: "center", fontSize: 32}}>
  {'Gerador de Evidencias'}
</Heading>
    <form>
          <label>
            Nome do Projeto/Sistema:
            <input type="text" id="project-name" />
          </label>
          <label>
            Id/Título da Task/Story:
            <input type="text" id="task-id" />
          </label>
          <label>
            Tipo:
            <input type="text" id="type" />
          </label>
          <label>
            Data da Execução:
            <input type="date" id="execution-date" />
          </label>
          <label>
            Ambiente do teste:
            <input type="text" id="test-environment" />
          </label>
          <label>
            Responsável:
            <input type="text" id="responsible" />
          </label>
          <label>
            Detalhes do Teste e Descrição do teste:
            <textarea id="test-details"></textarea>
          </label>
          <label>
            Resultados esperados/obtidos:
            <textarea id="expected-results"></textarea>
          </label>
          <label>
            Status do teste:
            <input type="text" id="test-status" />
          </label>
          <label>
            Evidências (Screenshots, Logs, etc.):
            <input type="file" id="evidences" accept="image/*" multiple></input>
          </label>
          <button type="button" id="generate-pdf">Gerar PDF</button>
        </form>
    </div>
    </Layout>
  );
}

export default GeradorReports;