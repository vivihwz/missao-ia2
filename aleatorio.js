const nomes = ["Vitória", "Roberta", "Renata", "Flaviane", "Mayara", "Gustavo", "Anthony"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);