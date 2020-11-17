var vetor = [5, 2, 5, 3, 2, 2, 5, 4, 3];
var n = 9;
var nota = 0;
var aux = 0;
var cont = 1;
var contAtual = 1;
var i, j;

for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
        if (vetor[i] < vetor[j]) {
            aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
        }
    }
}

for (i = 0; i < n; i++) {
    console.log(vetor[i]);
}

for (i = 1; i < n; i++) {
    if (vetor[i] == vetor[i - 1]) {
        cont++;
        aux = vetor[i - 1];
        if ((cont == contAtual && aux > nota) || (contAtual < cont)) {
            nota = aux;
            contAtual = cont;
        }
    }
    else {
        cont = 1;
        aux = 0;
    }
}
console.log("A maior nota e ", nota);