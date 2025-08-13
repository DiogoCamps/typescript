const numeroSecreto: number = Math.floor(Math.random() * 10) + 1;
console.log("Jogo da adivinha");

const chuteStr: number = 1;

const chute: number = 1;

if(chute === numeroSecreto) {
    console.log("Parabéns você acertou!")
}else {
    console.log("Você errou, tente novamente!")
}