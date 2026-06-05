function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');

    // Toggles between hidden (translate-x-full) and visible (translate-x-0)
    if (menu.classList.contains('translate-x-full')) {
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
        // Optional: Prevents background scrolling when menu is open
        document.body.classList.add('overflow-hidden');
    } else {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');
        document.body.classList.remove('overflow-hidden');
    }
}

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        // SCROLLED STATE: Inject glassmorphic styling cards safely
        navbar.classList.add(
            "bg-white/20",
            "backdrop-blur-xl",
            "backdrop-saturate-150",
            "border",
            "border-white/40",
            "shadow-lg",
            "rounded-[25px]"
        );
    } else {
        // TOP OF PAGE STATE: Clean out scrolled styles cleanly
        navbar.classList.remove(
            "bg-white/20",
            "backdrop-blur-xl",
            "backdrop-saturate-150",
            "border",
            "border-white/40",
            "shadow-lg",
            "rounded-[25px]"
        );
    }
});