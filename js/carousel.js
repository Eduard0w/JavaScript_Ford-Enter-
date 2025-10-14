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
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
    carouselImg.innerHTML = "";

    const contLink = document.createElement('a');
    contLink.href = carouselArr[Carousel._sequence].url;
    const contImg = document.createElement('img');
    contImg.src = carouselArr[Carousel._sequence].img;

    carouselText.textContent = carouselArr[Carousel._sequence].title;

    carouselImg.appendChild(contLink);
    contLink.appendChild(contImg);

    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }

    static NextIMG() {
        console.log("Botão clicado")
        carouselImg.innerHTML = "";

        const contLink = document.createElement('a');
        contLink.href = carouselArr[Carousel._sequence].url;
        const contImg = document.createElement('img');
        contImg.src = carouselArr[Carousel._sequence].img;

        carouselText.textContent = carouselArr[Carousel._sequence].title;

        carouselImg.appendChild(contLink);
        contLink.appendChild(contImg);

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
};


setaDireitaCarousel.addEventListener('click', Carousel.NextIMG);
setaEsquerdaCarousel.addEventListener('click', Carousel.NextIMG);
