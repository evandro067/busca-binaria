function salectionSortAscending (arr){
let n = arr.length;

for (let i = 0; i < n - 1; i++ ){

let (let j = i+ 1; j < n; j++ ){
if (arr[j] < arr [minIndex]){

    minIndex = j;
    }

}

if(minIndex !== i){
    let tamp = arr[minIndex];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}
 
   }
   return arr;

}

let arrayAsc = [64, 25, 12, 22, 11];
console.log("array original:", arrayAsc);
console.log("array ordenado em ordem crescente:", salectionSortAscending(arrayAsc));
