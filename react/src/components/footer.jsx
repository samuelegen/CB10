function Footer() {
    const menuData = getMenuHTML();

	return (
		<footer className="footer">
			<div className="container">
				<div className="wrapper">
					<div className="logo">Logo</div>
                    <nav className="nav">
                        {menuData.map((menu, index) => (
                            <ul key={index} className="menu">
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
			label: "About us",
			children: [
				{ label: "Company info" },
				{ label: "Careers" },
				{ label: "Altre cose" },
			],
		},

		{
			label: "About us",
			children: [
				{ label: "Company info" },
				{ label: "Careers" },
				{ label: "Altre cose" },
			],
		},
	];
}

function ItemMenu(props) {
    const { label, href = '#' } = props;
    return (
        <li className="item">
            <a href={href}>{label}</a>
        </li>
    )
}

export { Footer };
