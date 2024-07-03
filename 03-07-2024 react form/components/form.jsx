import { useState } from "react";
import style from "../components/App.module.css";
function Form() {
	const [input, setInput] = useState({
		name: "",
		surname: "",
		age: "",
		message: "",
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInput((StateInput) => ({ ...StateInput, [name]: value }));
	};

	return (
		<>
			<div className={style.container}>
				<form className={style.formContainer}>
					<h1>Contact Us</h1>
					<label>Name</label>
					<input type="text" name="name" onChange={handleInput} />
					<label>Surname</label>
					<input type="text" name="surname" onChange={handleInput} />
					<label>Age</label>
					<input type="text" name="age" onChange={handleInput} />
					<label>Message</label>
					<input type="text" name="message" onChange={handleInput} />
					<button>Submit</button>
				</form>
				<form className={style.formInput}>
					<h1>Nome: {input.name}</h1>
					<h1>Cognome: {input.surname}</h1>
					<h1>Età: {input.age}</h1>
					<h1>Message: {input.message}</h1>
				</form>
			</div>
		</>
	);
}

export default Form;
