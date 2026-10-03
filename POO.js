class Jogador {
  constructor(nome, idade, equipa, posicao) {
    this.nome = nome;
    this.idade = idade;
    this.equipa = equipa;
    this.posicao = posicao;
  }
}
class Goleiro extends Jogador {
  constructor(nome, idade, equipa, posicao) {
    super(nome, idade, equipa, posicao)
  }
}
class Defesor extends Jogador {
  constructor(nome, idade, equipa, posicao) {
    super(nome, idade, equipa, posicao)
  }
}
class Meia extends Jogador {
  constructor(nome, idade, equipa, posicao) {
    super(nome, idade, equipa, posicao)
  }
}
class Ponta extends Jogador {
  constructor(nome, idade, equipa, posicao) {
    super(nome, idade, equipa, posicao)
  }
}

let Jogadores = [
  new Goleiro('Alisson Beker', 25, 'Liverpool', 'Goleiro'),
  new Defesor('Pau Cubarsi', 20, 'Barcelona', 'Zagueiro'),
  new Meia('Bellingham', 25, 'Real Madrid', 'Meia'),
  new Ponta('Kylian Mbappe', 26, 'Real Madrid', 'Ponta')

] 
let js = JSON.stringify(Jogadores)
console.log(js)
console.log('________________________________________________________')
console.log('JOGADORES:')
for ({
  nome, idade, equipa, posicao
} of Jogadores) {
  console.log(`nome:${nome} \n idade: ${idade} \n equipa: ${equipa} \n posicao: ${posicao}`)
  console.log('==============================================')
}

console.log('JOGADOR MAIS NOVO')
let obj = Jogadores.reduce((ac,n) => n.idade < ac.idade ? n : ac)
  for (let c in obj) {
    console.log(`${c} : ${obj[c]}`)
  } 
  
let ob = Jogadores.reduce((ac,n) => n.idade > ac.idade ? n : ac) 
console.log("===================================")
console.log("JOGADOR MAIS VELHO") 
for(let i in ob ){ 
  console.log(`${i} : ${ob[i]}`)
} 
