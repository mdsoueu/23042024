const nome = document.getElementById('caixaDeNome');
const dataNascimento = document.getElementById('dataNascimento');
const email = document.getElementById('caixaEmail');
const senha = document.getElementById('campoSenha');
const tabelaDeCadastro = document.getElementById('tabelaDeCadastro');

// localStorage.setItem("pessoa",JSON.stringify());

const tela = JSON.parse(localStorage.getItem("pessoa"));
// const teste = document.createElement('p');
// teste.innerHTML += `<span>${tela.nome}</span><span>${tela.dataNascimento}</span>`;
// // atribui na tela
// tabelaDeCadastro.append(teste);
mostraPessoa();

function cadastro() {
    console.log(nome.value);
    console.log(dataNascimento.value);
    console.log(email.value);
    console.log(senha.value);

    const pessoa = {};
    pessoa.nome = nome.value;
    pessoa.idade = dataNascimento.value;
    pessoa.email = email.value;
    pessoa.senha = senha.value;

    let cadastradas = JSON.parse(localStorage.getItem("pessoa"));
    if(!cadastradas){
        cadastradas=[];
    }
    pessoa.push(pessoa);
    // localStorage.setItem('pessoa', pessoa);
    localStorage.setItem('pessoa', JSON.stringify(cadastradas));

    // const teste = document.createElement('strong');
    // teste.innerHTML += '<span>${nome.value}</span><span>${dataNascimento.value}</span>';
    // atribui na tela
    // tabelaDeCadastro.append(teste); 
    // console.log(teste);

    // nome - backgroud verde, color vermelho
    // tabelaDeCadastro.innerHTML += `<p style="display: inline-block; padding-right: 2px;"><span style="background-color: green; color: red;">Nome: ${nome.value}</span></p>`;

    // // data - backgroud preto, color branco
    // tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; padding-right: 2px;"><span style=" background-color: black; color: white;">Data: ${dataNascimento.value}</span></p>`;

    // // email - backgroud amarelo, color roxo
    // tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; padding-right: 2px;"><span style=" background-color: yellow; color: purple;">Email: ${email.value}</span></p>`;

    // // senha - backgroud cinza, color azul
    // tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; padding-right: 2px;"><span style=" background-color: gray; color: blue;">Senha: ${senha.value}</span></p><br>`;
    console.log("sucesso");

    mostraPessoa(pessoa);
    return false;
}


function mostraPessoa(manzana) {

    const teste = document.createElement('p');
    teste.innerHTML += `<span>${manzana.nome}</span><span>${manzana.dataNascimento}</span>`;
    // atribui na tela
    tabelaDeCadastro.append(teste);
}