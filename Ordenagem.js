//ORDENAGEM:
function ordem() {
    let n = prompt("Diga a quantidade de números que serão inseridos");
    let i = 0;
    let sorted = [];
    let notSorted = [];
    while (i < n) {
        let input = prompt(`Diga o ${i + 1}° número`);
        notSorted.push(input);
        sorted.push(input);
        i++;
    }
    sorted.sort((a, b) => a - b);
    console.log(notSorted.join(", "));
    console.log(sorted.join(", "));
    }