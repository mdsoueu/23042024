const nome = document.getElementById('caixaDeNome');
const dataNascimento = document.getElementById('dataNascimento');
const email = document.getElementById('caixaEmail');
const cpf = document.getElementById('campoCpf');
const cnpj = document.getElementById('campoCnpj');
const genero = document.getElementById('campoGenero');
const tabelaDeCadastro = document.getElementById('tabelaDeCadastro');

function salvarCadastro() {
    const individuo = {};
    individuo.nome = nome.value;
    individuo.dataNascimento = dataNascimento.value;
    individuo.email = email.value;
    individuo.cpf = cpf.value;
    individuo.cnpj = cnpj.value;
    individuo.genero = genero.value;

    const pessoasCadastradas = obtemPessoasCadastradas();
    pessoasCadastradas.push(individuo);
    localStorage.setItem('pessoasInformacoes', JSON.stringify(pessoasCadastradas));
    // mostraPessoa(individuo);
    return false;
}

function obtemPessoasCadastradas() {
    let localStoragePessoa = JSON.parse(localStorage.getItem("pessoasInformacoes"));
    if (!localStoragePessoa) {
        localStoragePessoa = [];
    }
    return localStoragePessoa;
}