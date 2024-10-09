//FIBONACCI:
function fibonacci() {
    let n = prompt("Diga qual será o número de termos da sequência");
    n = parseInt(n);
    console.log(n);
    let fib1 = 0;
    let fib2 = 1;
    let fibTemp;
    let fibList = [];
    let i = 3;
    while (i <= n) {
        fibTemp = fib1 + fib2;
        fibList.push(fibTemp);
        fib1 = fib2;
        fib2 = fibTemp;
        i++;
    }
    console.log(`0, 1, ${fibList.join(", ")}`);
    }