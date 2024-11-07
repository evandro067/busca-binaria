//const { edGalho, edFolha } = require ('./arrays');
const edFolha = [
    {
    titulo: "PHP",
    preco: 15
    },
    {
      titulo: "JavaScript",
      preco: 25
    },
    {
      titulo: "Java",
      preco: 30
    },
    {
      titulo: "Go",
      preco: 45
    },
    {
      titulo: "Elixir",
      preco: 50
    }
  ]
  
  const edGalho = [
    {
      titulo: "Python",
      preco: 20
    },
    {
      titulo: "Rust",
      preco: 22
    },
    {
      titulo: "Ruby",
      preco: 28
    },
    {
      titulo: "C#",
      preco: 33
    },
    {
      titulo: "C++",
      preco: 35
    },
    {
      titulo: "Scala",
      preco: 40
    }
  ]



function JuntaLista (Lista1, Lista2){

let listaFinal = [];

let posicaoAtualLista1 = 0;

let posicaoAtualLista2 = 0;

let atual = 0;

while (posicaoAtualLista1 < Lista1.length && posicaoAtualLista2 < Lista2.length) {

    let produtoAtualLista1 = Lista1[posicaoAtualLista1];
   
    let produtoAtualLista2 = Lista2[posicaoAtualLista2];

if (posicaoAtualLista1.preco < posicaoAtualLista2.preco){

    posicaoAtualLista1++;

}else{
    listaFinal [atual] = produtoAtualLista2;  

    posicaoAtualLista2++;

    atual++;

    while (posicaoAtualLista1 < Lista1.length){

        listaFinal[atual] = Lista1[posicaoAtualLista1];

        posicaoAtualLista1++;
        

        atual++

        while (posicaoAtualLista2 < Lista2.length);

        listaFinal[atual] = Lista2 [posicaoAtualLista2]; 

        posicaoAtualLista2++;

        atual++;

    }

        return listaFinal;

}
}
}
console.log (JuntaLista(edGalho, edFolha));
