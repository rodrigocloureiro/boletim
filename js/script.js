let arrNotas = [];
let soma = 0;
let media = 0;
let count = 0;

const materias = document.querySelectorAll('.materia input');
materias.forEach(item => {
    item.value = 0;
    item.addEventListener('change', (e)=> {
        let materia = e.target.parentNode;
        arrNotas = document.querySelectorAll(`#${materia.id} input[type='number']`);
        somaNotas(materia, arrNotas);
        mediaNotas(materia, arrNotas);
        defineSituacao(materia);
        situacaoFinal();
    });
});

function somaNotas(materia, arrNotas){
    soma = 0;
    arrNotas.forEach(item => {
        if(item.value != 0)
            soma += Number(item.value);
    });
    materia.children[7].textContent = soma;
}

function mediaNotas(materia, arrNotas) {
    media = 0;
    count = 0;
    arrNotas.forEach(item => {
        if(item.value != 0)
            count++;
    });
    media = soma / count;
    materia.children[8].textContent = parseInt(media);
}

// Define a situacao da matéria
function defineSituacao(materia) {
    if(count === 6) {
        if(media >= 70)
            materia.children[9].textContent = 'APROVADO';
        else if(media >= 45)
            materia.children[9].textContent = 'RECUPERAÇÃO';
        else
            materia.children[9].textContent = 'REPROVADO';
    }
}

function situacaoFinal() {
    let situacao = document.querySelectorAll('.situacao');
    let finalSituacao = document.querySelector('.situacao-final');
    let aprCount = 0;
    let recCount = 0;
    let repCount = 0;
    situacao.forEach(item => {
        if(item.textContent !== 'INDEFINIDO' && item.textContent === 'APROVADO')
            aprCount++;
        else if(item.textContent !== 'INDEFINIDO' && item.textContent === 'RECUPERAÇÃO')
            recCount++;
        else if(item.textContent !== 'INDEFINIDO' && item.textContent === 'REPROVADO')
            repCount++;

        if(aprCount === 12 && recCount < 1)
            finalSituacao.textContent = 'APROVADO';
        else if(recCount >= 1) 
            finalSituacao.textContent = 'RECUPERAÇÃO';
        else if(repCount >= 1)
            finalSituacao.textContent = 'REPROVADO';
    });
}

function imprimir() {
    window.print();
}