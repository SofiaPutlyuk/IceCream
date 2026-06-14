import style from './_comingSoonPage.module.scss'
import logo from '../../../../public/assets/logo.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const ComingSoonPage = () => {
    return (
        <>
            <div className={style.comingSoonContainer}>
                <div className={style.comingSoonContainer_logoContainer}>
                    <img src={logo} alt="" />
                    <h1 className={style.comingSoonContainer_logoContainer_logoText}><span className={style.logoSpan}>Icy</span>Tales</h1>
                </div>
                <h1 className={style.comingSoonContainer_nameText}>Coming Soon</h1>
                <p className={style.comingSoonContainer_subTitle}>Be the first to know when our new site is live</p>
                <div className={style.comingSoonContainer_searchPanel}>
                    <input type="email" placeholder='Email Address' className={style.comingSoonContainer_searchPanel_input}/>
                    <button type='submit' className={style.comingSoonContainer_searchPanel_submitBtn}>Submit</button>
                </div>
                <div className={style.comingSoonContainer_socialContainer}>
                    <div className={style.comingSoonContainer_socialContainer_item}><FaFacebookF fill='#F83D8E' size={16}/></div>
                    <div className={style.comingSoonContainer_socialContainer_item}><FaInstagram fill='#F83D8E' size={16}/></div>
                    <div className={style.comingSoonContainer_socialContainer_item}><FaLinkedinIn fill='#F83D8E' size={16}/></div>
                    <div className={style.comingSoonContainer_socialContainer_item}><FaPinterestP fill='#F83D8E' size={16}/></div>
                </div>
            </div>
        </>
    )
}
export default ComingSoonPage;