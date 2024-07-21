import React, {useContext} from "react";
import Navbar from "../components/Navbar";
import { ProductContext, SetProductContext } from "../providers/ProductContext";
function Favorites() {
	const {products} = useContext(ProductContext);
	const {setProducts} = useContext(SetProductContext)
	
	const handleDelete = (id) => {
		setProducts((prevState) => prevState.filter((product) => product.id != id));
	};


	return (
		<>
			<Navbar currentPage="favorites" />
			<div className="flex justify-center mt-4 text-3xl">
			{products.length > 0 ? (
					products.map((item) => (
						<div
							key={item.id}
							className="group relative block overflow-hidden w-1/6"
						>
							<div className="flex flex-col h-full border border-gray-100 bg-white">
								<img
									src={item.image}
									alt={item.title}
									className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 bg-cover"
								/>
								<div className="relative p-6 flex-grow flex flex-col justify-between">
									<div>
										<h3 className="mt-4 text-lg font-medium text-gray-900">
											{item.title}
										</h3>
										<p className="mt-1.5 text-sm text-gray-700">{`€${item.price}`}</p>
									</div>
									<button
										type="button"
										className="block w-full rounded bg-red-400 p-4 text-sm font-medium transition hover:scale-105"
										onClick={() => handleDelete(item.id)}
									>
										Remove from Favorites
									</button>
								</div>
							</div>
						</div>
					))
				) : (
					<h3>Your Favorites is empty</h3>
				)}
			</div>
		</>
	);
}

export default Favorites;
