import style from './_journey.module.scss'
import arrow from '../../../../../public/assets/rowContactUs.svg'
const JourneySection = () => {
    return <>
    <section className={style.journey}>
        <div className={style.journey_container}>
            <div className={style.journey_container_cicleImg}></div>
            <div className={style.journey_container_textContainer}>
                <h1 className={style.journey_container_textContainer_journeyTitle}>Our <span className={style.journeySpan}>Journey</span> Began With a Simple Dream</h1>
                <p className={style.journey_container_textContainer_journeyDescription }>
                Our goal is to make the best ice cream using only the finest,
                natural ingredients. From rich, creamy classics to adventurous
                new creations, every flavor is meticulously crafted in-house to
                ensure the highest quality and freshness.
                </p>
                <p className={style.journey_container_textContainer_journeyDescription }>
                We take pride in offering a diverse range of options, including
                dairy-free, vegan, and gluten-free choices, so everyone can find
                their perfect scoop.
                </p>
                <button className={style.journey_container_textContainer_readMoreBtn}>Read More <img className={style.journey_container_textContainer_readMoreBtn_arrowIcon} src={arrow} alt="" /></button>
            </div>
        </div>
    </section>
    </>
}
export default JourneySection;