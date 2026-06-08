/* ======================================
   AGRINHO 2026 - SCRIPT PREMIUM
====================================== */

/* LOADER */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.classList.add("hide");

        },1200);

    }

});

/* MENU MOBILE */

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        const icon =
        menuBtn.querySelector("i");

        if(navLinks.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        }else{

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

/* FECHAR MENU */

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

/* DARK MODE */

const themeBtn =
document.getElementById("themeBtn");

const savedTheme =
localStorage.getItem("agrinhoTheme");

if(savedTheme === "light"){

    document.body.classList.add("light-mode");

}

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle(
            "light-mode"
        );

        const isLight =
        document.body.classList.contains(
            "light-mode"
        );

        localStorage.setItem(
            "agrinhoTheme",
            isLight ? "light" : "dark"
        );

    });

}

/* NAVBAR SCROLL */

const header =
document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 100){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* CONTADORES */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            Number(counter.dataset.target);

            let current = 0;

            const increment =
            target / 120;

            const update = ()=>{

                current += increment;

                if(current < target){

                    counter.textContent =
                    Math.floor(current)
                    .toLocaleString("pt-BR");

                    requestAnimationFrame(update);

                }else{

                    counter.textContent =
                    target.toLocaleString("pt-BR");

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* SCROLL REVEAL */

const revealElements =
document.querySelectorAll(

".card,.stat-box,.timeline-item,.gallery-grid img,.connection-card,.about-image,.about-content"

);

const revealObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/* LIGHTBOX */

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.getElementById(
"lightbox-img"
);

const closeLightbox =
document.querySelector(
".close-lightbox"
);

if(lightbox){

    galleryImages.forEach(img=>{

        img.addEventListener("click",()=>{

            lightbox.classList.add("open");

            lightboxImg.src = img.src;

        });

    });

    closeLightbox.addEventListener(
    "click",
    ()=>{

        lightbox.classList.remove("open");

    });

    lightbox.addEventListener(
    "click",
    (e)=>{

        if(e.target === lightbox){

            lightbox.classList.remove(
                "open"
            );

        }

    );

}

/* BOTÃO TOPO */

const scrollTopBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollTopBtn.classList.add(
            "visible"
        );

    }else{

        scrollTopBtn.classList.remove(
            "visible"
        );

    }

});

if(scrollTopBtn){

    scrollTopBtn.addEventListener(
    "click",
    ()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}

/* QUIZ */

const answers =
document.querySelectorAll(".answer");

const result =
document.getElementById("result");

const correctAnswer =
"Produzir Oxigênio";

answers.forEach(answer=>{

    answer.addEventListener("click",()=>{

        answers.forEach(btn=>{

            btn.disabled = true;

        });

        if(
            answer.textContent.trim()
            === correctAnswer
        ){

            result.innerHTML =
            "✅ Resposta correta!";

            result.className =
            "success";

        }else{

            result.innerHTML =
            "❌ Resposta incorreta!";

            result.className =
            "error";

        }

    });

});

/* HERO PARALLAX */

window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    if(hero){

        const value =
        window.scrollY * 0.4;

        hero.style.backgroundPositionY =
        `${value}px`;

    }

});

/* TIMELINE */

const timelineItems =
document.querySelectorAll(
".timeline-item"
);

const timelineObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "timeline-show"
            );

        }

    });

},{
    threshold:0.3
});

timelineItems.forEach(item=>{

    timelineObserver.observe(item);

});

/* CARDS 3D */

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener(
    "mousemove",
    e=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        (x / rect.width - 0.5) * 15;

        const rotateX =
        (0.5 - y / rect.height) * 15;

        card.style.transform =

        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;

    });

    card.addEventListener(
    "mouseleave",
    ()=>{

        card.style.transform =

        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `;

    });

});

/* SCROLL SUAVE */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* EFEITO DIGITAÇÃO NO HERO */

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

    heroTitle.style.opacity = "0";

    setTimeout(()=>{

        heroTitle.style.transition =
        "1s";

        heroTitle.style.opacity = "1";

    },1500);

}

console.log(
"%c🌱 AGRINHO 2026 PREMIUM",
"color:#32d74b;font-size:24px;font-weight:bold;"
);