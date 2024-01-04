const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>CRM</p> <br> <p>Customer Relationship Management e se refere ao conjunto de práticas, estratégias de negócio e tecnologias focadas no relacionamento com o cliente.</p> <br> <p>Versão: 1.0 </p>',
                    '<p>Banco de dados</p> <br> <p>Um banco de dados é uma coleção organizada de informações normalmente sendo uma tabela com algumas informações, sempre sendo personalizados</p> <br> <p>Versão: personalizado </p>',
                    '<p>Api </p> <br> <p>são usadas para integrar novas aplicações com sistemas de software existentes</p> <br> <p>Versão: personalizados </p>',
                    '<p>Integrações </p> <br> <p>Caso você tenha um aplicativo ou banco de dados que precise ser integrado, podemos integrar</p> <br> <p>Versão: personalizados </p>',
                    '<p>DashBoard  </p> <br> <p>um painel de informações, indicadores e métricas importantes para o funcionamento de uma empresa. A ideia dessa ferramenta é apresentar os dados de forma visual e prática, facilitando a compreensão de todos os envolvidos.</p> <br> <p>Versão: alpha 0.1.7 </p>',
                    '<p>Dragon Adventure</p> <br> <p> É um jogo quer está sendo desenvolvido pela nossa equipe. </p> <br> <p>Versão: beta 0.6 </p>',
                    '<p>Word   </p> <br> <p>O Microsoft Word é um processador de texto produzido pela Microsoft </p> <br> <p>Nivel: ☆☆☆☆☆ </p>',
                    '<p>Excel    </p> <br> <p>O Microsoft Excel é um editor de planilhas </p> <br> <p>Nivel: ☆☆☆ </p>',
                    '<p>PowerPoint     </p> <br> <p>O Microsoft PowerPoint é um programa utilizado para criação/edição e exibição de apresentações gráficas </p> <br> <p>Nivel: ☆☆☆☆ </p>',
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );



