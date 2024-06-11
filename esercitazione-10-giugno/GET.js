import { API_KEY } from "./keys.js";

export const BaseUrl = "https://api.themoviedb.org/3/";
export const options = {
	headers: {
		Authorization: `Bearer ${API_KEY}`,
	},
};

export const Get = async (endpoint, pageNumber) => {
	const response = await fetch(`${BaseUrl}${endpoint}?page=${pageNumber}`, options);
	let data = await response.json();
	return data;
};
// ASYNC FUNCTION
// async function GET() {
//   const response = await fetch(
//     `${BASE_URL}${endpoint}?page=${page}&include_adult=false`,
//     options
//   );

//   const data = await response.json();

//   console.log("log di get", {
//     page: data.page,
//     endpoint,
//   });

//   return data;
// }
