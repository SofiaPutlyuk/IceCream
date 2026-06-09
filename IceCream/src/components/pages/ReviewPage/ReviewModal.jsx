import style from './_reviewsModal.module.scss'
import { FaStar } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ReviewModal = ({closeModal}) =>{

    return(
        <>
            <div className={style.backdrop}>
                <IoCloseOutline className={style.backdrop_closeBtn} size={30} onClick={() => closeModal()}/>
                <div className={style.backdrop_reviewForm}>
                    <h1 className={style.backdrop_reviewForm_heading }>Please leave your feedback</h1>
                    <input type="text" placeholder='Write your name' className={style.backdrop_reviewForm_inputName} />
                    <textarea name="comment" id="comment" className={style.backdrop_reviewForm_commentTexteria} placeholder='write your comment'></textarea>
                    <p className={style.backdrop_reviewForm_text}>Rate your experience</p>
                    <div className={style.backdrop_reviewForm_starsContainer}>
                        <FaStar size={18} fill='gray'/>
                        <FaStar size={18} fill='gray'/>
                        <FaStar size={18} fill='gray'/>
                        <FaStar size={18} fill='gray'/>
                    </div>
                    <button className={style.backdrop_reviewForm_sendBtn} onClick={() => closeModal()}>add comment</button>
                </div>
            </div>
        </>
    )
}
export default ReviewModal