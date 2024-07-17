import React from "react";
import Navbar from "../components/Navbar";
function Favorites() {
	return (
		<>
			<Navbar currentPage="favorites" />
			<div className="flex justify-center mt-4 text-3xl">
				<h3>Favorites List</h3>
			</div>
		</>
	);
}

export default Favorites;
