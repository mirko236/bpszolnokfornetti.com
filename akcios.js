const cards = document.querySelectorAll(".card");


// Kártyák kezelése
cards.forEach((card) => {

    // --------------------------
    // EGÉR
    // --------------------------

    card.addEventListener("mousemove", (event) => {

        // Telefonon ne fusson
        if (window.innerWidth <= 600) {
            return;
        }

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            (x - centerX) / 18;

        const rotateX =
            (centerY - y) / 18;

        card.style.transform = `
            translateY(-25px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.04)
        `;
    });


    // Egér elhagyja a kártyát
    card.addEventListener("mouseleave", () => {

        if (window.innerWidth <= 600) {
            return;
        }

        card.style.transform = "";
    });


    // --------------------------
    // TELEFON / KATTINTÁS
    // --------------------------

    card.addEventListener("click", () => {

        // Ha már aktív volt
        if (card.classList.contains("active")) {

            card.classList.remove("active");

            return;
        }


        // Többi kártya bezárása
        cards.forEach((otherCard) => {
            otherCard.classList.remove("active");
        });


        // Kiválasztott kártya aktiválása
        card.classList.add("active");
    });

});


// --------------------------
// GOMBOK
// --------------------------

const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const card = button.closest(".card");

        const title =
            card.querySelector("h2").textContent;

        console.log(
            "Megnyitva:",
            title
        );

    });

});