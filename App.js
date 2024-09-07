function pesquisar() { //Função responsável por pesquisar as emergências e exibir os resultados na página.

let section = document.getElementById("resultados-pesquisa") //Obtém a seção onde os resultados serão exibidos

let campoPesquisa = document.getElementById("campo-pesquisa").value

// Se campoPesquisa for uma string sem nada 
if (campoPesquisa == "") {
    section.innerHTML = "Nenhum resultado encontrado"
return
}

campoPesquisa = campoPesquisa.toLowerCase ()
 
let resultados = "";
let emergencia = "";
let assistencia = "";
let tags = "";

// Itera sobre cada dado da emergência e cria um bloco HTML

for (let dado of dados) { // Cria um elemento HTML para cada resultado
    emergencia=dado.emergencia.toLowerCase()
    assistencia=dado.assistencia.toLowerCase()
    tags=dado.tags.toLowerCase()
    // Se titulo includes campoPesquisa, indique as práticas de primeiros socorros
    if(emergencia.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `     
        <div class="item-resultado">
                      <h2>
                        <a href="#" target="_blank">${dado.emergencia}</a>
                      </h2>
                      <p class = "descrição-meta">${dado.assistencia}</p>
                      <a href=${dado.link} target="_blank">Mais Informações</a>
                      </div>`
    }
        
} 
if (!resultados) {
    resultados = "Nenhum resultado encontrado"
}
section.innerHTML = resultados // Atribui os resultados gerados à seção HTML
}