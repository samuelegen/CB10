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

// export const getraveList = async () => {
// 	try {
// 		const res = await fetch(
// 			"https://trailapi-trailapi.p.rapidapi.com/activity/?lat=34.1&limit=25&lon=-105.2&q-city_cont=Denver&q-country_cont=Australia&q-state_cont=California&radius=25&q-activities_activity_type_name_eq=hiking"
// 		);
// 		return res.json();
// 	} catch (error) {
// 		throw new Error("Error:", error);
// 	}
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
