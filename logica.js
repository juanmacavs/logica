var numeros = [0,2,8,3,4,56,48,23,22,34,99,54,52,14,25,20,28,31,101,1501]
var contador = 0;
var acumulador = 0;
numeros.forEach(e=>{
    if (e>0){
        contador+=1;
        acumulador+=e;
            document.write(e,"-");
    }
})

document.write("<br>")
document.write("Acumulador: ", acumulador, " - ", "Contador: ", contador, " - ", "Promedio: ", acumulador/contador);
document.write("<br>")

var numero = [0,2,8,3,4,56,48,23,22,34,99,54,52,14,25,20,28,31,101,1501]
var pares = [];
var impares = [];
var contador = 0;
var acumulador = 0;

for(let i= 0;i<numero.length;i++){
  if(i % 2 ==0){
      pares.push(numero[i]);
      contador+=1;
        acumulador+=i;
  }
  else{
      impares.push(numero[i]);
      contador+=1;
        acumulador+=i;
  }
}
console.log("Los numeros pares son " + pares,  "Acumulador: ", acumulador, " - ", "Contador: ", contador, " - ", "Promedio: ", acumulador/contador);
console.log("Los numeros impares son " + impares, "Acumulador: ", acumulador, " - ", "Contador: ", contador, " - ", "Promedio: ", acumulador/contador);

var numbers = [4, 2, 5, 1, 3, 45, 22, 37, 87, 23];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
