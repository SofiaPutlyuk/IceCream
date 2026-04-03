import style from './_footer.module.scss'
import logo from "../../../../public/assets/logo.svg";
import { Link } from 'react-router-dom';
import adressIcon from '../../../../public/assets/AdressSvg.svg'
import email from '../../../../public/assets/emailIcon.svg'
import PhoneIcon from '../../../../public/assets/phone.svg';
import faccebookIcon from '../../../../public/assets/facebook.svg'
import instagramIcon from '../../../../public/assets/insta.svg'
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
    return(
        <footer className={style.footer}>
            <div className={style.footer_container}>
                <div className={style.footer_container_logoContainer}>
                    <img className={style.footer_container_logoContainer_logoImg} src={logo} alt="logo" />
                    <h2 className={style.footer_container_logoContainer_title}><span className={style.spanFooter}>Icy</span>Tales</h2>
                </div>
                <div className={style.footer_container_navigationBlock}>
                    <h1 className={style.footer_container_navigationBlock_title}>Navigation</h1>
                    <ul className={style.footer_container_navigationBlock_list}>
                        <li className={style.footer_container_navigationBlock_list_item}><Link to="#" className={style.footer_container_navigationBlock_list_item_link}>Home</Link></li>
                        <li className={style.footer_container_navigationBlock_list_item}><Link to="#" className={style.footer_container_navigationBlock_list_item_link}>About</Link></li>
                        <li className={style.footer_container_navigationBlock_list_item}><Link to="" className={style.footer_container_navigationBlock_list_item_link}>Shop</Link></li>
                        <li className={style.footer_container_navigationBlock_list_item}><Link to="" className={style.footer_container_navigationBlock_list_item_link}>Prodects</Link></li>
                        <li className={style.footer_container_navigationBlock_list_item}><Link to="" className={style.footer_container_navigationBlock_list_item_link}>Blog</Link></li>
                        <li className={style.footer_container_navigationBlock_list_item}><Link to="" className={style.footer_container_navigationBlock_list_item_link}>Contact</Link></li>
                    </ul>
                </div>
                <div className={style.footer_container_locationBlock}>
                    <div className={style.footer_container_locationBlock_adressBlock}>
                        <div className={style.footer_container_locationBlock_adressBlock_iconContainer}>
                            <img src={adressIcon} alt="adreesIcon" />
                        </div>
                        <div className={style.footer_container_locationBlock_adressBlock_textContainer}>
                            <h1 className={style.footer_container_locationBlock_adressBlock_textContainer_title}>Address:</h1>
                            <p className={style.footer_container_locationBlock_adressBlock_textContainer_subTitle}>121 King Street Melbourne, 3000 Australia</p>
                        </div>
                    </div>
                    
                    <div className={style.footer_container_locationBlock_emailBlock}>
                        <div className={style.footer_container_locationBlock_emailBlock_iconContainer}>
                            <img src={email} alt="" />
                        </div>
                        <div className={style.footer_container_locationBlock_emailBlock_textContainer}>
                            <h1 className={style.footer_container_locationBlock_emailBlock_textContainer_title}>Email:</h1>
                            <p className={style.footer_container_locationBlock_emailBlock_textContainer_subTitle}>info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className={style.footer_container_contactsBlock}>
                    <div className={style.footer_container_contactsBlock_phoneContainer}>
                        <div className={style.footer_container_contactsBlock_phoneContainer_phoneIconContainer}>
                            <img src={PhoneIcon} alt="PhoneIcon" />
                        </div>
                        <div className={style.footer_container_contactsBlock_phoneContainer_textContainer}>
                            <h1 className={style.footer_container_contactsBlock_phoneContainer_textContainer_number}>+123456780123</h1>
                            <p className={style.footer_container_contactsBlock_phoneContainer_textContainer_subTitle}>Got Questions? Call us 24/7</p>
                        </div>
                    </div>
                    <div className={style.footer_container_contactsBlock_socialBlock}>
                        <div className={style.footer_container_contactsBlock_socialBlock_iconContainer}>
                            <img src={faccebookIcon} alt="faccebookIcon" />
                        </div>
                        <div className={style.footer_container_contactsBlock_socialBlock_iconContainer}><RiTwitterXFill/></div>
                        <div className={style.footer_container_contactsBlock_socialBlock_iconContainer}>
                            <img src={instagramIcon} alt="instagramIcon" />
                        </div>
                    </div>
                </div>
            </div>
            <p className={style.footer_copyright}>Copyright © 2024 BlackRise Themes Inc All rights reserved.</p>
        </footer>
    )
}
export default Footer;