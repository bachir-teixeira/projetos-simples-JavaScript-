class Jogador {
  constructor(nome, equipa) {
    this.nome = nome;
    this.equipa = equipa;
  }
}

/*
let Jogadores = [
  new Jogador('CR7', 'All Nasar'),
  new Jogador('M10','I.Miami')
  ]
  */

let opc = ['nome', 'equipa']
let est = []
let Jogadores = []
for (let i = 1; i <= 3; i++) {
  for (let c of opc) {
    let d = prompt(` Jogador${i} \ninforme o ${c}`)
    est.push(d)
  }
  let pl = new Jogador(est[0], est[1])
  Jogadores.push(pl)
  est = []
}
let [{
  nome
}] = Jogadores
console.log(Jogadores)