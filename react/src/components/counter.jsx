import { useState } from "react";

export function Counter() {
	const [count, setCount] = useState(0);

	const handleMinusClick = () => {
		if (count === 0) {
			return;
		}

		setCount(count - 1);
	};

	return (
		<div className="Counter">
			<Button onClick={handleMinusClick}>-1</Button>
			<span>{count}</span>
			<Button onClick={() => setCount(count + 1)}>+1</Button>
		</div>
	);
}

function Button(props) {
	const { children, className, ...attrs } = props;

	const classes = "btn " + (className || "");
	console.log({ attrs });

	return (
		<button {...attrs} className={classes}>
			{children}
		</button>
	);
}

export default Counter;
