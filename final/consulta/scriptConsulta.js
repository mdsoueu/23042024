
let pessoas = obtemPessoasCadastradas();
for (const pessoa of pessoas) {
    mostraPessoa(pessoa);
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
    <span style="padding-right: 2px;">CPF:${naTela.cpf}</span>
    <span style="padding-right: 2px;">CNPJ:${naTela.cnpj}</span>
    <span style="padding-right: 2px;">Genero: ${naTela.genero}</span> `;
    tabelaDeCadastro.append(paragrafo);

}