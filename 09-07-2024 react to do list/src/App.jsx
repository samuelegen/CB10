import styles from "../src/App.module.css";
import { useState } from "react";
import Student from "./student";

const initialState = [];

const initialInput = { nome: "", cognome: "", citta: "" };

function App() {
	const [students, setStudents] = useState(initialState);
	const [input, setInput] = useState(initialInput);
	const [selectedCity, setSelectedCity] = useState("");

	const handleDelete = (e) => {
		const tmpStudents = students.filter(
			(student) => student.id !== e.target.id
		);
		setStudents(tmpStudents);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const id = self.crypto.randomUUID();
		const nome = input.nome;
		const cognome = input.cognome;
		const citta = input.citta;
		setStudents([
			...students,
			{
				id,
				nome,
				cognome,
				citta,
			},
		]);

		setInput(initialInput);
	};

	const handleChange = (e) => {
		setInput((prevState) => {
			return { ...prevState, [e.target.id]: e.target.value };
		});
	};

	// Filtra le città duplicate
	const uniqueCities = [...new Set(students.map((student) => student.citta))];

	// Filtra gli studenti per la città selezionata
	const filteredStudents = selectedCity
		? students.filter((student) => student.citta === selectedCity)
		: students;

	return (
		<>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<h1>Contatti</h1>
					<label>Nome</label>
					<input id="nome" value={input.nome} onChange={handleChange} />

					<label>Cognome</label>
					<input id="cognome" value={input.cognome} onChange={handleChange} />

					<label>Città</label>
					<input id="citta" value={input.citta} onChange={handleChange} />
					<button className={styles.btnAdd} type="submit">
						Aggiungi
					</button>
				</form>

				<div className={styles.city}>
					{uniqueCities.map((city) => (
						<button
							
							key={city}
							onClick={() => setSelectedCity(city)}
						>
							{city}
						</button>
					))}
				</div>

				<ul className={styles.contact}>
					{filteredStudents.map((student) => {
						return (
							<Student
								key={student.id}
								student={student}
								onClick={handleDelete}
							/>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default App;
