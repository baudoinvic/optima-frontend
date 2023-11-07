import Navbar from "../../components/site/navbar";
import home from "../../scss/modules/site/home.module.scss"
const Home = () => {
    return ( 
        <div className={home.home}>
            <Navbar />
            <div className={home.homeWrapper}>
                <div className={home.homeContent}>
                    <h1 className={home.heading}>OPTIMA</h1>
                    <p className={home.subHeading}>Empowering Health, One Smile at a Time</p>
                    <p className={home.description}>Optima is a sophisticated software solution designed to streamline and optimize the allocation and monitoring of tasks within a healthcare facility. This system efficiently assigns responsibilities to various hospital staff members, such as doctors, nurses, administrative personnel, and support staff, ensuring that critical functions are carried out promptly and accurately. It enhances communication and coordination by providing a centralized platform for task assignment, real-time tracking, and status updates. This not only improves operational efficiency but also plays a crucial role in patient care, as it helps prioritize and manage medical and non-medical tasks, ultimately enhancing the quality of healthcare services delivered by the hospital.</p>
                    <a href="" className={home.explore}>Explore more</a>
                    <div className={home.socialMedias}>
                        <a href="" target="_blank" className="social-media"><img src={require('../../assets/icons/twitter.svg').default} alt="" /></a>
                        <a href="" target="_blank" className="social-media"><img src={require('../../assets/icons/favebook.svg').default} alt="" /></a>
                        <a href="" target="_blank" className="social-media"><img src={require('../../assets/icons/instagram.svg').default} alt="" /></a>
                    </div>
                </div>
                <div className={home.homeImage}>
                    <img src={require('../../assets/images/home.png')} alt="" draggable="false" />
                </div>
            </div>
        </div>
    );
}
 
export default Home;