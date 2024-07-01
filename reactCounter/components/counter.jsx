import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const handleClick = (event) => {
		return event.target.id === "add"
			? setCount(count + 1)
			: setCount(count - 1);
	};
	return (
		<>
			<div className="container">
				<h1>Aumenta il volume</h1>
				<div className="wrapper">
					<button
						disabled={count === 10}
						id="add"
						onClick={(e) => handleClick(e)}
					>
						+
					</button>
					<p>{count}</p>
					<button
						disabled={count === 0}
						id="sub"
						onClick={(e) => handleClick(e)}
					>
						-
					</button>
				</div>
			</div>
		</>
	);
}

export default Counter;
