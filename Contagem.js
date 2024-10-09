//contagem:
function contagem() {
    let n = prompt("Diga a quantidade de notas (aprovação: acima de 50)");
    let tempGrade;
    let gradeList = [];
    let counter = 0;
    let i = 0;
    while (i < n) {
        tempGrade = prompt(`Diga a nota número ${i + 1}`);
        gradeList.push(tempGrade);
        if (tempGrade > 50) {
        counter++;
        }
        i++;
    }
    console.log(`Quantidade de alunos aprovados: ${counter}`);
    console.log(`Notas inseridas: ${gradeList.join(", ")}`);
    }