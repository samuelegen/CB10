import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
		localStorage.setItem("value", newValue);
	};

  useEffect(() => {
    const storedValue = localStorage.getItem("value");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

	return (
		<>
			<div>
				<label>nome</label>
				<input type="text" value={value} onChange={handleChange} />
			</div>
		</>
	);
}

export default App