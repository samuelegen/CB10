import "./App.css";
import Card from "./components/card";
function App() {
	return (
		<>
			<div className="card">
				<Card number="1" urlImage="https://picsum.photos/200/300" />
				<Card number="2" urlImage="https://picsum.photos/200/300" />
				<Card number="3" urlImage="https://picsum.photos/200/300" />
				<Card number="4" urlImage="https://picsum.photos/200/300" />
				<Card number="5" urlImage="https://picsum.photos/200/300" />
				<Card number="6" urlImage="https://picsum.photos/200/300" />
				<Card number="7" urlImage="https://picsum.photos/200/300" />
				<Card number="8" urlImage="https://picsum.photos/200/300" />
			</div>
		</>
	);
}

export default App;
