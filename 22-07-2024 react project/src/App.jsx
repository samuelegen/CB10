import { labels } from "./data/labels";
import { useEffect, useState } from "react";
import { getProductsList } from "./api/ProductsClient";
import { Link } from "react-router-dom";

function App() {
	const [ProductsList, setProductsList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filter, setFilter] = useState("");

	const getList = async () => {
		try {
			const data = await getProductsList();
			setProductsList(data);
		} catch (error) {
			console.log(data);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getList();
	}, []);

	useEffect(() => {
		console.log(ProductsList);
	}, [ProductsList]);

	const handleChange = (e) => {
		setFilter(e.target.value.toLowerCase());
	};

	if (isLoading) return <p>is loading..</p>;

	return (
		<>
			<div className="flex justify-center">
				<main className="w-[1200px] ">
					<div className="p-4 flex gap-36 ">
						<h1 className="">{labels.ProductsList}</h1>
						<div>
							<h2>{labels.filterBookTitle}</h2>
							<input
								className="border-solid border-2 border-black"
								type="text"
								value={filter}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="overflow-x-auto">
						<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
							<thead className="text-left">
								<tr>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{labels.ProductsTitle}
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{labels.ProductsRate}
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{labels.ProductsCategory}
									</th>
									<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
										{labels.ProductsPrice}
									</th>
									<th className="px-4 py-2"></th>
								</tr>
							</thead>

							<tbody className="divide-y divide-gray-200">
								{ProductsList.filter((product) =>
									product.title.toLowerCase().includes(filter)
								).map((product) => {
									return (
										<tr key={product.id}>
											<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
												{product.title}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												{product.rating.rate} ⭐
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												{product.category}
											</td>
											<td className="whitespace-nowrap px-4 py-2 text-gray-700">
												${product.price}
											</td>
											<td className="whitespace-nowrap px-4 py-2">
												<Link
													to={`/product/${product.id}`}
													className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
												>
													View
												</Link>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
