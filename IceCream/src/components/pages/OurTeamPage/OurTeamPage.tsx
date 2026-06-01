import style from "./_ourTeamPage.module.scss";
import Serhii from '../../../../public/assets/Serhii.jpg'
import Sophia from '../../../../public/assets/Sophia.png'
import facebook from '../../../../public/assets/facebook.svg'
import instagram from '../../../../public/assets/insta.svg'
import youtube from '../../../../public/assets/youtube.svg'
const OurTeamPage = () => {
  return (
    <>
      <div className={style.outTeamPageHeader}>
        <h1 className={style.outTeamPageHeader_text}>Our Team</h1>
        <div className={style.outTeamPageHeader_navigatioContainer}>
          <p className={style.outTeamPageHeader_navigatioContainer_text}><span className={style.spanTeam}>Home</span> / Team </p>
        </div>
      </div>
      <div className={style.teamContent}>
        <h1 className={style.teamContent_title}>
          Our <span className={style.spanTeam}>Team</span> Members
        </h1>
        <p className={style.teamContent_subTitle}>
          Get to know the friendly faces behind your favorite flavors.
        </p>
        <div className={style.teamContent_teams}>
          <div className={style.teamContent_teams_developerCard}>
            <div className={ style.teamContent_teams_developerCard_imgContainer}>
              <img className={style.teamContent_teams_developerCard_imgContainer_img} src={Serhii} alt=""
              />
            </div>
            <h1 className={style.teamContent_teams_developerCard_name}> Serhii Zamorylo </h1>
            <p className={style.teamContent_teams_developerCard_position}>developer</p>
            <div className={style.teamContent_teams_developerCard_socialMediaContainer}>
              <div className={style.teamContent_teams_developerCard_socialMediaContainer_socialMediaCircle}>
                <img src={facebook} alt="" />
              </div>
              <div className={style.teamContent_teams_developerCard_socialMediaContainer_socialMediaCircle}>
                <img src={instagram} alt="" />
              </div>
              <div className={style.teamContent_teams_developerCard_socialMediaContainer_socialMediaCircle}>
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
          <div className={style.teamContent_teams_developerCard}>
          <div className={ style.teamContent_teams_developerCard_imgContainer}>
              <img className={style.teamContent_teams_developerCard_imgContainer_img} src={Sophia} alt=""
              />
            </div>
            <h1 className={style.teamContent_teams_developerCard_name}>Sophya Pytlyuk</h1>
            <p className={style.teamContent_teams_developerCard_position}>Team Lead / developer</p>
            <div className={style.teamContent_teams_developerCard_socialMediaContainer}>
              <div className={style.teamContent_teams_developerCard_socialMediaContainer_socialMediaCircle}>
                <img src={facebook} alt="" />
              </div>
              <div className={style.teamContent_teams_developerCard_socialMediaContainer_socialMediaCircle}>
                <img src={instagram} alt="" />
              </div>
              <div className={style.teamContent_teams_developerCard_socialMediaContainer_socialMediaCircle}>
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurTeamPage;
