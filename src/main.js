
  const toggleBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-link");
  const icon = document.getElementById("menu-icon");

  let menuOpen = false;

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("top-[-100%]");
    nav.classList.toggle("top-[10%]");

    // Icon toggle: hamburger <-> X
    if (!menuOpen) {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`; // X icon
      menuOpen = true;
    } else {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`; // Hamburger
      menuOpen = false;
    }
  });

