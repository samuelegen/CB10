import { useState } from "react";
import style from "../App.module.css";

function Switch() {
	const min = 0;
	const max = 100;
	const [value, setValue] = useState(min);
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<>
			<div className={style.container}>
				<h1>Volume</h1>
				<div className={style.current_value}>
					<p>Current value: {value}</p>
				</div>

				<div className={style.slider_container}>
					<span>{min}</span>
					<input
						className={style.slider}
						type="range"
						min={min}
						max={max}
						value={value}
						onChange={handleChange}
					/>
					<span>{max}</span>
				</div>
			</div>
		</>
	);
}
export default Switch;
