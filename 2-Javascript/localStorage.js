function iniciarDados(){
    if(!localStorage.getItem("banco")){     //Se não existir um "banco"
        const dados = [
            {id: 1, nome: "Guilherme Gomes", email: "guilherme@admin", senha: 123}
        ]

        localStorage.setItem("banco", JSON.stringify(dados))    //Transforma dados em tipo JSON
    }
}

//Converte o banco de JSON para Objeto js
function obterBanco(){
    return JSON.parse(localStorage.getItem("banco") || [])
}

//Converte o banco (Objeto js) para JSON
function salvarBanco(banco){
    localStorage.setItem("banco", JSON.stringify(banco))
}