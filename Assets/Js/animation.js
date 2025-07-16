document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            buttons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");


            cards.forEach((card) => {
                card.style.opacity = "0";
                card.style.transform = "translateY(10px)";
                card.style.visibility = "hidden";
            });


            setTimeout(() => {
                cards.forEach((card) => {
                    if (filter === "all" || card.getAttribute("data-category").includes(filter)) {
                        card.style.display = "block";
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "translateY(0)";
                            card.style.visibility = "visible";
                        }, 50); 
                    } else {
                        card.style.display = "none"; 
                    }
                });
            }, 50); 
        });
    });


    setTimeout(() => {
        cards.forEach((card) => {
            card.style.display = "block";
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
                card.style.visibility = "visible";
            }, 50);
        });
    }, 50);
});
