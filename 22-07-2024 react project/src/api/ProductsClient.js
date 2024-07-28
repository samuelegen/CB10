// export const getBookList = () => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(() => {
// 				return [
// 					{
// 						id: "1",
// 						title: "Paperino alla scoperta del mondo",
// 						genre: "fantascienza",
// 						author: "Pippo e pluto",
// 					},
// 				];
// 			});
// 		}, 2000);
// 	});
// };

const url = "https://fakestoreapi.com/products";

export const getProductsList = async (id) => {
	try {
		const response = await fetch(id ? `${url}/${id}` : url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
