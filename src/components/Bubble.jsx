import { useEffect, useState } from "react";
import "../assets/css/bubble.css";

const Bubble = () => {
	const [pageHeight, setPageHeight] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setPageHeight(document.body.scrollHeight);
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("load", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("load", handleResize);
		};
	}, []);

	const randomWidth = Math.round(Math.random() * 400);
	const topPos = Math.round(Math.random() * pageHeight);
	const leftPos = Math.round(Math.random() * 600);
	const ranCol =
		"#" +
		Math.floor(Math.random() * 0xffffff)
			.toString(16)
			.padEnd(6, "0");

	return (
		<div className="bubble-container">
			<div
				className="bubble"
				style={{
					animation: `rotation ${
						Math.floor(Math.random() * (30 - 10 + 1)) + 10
					}s ease infinite both,
                        moving ${
							Math.floor(Math.random() * (30 - 10 + 1)) + 10
						}s ease infinite forwards,
                        bubbling ${
							Math.floor(Math.random() * (30 - 10 + 1)) + 10
						}s ease-in-out infinite forwards`,
					"--bub-w": `${randomWidth}px`,
					"--top-p": `${topPos}px`,
					"--left-p": `${leftPos}px`,
				}}
			>
				<span style={{ "--random-color": `${ranCol}` }}></span>
				<span style={{ "--random-color": `${ranCol}` }}></span>
				<span style={{ "--random-color": `${ranCol}` }}></span>
				<span style={{ "--random-color": `${ranCol}` }}></span>
				<span style={{ "--random-color": `${ranCol}` }}></span>
			</div>
		</div>
	);
};

export default Bubble;
