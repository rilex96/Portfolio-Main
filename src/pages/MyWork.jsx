import aceprod from "../assets/siteImg/aceproduction.png";
import airsoft from "../assets/siteImg/airsoft.png";
import blockbeatz from "../assets/siteImg/blockbeatz.png";

const MyWork = () => {
    return (
        <>
            <div className="mywork-wrapper">
                <h2>Moji projekti</h2>
                <div className="project-cards">
                    {projects.map((site) => (
                        <a
                            href={site.pLink}
                            className="card"
                            key={site.id}
                            target="_blank"
                            referrerPolicy="norefferer"
                        >
                            <img src={site.pImage} alt={site.pImage} />
                            <p>Kliknite da pristupite sajtu ⟫</p>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyWork;

const projects = [
    {
        id: 1,
        pLink: "https://airsoft.rilexwebdev.com",
        pImage: airsoft,
    },
    {
        id: 2,
        pLink: "https://aceproduction.rilexwebdev.com",
        pImage: aceprod,
    },
    {
        id: 3,
        pLink: "https://www.blockbeatzofficial.com/",
        pImage: blockbeatz,
    },
    
];
