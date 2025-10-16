
//car
let carArr = [];
const infos = ['image', 'modelo', 'alturaCacamba', 'alturaVeiculo', 'alturaSolo', 'capacidadeCarga', 'motor', 'potencia', 'volumeCacamba', 'roda', 'preco'];

class Car {
   
// imagem, modelo, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, preco.
    constructor(image, modelo, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, preco){
       this.image = image;
       this.modelo = modelo;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.preco = preco;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].modelo  === carClass.modelo)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    //instanceof verifica se o objeto é uma instãncia de uma determinada classe.
    if(carClass instanceof Car){       
        if(el.checked){
                console.log(`Carro escolhido: ${carClass.modelo}` )
                carArr.push(carClass);
        } else {

        const index = carArr.findIndex(carro => carro.modelo === carClass.modelo);
        if (index > -1) {
            carArr.splice(index, 1);
        }

        carArr.forEach(carro => {
            console.log(`Carros que ainda estão escolhidos: ${carro.modelo}`);
        });
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }else if(carArr.length > 2) {
        alert("Compare apenas dois carros");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    console.log("Botao clicado")
    index= 0;
    carArr.forEach((car, i) => {
        infos.forEach((info) => {
            console.log("Item adicionado")
            let tagEscolhido = document.getElementById(`compare_${info}_${i}`);
             // Limpa conteúdo anterior antes de adicionar algo novo
             tagEscolhido.innerHTML = "";

             if (info === "image") {
                 let tagImg = document.createElement("img");
                 tagImg.src = car[info];
                 tagImg.alt = car.nome || "Imagem do carro";
                 tagImg.style.width = "200px"; // opcional
                 tagEscolhido.appendChild(tagImg);
             } else {
                 tagEscolhido.textContent = car[info];
             }
    })

})
}
