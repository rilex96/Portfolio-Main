import codeSnap from "../assets/svg/code-snapshot.png";

const Welcome = () => {
    const welcomeText = 'Dobrodošli na \nmoj portfolio!' ;
    const welcomeLetters = welcomeText.split(/(?!$)/u);

    return (
        <>
            <div className="welcome-wrapper">
                <div className="welcome-text">
                    <div className="welcome-letters" >
                    {welcomeLetters.map((i, index) => (
                            <h1 key={index} style={{ animationDelay: `${index}00ms` }}>
                                {i === " " ? "\u00A0" : i}
                            </h1>
                    ))}
                    </div>
                </div>

                <div className="code-snap">
                    <img src={codeSnap} alt="Code Snap" />
                </div>
            </div>
        </>
    );
};

export default Welcome;
