import ErrorComponent from "../components/ErrorComponent";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<div>
			<ErrorComponent message={error.statusText || error.message}>
				<Link to="/">Go back home</Link>
			</ErrorComponent>
		</div>
	);
}

export default ErrorPage;
