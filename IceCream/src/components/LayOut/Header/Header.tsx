import logo from "../../../../public/assets/logo.svg";
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
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>Home</li>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>About Us</li>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>Pages</li>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>Blog</li>
              <li className={style.header_Container_rightContainer_navigatePanel_list_item}>Faq's</li> 
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
