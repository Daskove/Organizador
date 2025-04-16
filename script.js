function aFazer() {
    let tarefa = document.getElementById("tarefa").value;
    let dataInicio = document.getElementById("dataInicio").value
    let prazo = document.getElementById("prazo").value
    let prioridade = document.getElementById("prioridade").value
    let autor = document.getElementById("autor").value
    let descricao = document.getElementById("descricao").value

    let vetor = [
            {tarefa,
            prazo,
            descricao,
            autor}
        ]

    document.getElementById("aFazer-resultado").innerHTML += 
    `
        <tr>
            <td> ` + tarefa + ` </td>
            <td> ` + prazo + ` </td>
            <td> ` + descricao + ` </td>
            <td> ` + autor + ` </td>
        </tr>
    `;
document.getElementById('botaoRelatorio').  addEventListener('click', ()=> {
    let _gerarCsv = function() {
        let csv = 'tarefa, prazo, descrição, autor\n';

        vetor.forEach(function(row) {
            csv += row.tarefa;
            csv += row.prazo;
            csv += row.descricao;
            csv += row.autor;
            csv += '\n';
        })
        let hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'produtos.csv';
        hiddenElement.click();
    };
    _gerarCsv();
})
    
}
function emAndamento() {
    let tarefa = document.getElementById("tarefa").value;
    let dataInicio = document.getElementById("dataInicio").value
    let prazo = document.getElementById("prazo").value
    let prioridade = document.getElementById("prioridade").value
    let autor = document.getElementById("autor").value
    let descricao = document.getElementById("descricao").value

    document.getElementById("emAndamento-resultado").innerHTML += `
        <tr>
            <td> ` + tarefa + ` </td>
            <td> ` + prazo + ` </td>
            <td> ` + descricao + ` </td>
            <td> ` + autor + ` </td>
        </tr>
    `;
}
function concluido() {
    let tarefa = document.getElementById("tarefa").value;
    let dataInicio = document.getElementById("dataInicio").value
    let prazo = document.getElementById("prazo").value
    let prioridade = document.getElementById("prioridade").value
    let autor = document.getElementById("autor").value
    let descricao = document.getElementById("descricao").value

    document.getElementById("concluido-resultado").innerHTML += `
        <tr>
            <td> ` + tarefa + ` </td>
            <td> ` + prazo + ` </td>
            <td> ` + descricao + ` </td>
            <td> ` + autor + ` </td>
        </tr>
    `
}