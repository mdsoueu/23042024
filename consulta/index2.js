// const tabela = document.getElementById('tabela');

let pessoas = obtemPessoasCadastradas();
for (const pessoa of pessoas) {
    mostraPessoa(pessoa);
    // naTela(pessoa);
}

function obtemPessoasCadastradas() {
    let localStoragePessoa = JSON.parse(localStorage.getItem("pessoasInformacoes"));
    if (!localStoragePessoa) {
        localStoragePessoa = [];
    }
    return localStoragePessoa;
}

function mostraPessoa(naTela) {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML += `
    <span style="padding-right: 2px;">Nome: ${naTela.nome}</span>
    <span style="padding-right: 2px;">Data:${naTela.dataNascimento}</span>
    <span style="padding-right: 2px;">Email:${naTela.email}</span>
    <span style="padding-right: 2px;">Senha: ${naTela.senha}</span> `;
    tabelaDeCadastro.append(paragrafo);

}
    

    // const tableBody = pessoas.map((pessoa) => {
    //     return `<tr>
    //     <th style = "padding: 2px 10px">${pessoa.nome}</th>
    //     <th style = "padding: 2px 10px">${pessoa.dataNascimento}</th>
    //     <th style = "padding: 2px 10px">${pessoa.email}</th>
    //     <th style = "padding: 2px 10px">${pessoa.senha}</th>
    //     </tr>`
    // }).join('')
    
    
    // const table = `<table>
    // <tr>
    // <th style = "padding: 10px">Nome</th>
    // <th style = "padding: 10px">Data</th>
    // <th style = "padding: 10px">Email</th>
    // <th>Senha</th>
    // </tr>
    // ${tableBody}
    // </table>`;
    
    // tabela.insertAdjacentHTML('beforeend', table);
    


function excluirCadastro(emailParaExcluir) {
    const pessoasCadastradas = obtemPessoasCadastradas();
    const indiceParaExcluir = pessoasCadastradas.findIndex(pessoa => pessoa.email === emailParaExcluir);
    if (indiceParaExcluir !== -1) {
        pessoasCadastradas.splice(indiceParaExcluir, 1); // Remove o item do array
        localStorage.setItem('pessoasInformacoes', JSON.stringify(pessoasCadastradas)); // Atualiza o armazenamento local
    } else {
        console.log("Usuário não encontrado para exclusão.");
    }
}