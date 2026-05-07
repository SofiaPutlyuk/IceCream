import style from "./_statistics.module.scss";
const StatisticsSection = () => {
  return (
    <section className={style.statisticSection}>
      <div className={style.statisticSection_container}>
        <h1 className={style.statisticSection_container_titleSection}>
          Our <span className={style.statisticsSpan}>Statistics</span>
        </h1>
        <p className={style.statisticSection_container_subTitleSection}>
          What makes us special through our impressive statistics.
        </p>
        <div className={style.statisticSection_container_valuesContainer}>
          <div className={style.statisticSection_container_statisticContainer}>
            <h1 className={style.statisticSection_container_statisticContainer_value}>91<span className={style.statisticSpan}>+</span></h1>
            <p className={style.statisticSection_container_statisticContainer_statisticLabel}>Awards Win</p>
          </div>
          <div className={style.statisticSection_container_statisticContainer}>
            <h1 className={style.statisticSection_container_statisticContainer_value}>95<span className={style.statisticSpan}>%</span></h1>
            <p className={style.statisticSection_container_statisticContainer_statisticLabel}>Satisified Clients</p>
          </div>
          <div className={style.statisticSection_container_statisticContainer}>
            <h1 className={style.statisticSection_container_statisticContainer_value}>48<span className={style.statisticSpan}>+</span></h1>
            <p className={style.statisticSection_container_statisticContainer_statisticLabel}>Years of Experience</p>
          </div>
          <div className={style.statisticSection_container_statisticContainer}>
            <h1 className={style.statisticSection_container_statisticContainer_value}>143<span className={style.statisticSpan}>+</span></h1>
            <p className={style.statisticSection_container_statisticContainer_statisticLabel}>Employees Working</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatisticsSection;
