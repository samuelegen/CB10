import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";
import IconCart from "./components/icons/IconCart";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";
import style from "./index.module.css";
import Textdescriprion from "./components/text-description/Text-descriprion";

function App() {
	return (
		<>
			<div className={style.main}>
				<div className={style.description}>
					<Textdescriprion />
					<div className={style.action}>
						<Button>
							<IconCart fill="#000" />
						</Button>
						<Counter />
					</div>
				</div>
				<ProductLightBox />
			</div>
		</>
	);
}

export default App;
