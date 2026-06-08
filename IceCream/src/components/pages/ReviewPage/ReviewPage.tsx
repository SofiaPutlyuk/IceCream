import style from './_reviews.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Serhii from '../../../../public/assets/Serhii.jpg'
import { FaRegStar } from "react-icons/fa";
import ReviewModal from './ReviewModal';
const ReviewPage = () => {
    return (
        <>
            <div className={style.reviewsHeader}>
                <h1 className={style.reviewsHeader_title}>Review</h1>
                <div className={style.reviewsHeader_navigationContainer}>
                    <p className={style.reviewsHeader_navigationContainer_text}> <span className={style.reviewsSpan}>Home</span> / Review</p>
                </div>
            </div>
            <div className={style.reviewContainer}>
                <h1 className={style.reviewContainer_title}>Hear From Our <span className={style.reviewsSpan}>Gelato</span> Enthusiasts</h1>
                <p className={style.reviewContainer_subTitle}>Read testimonials from those who have enjoyed our artisan gelato.</p>
                <div className={style.reviewContainer_reviewContent}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true,dynamicBullets: true }}
                        slidesPerView={3}
                        spaceBetween={30}
                    >
                        <SwiperSlide className={style.reviewContainer_reviewContent_comment}>
                            <div className={style.reviewContainer_reviewContent_comment_container}>
                                <p className={style.reviewContainer_reviewContent_comment_container_text}>jhgkhj</p>
                                <div className={style.reviewContainer_reviewContent_comment_container_authorContainer}>
                                    <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_authorCircle}>
                                        <img src={Serhii} alt="" className={style.reviewContainer_reviewContent_comment_container_authorContainer_authorCircle} />
                                    </div>
                                    <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer}>
                                        <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_rating}>
                                        <FaRegStar size={13}  />
                                        </div>
                                        <h1 className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_name}>Serhii</h1>
                                        <p className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_satisfaction}>Happy Client</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.reviewContainer_reviewContent_comment}>
                            <div className={style.reviewContainer_reviewContent_comment_container}>
                                <p className={style.reviewContainer_reviewContent_comment_container_text}>jhgkhj</p>
                                <div className={style.reviewContainer_reviewContent_comment_container_authorContainer}>
                                    <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_authorCircle}>
                                        <img src={Serhii} alt="" className={style.reviewContainer_reviewContent_comment_container_authorContainer_authorCircle} />
                                    </div>
                                    <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer}>
                                        <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_rating}></div>
                                        <h1 className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_name}>Serhii</h1>
                                        <p className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_satisfaction}>Happy Client</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide >
                        <SwiperSlide className={style.reviewContainer_reviewContent_comment}>
                            <div className={style.reviewContainer_reviewContent_comment_container}>
                                <p className={style.reviewContainer_reviewContent_comment_container_text}>jhgkhj</p>
                                <div className={style.reviewContainer_reviewContent_comment_container_authorContainer}>
                                    <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_authorCircle}>
                                        <img src={Serhii} alt="" className={style.reviewContainer_reviewContent_comment_container_authorContainer_authorCircle} />
                                    </div>
                                    <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer}>
                                        <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_rating}></div>
                                        <h1 className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_name}>Serhii</h1>
                                        <p className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_satisfaction}>Happy Client</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.reviewContainer_reviewContent_comment}>
                            <div className={style.reviewContainer_reviewContent_comment_container}>
                                <p className={style.reviewContainer_reviewContent_comment_container_text}>jhgkhj</p>
                                <div className={style.reviewContainer_reviewContent_comment_container_authorContainer}>
                                    <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_authorCircle}>
                                        <img src={Serhii} alt="" className={style.reviewContainer_reviewContent_comment_container_authorContainer_authorCircle} />
                                    </div>
                                    <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer}>
                                        <div className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_rating}></div>
                                        <h1 className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_name}>Serhii</h1>
                                        <p className={style.reviewContainer_reviewContent_comment_container_authorContainer_textContainer_satisfaction}>Happy Client</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <button className={style.reviewContainer_reviewContent_addReviewBtn}>Add review</button>
                    <ReviewModal/>
                </div>
            </div>
        </>
    )
}
export default ReviewPage;