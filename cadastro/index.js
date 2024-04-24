const nome = document.getElementById('caixaDeNome');
const dataNascimento = document.getElementById('dataNascimento');
const email = document.getElementById('caixaEmail');
const senha = document.getElementById('campoSenha');
const tabelaDeCadastro = document.getElementById('tabelaDeCadastro');

function salvarCadastro() {
    const individuo = {};
    individuo.nome = nome.value;
    individuo.dataNascimento = dataNascimento.value;
    individuo.email = email.value;
    individuo.senha = senha.value;

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