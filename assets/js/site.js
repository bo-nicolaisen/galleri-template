// Hent referencer til pilknapperne og det glidende billedstribe fra HTML'en
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const carouselItems = Array.from(document.getElementsByClassName('carousel-item'));

//dots
const dots = Array.from(document.getElementsByClassName('dot'));
  

// Hold styr på hvilket billede der vises lige nu (0 = første billede)
let currentIndex = 0;
carouselItems[currentIndex].classList.add('active');


// Når venstre pil klikkes, gå til det forrige billede
leftArrow.addEventListener("click", () => showImage(currentIndex - 1));

// Når højre pil klikkes, gå til det næste billede
rightArrow.addEventListener("click", () => showImage(currentIndex + 1));



// Flyt karusellen så billedet ved det givne indeks vises
function showImage(index) {
    
// Fjern 'active' klassen fra det nuværende billede for at skjule det
    carouselItems[currentIndex].classList.remove('active');

// Wrap around med modulo: går man forbi det sidste billede, starter man forfra 
    currentIndex = (index + carouselItems.length) % carouselItems.length;

    // Tilføj 'active' klassen til det nye billede for at vise det
    carouselItems[currentIndex].classList.add('active');

    // Opdater dot-indikatorer
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}






 