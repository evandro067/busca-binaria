function buscaBinaria(lista, elementoProcurao){
    let inicio = 0;
    let fim = lista.length - 1;
    while (inicio <= fim) {
         let meio = Math.floor((inicio + fim)/ 2); 

         if (lista[meio] === elementoProcurao){
             return meio;
         } else if (lista[meio] < elementoProcurao){
            inicio = meio + 1;
         } else {
            fim = meio - 1; 
         }
   
    }
    return - 1;
}

const listaOrdenada = [1, 3, 5, 7, 9, 11, 37, 74, 87, 90, 98, 99, 123];
const elemento = 87;
const resultado = buscaBinaria(listaOrdenada, elemento);
if (resultado !== -1){
    console.log(`Elemento encontrado na posição ${resultado+1}.`);
} else{
    console.log("Elemento não encontrado.");
}





