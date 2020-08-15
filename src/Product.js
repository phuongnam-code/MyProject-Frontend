import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

//function Product(props){...//code};
function Product({ id, title, rating, image, price }) {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<StarIcon />
						))}
				</div>
			</div>
			<img src={image} alt="abc" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
