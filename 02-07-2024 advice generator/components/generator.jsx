import React, { useState } from "react";
import styles from "../src/App.module.css";
const phrases = [
	{
		id: 116,
		advice:
			"One of the top five regrets people have is that they didn't stay in contact with friends.",
	},
	{ id: 12, advice: "Always block trolls." },
	{
		id: 200,
		advice:
			"Sarcasm is the lowest form of wit. Employ correctly with apt timing.",
	},
	{
		id: 142,
		advice: "If you don't like the opinion you've been given, get another one.",
	},
	{
		id: 117,
		advice: "A common regret in life is wishing one hadn't worked so hard.",
	},
	{ id: 5, advice: "If you have the chance, take it!" },
	{ id: 183, advice: "Always get two ciders." },
	{
		id: 164,
		advice: "Some of life's best lessons are learnt at the worst times.",
	},
];

function Generator() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
	};

	return (
		<div className={styles.container}>
			<h1>Advice #{phrases[currentIndex].id}</h1>
			<p>{phrases[currentIndex].advice}</p>
			<img
				className={styles.pattern}
				src="./components/img/pattern-divider-desktop.svg"
				alt="pattern"
			/>
			<div className={styles.btnContainer}>
				<img
					className={styles.btn}
					onClick={handleClick}
					src="./components/img/icon.svg"
					alt="icon"
				/>
			</div>
		</div>
	);
}

export default Generator;
