const produtos = [
{
    nome:"Detergente",
    categoria:"Limpeza",
    quantidade:"50",
    preco:"3.50"
},

{
    nome:"Desinfetante",
    categoria:"Limpeza",
    quantidade:"35",
    preco:"8.90",
},

{
    nome:"Esponja",
    categoria:"Acessório",
    quantidade:"70",
    preco:"2.50",
},

{
    nome:"Vassoura",
    categoria:"Utensílio",
    quantidade:"18",
    preco:"22",
}
];

const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }