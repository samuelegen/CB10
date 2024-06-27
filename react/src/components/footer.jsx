function Footer() {
    const menuData = getMenuHTML();

	return (
		<footer className="footer">
			<div className="containerFooter">
				<div className="footerItems">
					<div className="logo">Logo</div>
                    <nav className="nav">
                        {menuData.map((menu, items) => (
                            <ul key={items} className="menu">
                                <li className="menu-label">{menu.label}</li>
                                {menu.children.map((item, itemIndex) => (
                                    <ItemMenu key={itemIndex} label={item.label} />
                                ))}
                            </ul>
                        ))}
                    </nav>
				</div>
			</div>
		</footer>
	);
}

function getMenuHTML() {
	return [
		{
			label: "Info su di noi",
			children: [
				{ label: "Company info" },
				{ label: "Carrer" },
				{ label: "Altre cose" },
			],
		},

		{
			label: "About us",
			children: [
				{ label: "Contatti" },
				{ label: "Store" },
				{ label: "Nuovi prodotti" },
			],
		},
	];
}

function ItemMenu(props) {
    const { label, href = '#' } = props;
    return (
        <li className="item" href={href}>
            <a href="#">{label}</a>
        </li>
    )
}

export { Footer };
