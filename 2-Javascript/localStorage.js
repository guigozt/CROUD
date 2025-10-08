function iniciarDados(){
    if(!localStorage.getItem("banco")){
        const dados = [
            {id: 1, nome: "Guilherme", email: "guilherme@admin", senha: 123}
        ]

        localStorage.setItem("banco", JSON.stringify(dados)) //Armazena o objeto JS (dados) em JSON (banco)
    }
}

function obterBanco(){
    return JSON.parse(localStorage.getItem("banco") || "[]") //Retorna o "banco" convertido para JS
}

function salvarBanco(banco){
    localStorage.setItem("banco", JSON.stringify(banco))
}

function mostrarTabela(dados){
    const tabela = document.getElementById("tabela")

    if(dados.tabela == 0){
        tabela.innerHTML = "<p> Nenhum usuário encontrado! </p>"
        return
    }

    let html = "<table border='1'>"
    //Colunas
    html += `<tr>
                <th>ID</th> <th>NOME</th> <th>EMAIL</th>
            `

    dados.forEach(d => {
        html += `<tr>
                    <td>${d.id}</td>
                    <td>${d.nome}</td>
                    <td>${d.email}</td>
                </tr>`
    })

    html += "</table>"
    tabela.innerHTML = html
}

function cadastrar(){
    const nome = prompt("[Nome] do Usuário: ")
    const email = prompt("[Email] do Usuário: ")
    const senha = prompt("[Senha] do Usuário: ")

    const banco = obterBanco()

    const novoId = banco.length ? banco[banco.length - 1].id+1 : 1

    const novoUsuario = {
        id: novoId,
        nome: nome,
        email: email,
        senha: senha
    }

    banco.push(novoUsuario)
    salvarBanco(banco)
    alert("Usuário cadastrado com sucesso!")
    mostrarTabela(banco)    
}

function apagar(){
    const id = parseInt(prompt("ID do usuário que deseja excluir: "))

    if(isNaN(id)){
        alert("ID inválido!")
        return
    }

    let banco = obterBanco()

    const tamanhoAntes = banco.length

    banco = banco.filter(user => {
        return user.id !== id //Filtra apenas os usuarios que tenham id diferente do escolhido e os salva em um array
    })

    if(banco.length == tamanhoAntes){
        alert("Usuário não encontrado!")
        return
    }

    salvarBanco(banco)
    alert("Usuário excluido com sucesso!")
    mostrarTabela(banco)
}

function atualizar(){
    const id = parseInt(prompt("ID do usuáro que seja atualizar: "))

    if(isNaN(id)){
        alert("ID inválido!")
        return
    }

    let banco = obterBanco()
    const index = banco.findIndex(user => user.id === id)

    if(index !== -1){
        banco[index].nome = prompt("Novo nome: ", banco[index].nome)
        banco[index].email = prompt("Novo email: ", banco[index].email)

        salvarBanco(banco)
        alert("Usuário atualizado com sucesso!")
        mostrarTabela(banco)

    }else{
        alert("Usuário não encontrado!")
    }  
}

function buscar(){
    const termo = document.getElementById("pesquisar").value.toLowerCase()
    const banco = obterBanco()

    if(termo.trim === ""){
        mostrarTabela(banco)
        return
    }

    const resultado = banco.filter(item => 
                                    item.nome.toLowerCase().includes(termo) ||
                                    item.email.toLowerCase().includes(termo)
                                    )

    mostrarTabela(resultado)
}

iniciarDados()
mostrarTabela(obterBanco())