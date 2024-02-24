import { useState } from "react";

const Instagram = () => {
	const [hovered, setHovered] = useState(false);

	const handleHoverIn = () => {
		setHovered(true);
	};

	const handleHoverOut = () => {
		setHovered(false);
	};

	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="400"
				height="400"
				viewBox="0 0 48 48"
				onMouseEnter={handleHoverIn}
				onMouseLeave={handleHoverOut}
			>
				<radialGradient
					id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
					cx="19.38"
					cy="42.035"
					r="44.899"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset="0"
						stopColor={`#ffdd55${!hovered ? "00" : ""}`}
					></stop>
					<stop
						offset=".328"
						stopColor={`#ff543f${!hovered ? "00" : ""}`}
					></stop>
					<stop
						offset=".348"
						stopColor={`#fc5245${!hovered ? "00" : ""}`}
					></stop>
					<stop
						offset=".504"
						stopColor={`#e64771${!hovered ? "00" : ""}`}
					></stop>
					<stop
						offset=".643"
						stopColor={`#d53e91${!hovered ? "00" : ""}`}
					></stop>
					<stop
						offset=".761"
						stopColor={`#cc39a4${!hovered ? "00" : ""}`}
					></stop>
					<stop
						offset=".841"
						stopColor={`#c837ab${!hovered ? "00" : ""}`}
					></stop>
				</radialGradient>
				<path
					fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
					d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
				></path>
				<radialGradient
					id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
					cx="11.786"
					cy="5.54"
					r="29.813"
					gradientTransform="matrix(1 0 0 .6663 0 1.849)"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset="0"
						stopColor={`#4168c9${!hovered ? "00   " : ""}`}
					></stop>
					<stop
						offset=".999"
						stopColor={`#4168c9${!hovered ? "00" : ""}`}
						stopOpacity="0"
					></stop>
				</radialGradient>
				<path
					fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
					d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
				></path>
				<path
					fill="#fff"
					d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
				></path>
				<circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
				<path
					fill="#fff"
					d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
				></path>
			</svg>
		</>
	);
};

export default Instagram;
