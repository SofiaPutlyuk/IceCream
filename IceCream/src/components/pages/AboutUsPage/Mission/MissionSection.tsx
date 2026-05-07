import style from './_MissionSection.module.scss'
import peopleImg from '../../../../../public/assets/peopleImg.png'
import arrow from '../../../../../public/assets/rowContactUs.svg'
const MissionSection = () => {
    return(
        <section className={style.missionSection}>
            <div className={style.missionSection_textContainer}>
                <h1 className={style.missionSection_textContainer_title}>Our Mission is to Create Moments</h1>
                <p className={style.missionSection_textContainer_subTitle}>We strive to foster a welcoming and joyful environment where customers of all ages can gather, celebrate, and make lasting memories. Our commitment extends beyond serving great ice cream.</p>
                <button className={style.missionSection_textContainer_readMoreBtn}>Read More <img className={style.missionSection_textContainer_readMoreBtn_arrowIcon} src={arrow} alt="" /></button>
            </div>
            <img className={style.missionSection_peopleImg} src={peopleImg} alt="" />
        </section>
    )
}
export default MissionSection;