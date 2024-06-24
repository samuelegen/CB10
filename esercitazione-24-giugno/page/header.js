function headerEl() {
	const menuHtml = menuEl();
	return `
    <header>
        <div class="container">
        <div class="wrapper">
        <div class="logo">Logo</div>
        ${menuHtml}
        </div>
        </div>
        </header>
        `;
}

function menuEl() {
    const menuItems = [
        {label: "About Us"},
        {label: "Blog", href: "https://google.it"},
        {label: "Contacts"}
    ]

    return `
    <nav class="nav>
    <ul class="list">
    ${menuItems.map((item) => menuHtml(item)).join("")}
    </ul>
    </nav>
    `;
}

function menuHtml(options = {}) {
    const {label, href = "#"} = options;
    return `
    <li class="item">
        <a href="${href}">${label}</a>
    </li>
    `;
}

export {headerEl}