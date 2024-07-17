import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
function Home() {
	const [element, setElement] = useState([]);
	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((res) => {
				const cleanedData = res.map(item => {
                    item.images = item.images.map(image => image.slice(1, -1));
                    return item;
                });
                setElement(cleanedData);
                console.log(cleanedData);
            });
	}, []);
	return (
		<>
			<Navbar />
			<div>homepage</div>
			<div>
                {element.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <img src={item.images[1]} alt={item.title} width="100" />
                    </div>
                ))}
            </div>
		</>
	);
}

export default Home;
