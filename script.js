function adicionarTarefa() {
    let tarefa = document.getElementById("tarefa").value;
    let dataInicio = document.getElementById("dataInicio").value
    let prazo = document.getElementById("prazo").value
    let prioridade = document.getElementById("prioridade").value
    let autor = document.getElementById("autor").value
    let descricao = document.getElementById("descricao").value

    document.getElementById("aFazer-resultado").innerHTML += `
        <tr>
            <td> ` + tarefa + ` </td>
            <td> ` + prazo + ` </td>
            <td> ` + descricao + ` </td>
            <td> ` + autor + ` </td>
        </tr>
    `;

    document.getElementById("emAndamento-resultado").innerHTML += `
        <tr>
            <td> ` + tarefa + ` </td>
            <td> ` + prazo + ` </td>
            <td> ` + descricao + ` </td>
            <td> ` + autor + ` </td>
        </tr>
    `;

    document.getElementById("concluido-resultado").innerHTML += `
        <tr>
            <td> ` + tarefa + ` </td>
            <td> ` + prazo + ` </td>
            <td> ` + descricao + ` </td>
            <td> ` + autor + ` </td>
        </tr>
    `
}