import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(1);
	const [post, setPost] = useState([]); //Possiamo dare anche una proprietà null
	const handleClick = () => {
		setCount(count + 1);
	};
	const handleEffect = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setPost(res);
			});
	};

	useEffect(() => {
		handleEffect();
	}, [count]);
	return (
		//Dando la proprità null dentro h2 e p dobbiamo fare un controllo cioè:
		//h2 {post && post.title} in questo modo controlla se la proprietà post è null prima di accedere al title
		<>
			<h1>Titolo numero: #{count}</h1>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<button onClick={handleClick}>Mostra contenuto</button>
		</>
	);
}

export default App;
