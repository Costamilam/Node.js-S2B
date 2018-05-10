let i = 0;
while(i < 3) {
    console.log(i += 0.1);
}

/*
    Calculos com números de pontos flutuantes não são exatos é preferível usar inteiros
*/

i = 0;
while(i < 3) {
    i += 0.1 * 10
    console.log(i / 10);
}
