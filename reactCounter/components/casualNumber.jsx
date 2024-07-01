import { useState } from "react";

function CasualNum() {
	const [number, setNumber] = useState("--");

	const generateNumber = () => {
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		setNumber(randomNumber);
	};

	return (
		<div className="randomContainer">
			<h1>Genera un numero da 0 a 100</h1>
			<button className="btn" onClick={generateNumber}>
				{number}
			</button>
		</div>
	);
}

export default CasualNum;
