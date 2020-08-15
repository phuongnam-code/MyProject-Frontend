import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<img
				src="https://images-eu.ssl-images-amazon.com/images/G/02//digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
				alt="homePage"
				className="home__image"
			/>
			<div className="home__row">
				<Product
					id="111"
					title="LE Power Adapter, UL Listed, 3A, 120V AC to 12V DC Transformer, 36W Power Supply, US Plug Power Converter for LED Strip Light and More"
					price={14.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/61mAgUcy2oL._AC_SL1200_.jpg"
				/>
				<Product
					s="s"
					id="222"
					title="HDMI+VGA Input Controller Board Kit LCD Driver Board For B156HAN01.1 LP156WF4 11.6'' 13.3'' 14'' 15.6'' 1920x1080 30Pins edp LCD Screen"
					price={26.8}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71ETxC7ZoBL._AC_SL1500_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="444"
					title="HDMI+VGA Input Controller Board Kit LCD Driver Board For B156HAN01.1 LP156WF4 11.6'' 13.3'' 14'' 15.6'' 1920x1080 30Pins edp LCD Screen"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71ETxC7ZoBL._AC_SL1500_.jpg"
				/>
				<Product
					id="444"
					title="HDMI+VGA Input Controller Board Kit LCD Driver Board For B156HAN01.1 LP156WF4 11.6'' 13.3'' 14'' 15.6'' 1920x1080 30Pins edp LCD Screen"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71ETxC7ZoBL._AC_SL1500_.jpg"
				/>
				<Product
					id="555"
					title="HDMI+VGA Input Controller Board Kit LCD Driver Board For B156HAN01.1 LP156WF4 11.6'' 13.3'' 14'' 15.6'' 1920x1080 30Pins edp LCD Screen"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71ETxC7ZoBL._AC_SL1500_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="666"
					title="Pixio PXC243 24 inch 144Hz AMD Radeon FreeSync Certified FHD 1800R Curved Full HD 1920x1080 Premier Esports Gaming Monitor, 3 Years Warranty"
					price={159.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/81def5zAMiL._AC_SL1500_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
