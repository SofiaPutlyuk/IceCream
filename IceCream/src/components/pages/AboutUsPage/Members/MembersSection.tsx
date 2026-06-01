import style from "./_members.module.scss";
import { useRef } from "react";
import Serhii from '../../../../../public/assets/Serhii.jpg'
import Sophia from '../../../../../public/assets/Sophia.png'
import facebook from '../../../../../public/assets/facebook.svg'
import instagram from '../../../../../public/assets/insta.svg'
import youtube from '../../../../../public/assets/youtube.svg'
const MembersSection = () => {
  return (
    <section className={style.membersSection}>
      <h1 className={style.membersSection_title}>
        Our <span className={style.membersSpan}>Team</span> Members
      </h1>
      <p className={style.membersSection_subTitle}>
        Get to know the friendly faces behind your favorite flavors.
      </p>
      <div className={style.membersSection_sliderContainer}>
        <div className={style.membersSection_sliderContainer_sliderCard}>
          <div className={style.membersSection_sliderContainer_sliderCard_imgContainer}>
            <img className={style.membersSection_sliderContainer_sliderCard_imgContainer_img} src={Serhii} alt="" />
          </div>
          <h1 className={style.membersSection_sliderContainer_sliderCard_name}>Serhii Zamorylo</h1>
          <p className={style.membersSection_sliderContainer_sliderCard_position}>developer</p>
          <div className={style.membersSection_sliderContainer_sliderCard_socialMediaContainer}>
            <div className={style.membersSection_sliderContainer_sliderCard_socialMediaContainer_socialMediaCircle}>
              <img src={facebook} alt="" />
            </div>
            <div className={style.membersSection_sliderContainer_sliderCard_socialMediaContainer_socialMediaCircle}>
              <img src={instagram} alt="" />
            </div>
            <div className={style.membersSection_sliderContainer_sliderCard_socialMediaContainer_socialMediaCircle}>
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
        <div className={style.membersSection_sliderContainer_sliderCard}>
          <div className={style.membersSection_sliderContainer_sliderCard_imgContainer}>
          <img className={style.membersSection_sliderContainer_sliderCard_imgContainer_img} src={Sophia} alt="" />
          </div>
          <h1 className={style.membersSection_sliderContainer_sliderCard_name}>Sophya Pytlyuk</h1>
          <p className={style.membersSection_sliderContainer_sliderCard_position}>Team Lead / developer</p>
          <div className={style.membersSection_sliderContainer_sliderCard_socialMediaContainer}>
            <div className={style.membersSection_sliderContainer_sliderCard_socialMediaContainer_socialMediaCircle}>
              <img src={facebook} alt="" />
            </div>
            <div className={style.membersSection_sliderContainer_sliderCard_socialMediaContainer_socialMediaCircle}>
              <img src={instagram} alt="" />
            </div>
            <div className={style.membersSection_sliderContainer_sliderCard_socialMediaContainer_socialMediaCircle}>
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MembersSection;
