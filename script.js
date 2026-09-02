document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MENÚ MÓVIL
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Cerrar menú al pulsar un enlace
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });

        });
    }


    /* =====================================================
       ANIMACIONES AL HACER SCROLL
    ===================================================== */

    const elementos = document.querySelectorAll(
        ".reveal, " +
        ".scroll-text, " +
        ".specialty-card, " +
        ".step, " +
        ".therapy-box, " +
        ".section-title, " +
        ".about-photo, " +
        ".contact-card, " +
        ".pricing-card"
    );


    // Si el navegador no permite IntersectionObserver,
    // mostramos todo directamente.
    if (!("IntersectionObserver" in window)) {

        elementos.forEach(function (elemento) {
            elemento.classList.add("visible");
        });

    } else {

        const observer = new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }

        );


        elementos.forEach(function (elemento) {
            observer.observe(elemento);
        });

    }


    /* =====================================================
       ANIMACIÓN ESCALONADA DE LAS TARJETAS
       ESPECIALIDADES
    ===================================================== */

    const cards = document.querySelectorAll(".specialty-card");

    cards.forEach(function (card, index) {

        card.style.transitionDelay = (index * 0.08) + "s";

    });


    /* =====================================================
       ANIMACIÓN ESCALONADA DE LOS PASOS
    ===================================================== */

    const steps = document.querySelectorAll(".step");

    steps.forEach(function (step, index) {

        step.style.transitionDelay = (index * 0.10) + "s";

    });


    /* =====================================================
       ANIMACIÓN ESCALONADA DE LAS TARIFAS
    ===================================================== */

    const pricingCards = document.querySelectorAll(".pricing-card");

    pricingCards.forEach(function (card, index) {

        card.style.transitionDelay = (index * 0.13) + "s";

    });


    /* =====================================================
       HEADER AL HACER SCROLL
    ===================================================== */

    const header = document.querySelector(".header");

    function actualizarHeader() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", actualizarHeader);

    actualizarHeader();


    /* =====================================================
       CERRAR MENÚ AL CAMBIAR A ESCRITORIO
    ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 650 && navLinks) {

            navLinks.classList.remove("active");

        }

    });

});