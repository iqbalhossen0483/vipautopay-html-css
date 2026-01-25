const btn = document.getElementById(
  "mobile-menu-btn",
) as HTMLButtonElement | null;
const menu = document.getElementById("mobile-menu") as HTMLElement | null;
const iconMenu = document.getElementById("menu-icon") as HTMLElement | null;
const iconClose = document.getElementById("close-icon") as HTMLElement | null;
const mobileLinks =
  document.querySelectorAll<HTMLAnchorElement>(".mobile-link");

function toggleMenu(): void {
  if (!menu || !iconMenu || !iconClose) return;

  const isOpen = menu.classList.toggle("hidden") === false;

  iconMenu.classList.toggle("hidden", isOpen);
  iconClose.classList.toggle("hidden", !isOpen);

  document.body.style.overflow = isOpen ? "hidden" : "auto";
}

btn?.addEventListener("click", toggleMenu);

// Close menu when a link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
