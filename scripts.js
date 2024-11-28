const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

// second toggle
const switch_toggle = document.getElementById("switch_toggle");
switch_toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});