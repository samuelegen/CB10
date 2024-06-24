import { headerEl } from "./header.js";

window.addEventListener("DOMContentLoaded", () => {
    const addEl = document.querySelector('#app')
    renderPage(addEl)
})

function renderPage(addEl) {
    const header = headerEl()
    const html = header

    addEl.innerHTML = html
}
