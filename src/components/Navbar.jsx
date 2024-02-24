import {  useState } from "react";

const Navbar = () => {
	/* const mobileScreenSize = 600;
	const [mobileWidth, setMobileWidth] = useState(window.innerWidth); */
	const [burgerClicked, setBurgerClicked] = useState("false");

/* 	useEffect(() => {
		const handleWidth = setMobileWidth(window.innerWidth);

		window.addEventListener("resize", handleWidth);
		return () => removeEventListener("resize", handleWidth);
	}, []); */

	/* const mobileView = mobileWidth <= mobileScreenSize; */

	return (
		<div className="nav">

			{/* {mobileView &&  */}<div
						className="barbtn"
						onClick={() => {
							setBurgerClicked(!burgerClicked);
						}}
					>
						<span className={`fancyDot ${!burgerClicked ? "fatDot" : ""}`}></span>
					</div>{/* } */}
			{/* {!mobileView ? ( */}
				<div className="pc-nav">
					<a href="#home" className="nav-link">
						Početna
					</a>
					<a href="#about" className="nav-link">
						O meni
					</a>
					<a href="#mywork" className="nav-link">
						Moji radovi
					</a>
					<a href="#contact" className="nav-link">
						Kontakt
					</a>
				</div>
			{/* ) : ( */}
				<div className="mobile-nav">	
					<div className={`mobile-nav ${!burgerClicked ? "mobactive" : ""}`}>
						<a href="#home" className="nav-link-mob" onClick={() => {setBurgerClicked(true)}}>
							Početna
						</a>
						<a href="#about" className="nav-link-mob" onClick={() => {setBurgerClicked(true)}}>
							O meni
						</a>
						<a href="#mywork" className="nav-link-mob" onClick={() => {setBurgerClicked(true)}}>
							Moji radovi
						</a>
						<a href="#contact" className="nav-link-mob" onClick={() => {setBurgerClicked(true)}}>
							Kontakt
						</a>
					</div>
				</div>
			{/* )} */}
		</div>
	);
};

export default Navbar;
