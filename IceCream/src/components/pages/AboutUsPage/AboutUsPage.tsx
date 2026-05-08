import style from "./_aboutUs.module.scss";
import arrow from '../../../../public/assets/rowContactUs.svg'
import { Link } from "react-router-dom";
import JourneySection from "./Journey/JourneySection";
import MissionSection from "./Mission/MissionSection";
import StatisticsSection from "./Statistics/StatisticsSection";
import MembersSection from "./Members/MembersSection";
const AboutUsPage = () => {
  return (
    <>
      <div className={style.AboutUSBlock}>
        <h1 className={style.AboutUSBlock_title}>About Us</h1>
        <div className={style.AboutUSBlock_navBlock}>
          <p className={style.AboutUSBlock_navBlock_subTitle}><span className={style.active}>Home</span> / About Us</p>
        </div>
      </div>
      <JourneySection/>
      <MissionSection/>
      <StatisticsSection/>
      <MembersSection/>
      <div className={style.subscribtionBlock}>
        <div className={style.subscribtionBlock_container}>
            <h1 className={style.subscribtionBlock_container_name}>Sign up For <span className={style.subscribtionSpan}>Exclusive Deals</span> and Updates</h1>
            <p className={style.subscribtionBlock_container_bonus}>Get 10% off your next order and stay updated with our latest offers.</p>
            <div className={style.subscribtionBlock_container_searchContainer}>
                <input type="text" placeholder="Enter Your Email Address" className={style.subscribtionBlock_container_searchContainer_input} id="input"/>
                <button className={style.subscribtionBlock_container_searchContainer_button}>Subscribe <img className={style.subscribtionBlock_container_searchContainer_button_arrowIcon} src={arrow} alt="" /></button>
            </div>
            <div className={style.subscribtionBlock_container_confirmPoliticalyBlck}>
                <input type="radio" className={style.subscribtionBlock_container_confirmPoliticalyBlck_input} />
                <p className={style.subscribtionBlock_container_confirmPoliticalyBlck_confirmText}>I agree to the <Link to={""} className={style.subscribtionBlock_container_confirmPoliticalyBlck_confirmText_span}>Privacy Policy</Link></p>
            </div>
        </div>
      </div>
    </>
  );
};
export default AboutUsPage;
