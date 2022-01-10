// Serie Fibonacci 0, 1, 1, 2, 3, 5, 8...

var entrada = parseInt(prompt("Ingrese número a calcular"));
var entrada = entrada + 1;
let vectorFibo = [0, 1];

function fibonacci(limit){    
    for( i=2; i<limit; i++ ){
        vectorFibo[i] = vectorFibo[i-1] + vectorFibo[i-2];
    }
    return vectorFibo;
} 

const fibSerie = fibonacci(entrada);
const ul = document.getElementById("show");

for (var j=0; j<entrada; j++){
    document.write(vectorFibo[j] + ", ");
}

/*
fibSerie.forEach(number => {
    const li = document.createElement("li");
    li.innerHTML = number;
    ul.append(li);    
});
*/