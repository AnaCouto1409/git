//esta é uma função que utiliza o for 
function aa(){
    let soma=0;
    for(let i=0; soma.length; i++){
        return soma = soma.length[i];
    }
}
console.log(aa());
// vai mais rapido- função expressa aí vai
let soma = function(a,b){
    return a + b;
}
console.log(soma(2,2));
// Em javascript existem algumas formas de se declarar variáveis, veja
//os exemplos abaixo, veja:
//escopo local significa que aquele valor apenas é válido
//dentro do escopo da função, fora dele ele não existe
//veja um exemplo
function adiciona(a,b){
    let num1 = a;
    let num2 = b;
    let som = num1 + num2;
    return som;// se desse um console log de so e função ia dar erro
}
console.log(adiciona(8,6));
// escopo global é quando uma variavel pode ser declara fora do escopo da função
// e pode ser chamada para dentro da função

let teste = 0;
function escope(){
    console.log(++teste);
};
escope();

// PODE SUBIR 
function podeSubir(altura, emDupla){
    if((altura >=1.40 && altura <= 2) ||(altura <= 1.40 && altura >= 1.20 && emDupla =="s")){
        return true;
    } else {
        return false;
    }
}
console.log(podeSubir(1.20,"s"));