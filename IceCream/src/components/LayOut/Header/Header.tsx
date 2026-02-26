import logo from "../../../../public/assets/logo.svg";
import row from './rowNav.svg'
import search from './search.svg'
import basket from './Basket.svg'
import rowContactUs from './rowContactUs.svg'
import style from './_header.module.scss'
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_Container}>
        <div className={style.header_Container_LogoContainer}>
          <img className={style.header_Container_LogoContainer_logo} src={logo} alt="Logo" />
          <h2 className={style.header_Container_LogoContainer_Title}> <span className={style.spanHeader}>Icy</span>Tales</h2>
        </div>
        <div className={style.header_Container_rightContainer}>
          <nav className={style.header_Container_rightContainer_navigatePanel}>
            <ul className={style.header_Container_rightContainer_navigatePanel_list}>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>Home <img src={row} alt="rowNav" /></li>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>About Us</li>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>Pages <img src={row} alt="rowNav" /></li>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>Blog <img src={row} alt="rowNav" /></li>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>Faq's</li> 
            </ul>
          </nav>
          <img src={search} alt="" />
          <img src={basket} alt="" />
          <button className={style.header_Container_rightContainer_ContactUsButton}>Contact Us <img src={rowContactUs} alt="" /></button>
        </div>
      </div>
    </header>
  );
};
export default Header;
