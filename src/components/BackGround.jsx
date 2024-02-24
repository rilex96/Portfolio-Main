import Bubble from "./Bubble";

const BackGround = () => {
	const bubbles = Math.round(Math.random() * 15);
	let componentsArr = [];
	for (let i = 0; i <= bubbles; i++) {
		componentsArr.push(<Bubble key={i} />);
	}
	return <>{componentsArr}</>;
};

export default BackGround;
