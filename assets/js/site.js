
const data = getData();

// Hent referencer til pilknapperne og det glidende billedstribe fra HTML'en
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
let carouselItems=null



// Hold styr på hvilket billede der vises lige nu (0 = første billede)
let currentIndex = 0;

createGallery()

// Flyt karusellen så billedet ved det givne indeks vises
function showImage(index) {
  // Fjern 'active' klassen fra det nuværende billede for at skjule det
  carouselItems[currentIndex].classList.remove("active");

  // Wrap around med modulo: går man forbi det sidste billede, starter man forfra
  currentIndex = (index + carouselItems.length) % carouselItems.length;

  // Tilføj 'active' klassen til det nye billede for at vise det
  carouselItems[currentIndex].classList.add("active");
}

function createGallery() {
    const carousel = document.getElementById("gallery");

    data.forEach((item) => {

        const card = document.createElement("article");
        card.classList.add("carousel-item");

           const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.alt;
     
      card.appendChild(img);

      const title = document.createElement("h2");
        title.textContent = item.name;
        card.appendChild(title);

        const description = document.createElement("p");
        description.textContent = item.description;
        card.appendChild(description);
        carousel.appendChild(card);
    }); 


    // Opret pilknapperne og tilføj dem til karusellen
    let leftArrow = document.createElement("i");
    leftArrow.id = "arrow-left";
    leftArrow.classList.add("fa-solid", "fa-chevron-left", "gallery-arrow", "left");
    carousel.appendChild(leftArrow);

    let rightArrow = document.createElement("i");
    rightArrow.id = "arrow-right";
    rightArrow.classList.add("fa-solid", "fa-chevron-right", "gallery-arrow", "right");
    carousel.appendChild(rightArrow);


    // Når venstre pil klikkes, gå til det forrige billede
leftArrow.addEventListener("click", () => showImage(currentIndex - 1));

// Når højre pil klikkes, gå til det næste billede
rightArrow.addEventListener("click", () => showImage(currentIndex + 1));

// Hent alle karusellens billeder (nu oprettet) og gem dem i en variabel
carouselItems = Array.from(
  document.getElementsByClassName("carousel-item"),
);

  carouselItems[currentIndex].classList.add("active");

}










// Funktion der returnerer data om billederne i galleriet
function getData() {
  return [
    {
      image: "assets/img/Brachypelma_smithi.jpg",
      alt: "Brachypelma_smithi",
      name: "Brachypelma smithi",
      description:
        "Brachypelma smithi, also known as the Mexican redknee tarantula, is a popular species of tarantula native to Mexico. It is known for its striking appearance, with a black body and bright red or orange markings on its legs. This tarantula is often kept as a pet due to its docile nature and vibrant colors.",
    },
    {
      image: "assets/img/elephant.jpg",
      alt: "elephant",
      name: "Elephant",
      description:
        "Elephants are the largest land animals on Earth, known for their distinctive trunks, large ears, and tusks. They are highly intelligent and social creatures, living in close-knit family groups. Elephants play a crucial role in their ecosystems by shaping habitats and dispersing seeds. They are found in various habitats across Africa and Asia.",
    },
    {
      image: "assets/img/great-white.jpg",
      alt: "great-white",
      name: "Great White Shark",
      description:
        "The great white shark is a large predatory shark found in coastal waters around the world. It is known for its size, power, and reputation as a formidable predator. Great whites have a streamlined body and powerful jaws filled with sharp teeth.",
    },
    {
      image: "assets/img/koala.jpg",
      alt: "koala",
      name: "Koala",
      description:
        "Koalas are marsupials native to Australia, known for their distinctive appearance and behavior. They are primarily arboreal, spending most of their time in eucalyptus trees. Koalas have a specialized diet consisting mainly of eucalyptus leaves.",
    },
    {
      image: "assets/img/standard_tiger.jpg",
      alt: "standard_tiger",
      name: "Bengal Tiger",
      description:
        "The Bengal tiger is a subspecies of tiger found in the Indian subcontinent. It is known for its distinctive orange coat with black stripes and powerful build. Bengal tigers are apex predators and play a crucial role in their ecosystem.",
    },
  ];
}
