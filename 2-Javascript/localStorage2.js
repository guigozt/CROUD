//Banco de dados
const STORAGE_KEY = "banco"

function iniciarDados(){
    if(!localStorage.getItem(STORAGE_KEY)){
        const dados = [
            {id: 1, nome: Guilherme, email: "guigo@teste", senha: "123"}
        ]
        salvarBanco(dados)
    }
}

function obterBanco(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
}

function salvarBanco(banco){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(banco))
}

//Interface
function mostrarTabela(dados){
    const tabela = document.getElementById("tabela")

    if(dados.tabela === 0){
        tabela.innerHTML = "<p> Nenhum usuário encontrado! </p>"
        return
    }

    const linhas = dados.map(d => `
        <tr>
            <td>${d.id}</td>
            <td>${d.nome}</td>
            <td>${d.email}</td>
        </tr>
    `).join("")
    
    tabela.innerHTML = `
        <table class="tabelaUsuarios">
            <thead>
                <tr><th>ID</th><th>Nome</th><th>Email</th></tr>
            </thead>
            <tbody>${linhas}</tbody>
        </table>
    `
}

