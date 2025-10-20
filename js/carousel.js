//carousel
const carouselImg = document.getElementById("carousel");
const carouselText = document.getElementById("carousel-title");
const setaEsquerdaCarousel = document.getElementById("seta-esquerda");
const setaDireitaCarousel = document.getElementById("seta-direita");

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(img, title, url) {
        this.img = img;
        this.title = title;
        this.url = url;
    }
    
      
    static Start(arr){
        if(arr){


            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.NextIMG(); //start
                Carousel._interval = setInterval(function(){ Carousel.NextIMG(); },3000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    // static Next(){
    // carouselImg.innerHTML = "";

    // const contLink = document.createElement('a');
    // contLink.href = carouselArr[Carousel._sequence].url;
    // const contImg = document.createElement('img');
    // contImg.src = carouselArr[Carousel._sequence].img;

    // carouselText.textContent = carouselArr[Carousel._sequence].title;

    // carouselImg.appendChild(contLink);
    // contLink.appendChild(contImg);

    // Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    // }

    static NextIMG() {
       
        
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        
        carouselImg.innerHTML = "";

        const contLink = document.createElement('a');
        contLink.href = carouselArr[Carousel._sequence].url;
        const contImg = document.createElement('img');
        contImg.src = carouselArr[Carousel._sequence].img;

        carouselText.textContent = carouselArr[Carousel._sequence].title;

        carouselImg.appendChild(contLink);
        contLink.appendChild(contImg);

        Carousel._sequence++;

        
    }

    static resetIMG() {
        console.log("Botão clicado")

        Carousel._sequence -= 2;

        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }

        Carousel.NextIMG();
    }
};


setaDireitaCarousel.addEventListener('click', Carousel.NextIMG);
setaEsquerdaCarousel.addEventListener('click', Carousel.resetIMG);
