import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {ProductProvider} from "./providers/ProductContext";
import Home from "./routes/Home";
import History from "./routes/History";
import Favorites from "./routes/Favorites";
import Cart from "./routes/Cart";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},

	{
		path: "/history",
		element: <History />,
	},

	{
		path: "/favorites",
		element: <Favorites />,
	},

	{
		path: "/cart",
		element: <Cart />,
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ProductProvider>
			<RouterProvider router={router} />
		</ProductProvider>
	</React.StrictMode>
);
