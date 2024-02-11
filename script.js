const currentPageUrl = window.location.pathname;

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {

    if (item.getAttribute('href') === currentPageUrl) {
        item.classList.add('active');
    }
});


//DARK MODE

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "light_mode" : "dark_mode";
    const ctaText = isDark ? "" : ""

    buttonEl.innerHTML = `<span class="material-symbols-outlined">${newCta}</span>${ctaText}`;

    buttonEl.setAttribute("aria-label", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
}

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });

    currentThemeSetting = newTheme;
}); 