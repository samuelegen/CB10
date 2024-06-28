function Card(props) {
	return (
			<div className="container">
				<h2>Card #{props.number}</h2>
				<img src={props.urlImage} alt="foto1" />
			</div>
	);
}

export default Card;
