//SomaTotal
function somaDeNumeros() {
    let n = prompt("Diga a quantidade de números");
    let numberList = [];
    let i = 0;
    while (i < parseInt(n)) {
        numberInput = prompt(`Diga o ${i + 1}° número`);
        numberList.push(parseFloat(numberInput));
        i++;
    }
    numberSum = numberList.reduce((a, b) => a + b);
    console.log(numberList.join(`, `));
    console.log(numberSum);
    }