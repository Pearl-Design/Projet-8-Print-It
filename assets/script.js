document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentSlideIndex = 0;
    const banner = document.getElementById("banner");
    const dotsContainer = document.querySelector("#banner .dots");
    const bannerImage = document.querySelector("#banner .banner-img");
    const bannerText = document.querySelector("#banner p");

    // Fonction pour mettre à jour l'affichage en fonction de l'index de la diapositive
    function updateSlide(index) {
        const slide = slides[index];
        bannerImage.src = "./assets/images/slideshow/" + slide.image;
        bannerText.innerHTML = slide.tagLine;

        // Recréer les bullet points
        dotsContainer.innerHTML = ""; // Efface tous les bullet points existants
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === index) {
                dot.classList.add("dot_selected");
            }
            dotsContainer.appendChild(dot);
        }
    }

    // Gestionnaire d'événement pour la flèche droite
    document.querySelector("#banner .arrow_right").addEventListener("click", function() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Assure que l'index reste dans les limites du tableau
        updateSlide(currentSlideIndex);
    });

    // Gestionnaire d'événement pour la flèche gauche
    document.querySelector("#banner .arrow_left").addEventListener("click", function() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Assure que l'index reste dans les limites du tableau
        updateSlide(currentSlideIndex);
    });

    // Initialisation de la première diapositive
    updateSlide(currentSlideIndex);
});
