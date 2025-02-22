function Carro (marca, modelo, ano, cor) {
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.cor = cor;
}

const carro1 = new Carro ("Ford", "Mustang", 2024, "Preto");
const carro2 = new Carro ("Chevrolet", "Camaro", 2025, "Amarelo");
const carro3 = new Carro ("Lamborghini", "Urus", 2025, "Roxo");

console.log(carro1.marca);
console.log(carro1.modelo);
console.log(carro1.ano);
console.log(carro1.cor);

console.log(carro2.marca);
console.log(carro2.modelo);
console.log(carro2.ano);
console.log(carro2.cor);

console.log(carro3.marca);
console.log(carro3.modelo);
console.log(carro3.ano);
console.log(carro3.cor);