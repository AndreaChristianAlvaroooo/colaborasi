document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section, footer");
    const navLinks = document.querySelectorAll(".navbar nav a, .mini-nav a");

    // 1. SMOOTH SCROLL DENGAN PENYESUAIAN TINGGI STICKY NAVBAR
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector(".navbar").offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight + 10;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. DETEKSI ACTIVE LINK STATE SAAT WINDOW DI-SCROLL
    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 20;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute("id");
            }
        });

        document.querySelectorAll(".navbar nav a").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. PROJECT CARD LINK ROUTER (GITHUB)
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const gitHubUrl = card.getAttribute("data-link");
            if (gitHubUrl) {
                window.open(gitHubUrl, "_blank");
            }
        });
    });

    // 4. INTERAKSI MODAL POP-UP RECOUNT TEXT
    const recountModal = document.getElementById("recountModal");
    const openRecountBtn = document.getElementById("openRecountBtn");
    const closeModal = document.querySelector(".close-modal");

    if (openRecountBtn) {
        openRecountBtn.addEventListener("click", () => {
            recountModal.style.display = "flex";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            recountModal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === recountModal) {
            recountModal.style.display = "none";
        }
    });
});
