import logo from "../../../../public/assets/logo.svg";
import row from '../../../../public/assets/rowNav.svg'
import search from '../../../../public/assets/search.svg'
import basket from '../../../../public/assets/Basket.svg'
import rowContactUs from '../../../../public/assets/rowContactUs.svg'
import style from './_header.module.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../../../public/assets/user-circle-svgrepo-com.svg"
import { NavLink } from "react-router-dom";
const Header = () => {
  const [homeList,setHomeList] = useState(false)
  const [pagesList,setPagesList] = useState(false)
  const [showSearchPanel,setSearchPanel] = useState(false)
  const toggleHomeList = () => {
    setHomeList(!homeList)
  }
  const togglePagesList = () => {
    setPagesList(!pagesList)
  }
  const toggleSearch = () => {
    setSearchPanel(!showSearchPanel)
  }
  const redirectOnPage = useNavigate()
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
              <li className={`${style.header_Container_rightContainer_navigatePanel_list_item} ${style.homeLink}`} onClick={toggleHomeList} style={{color: homeList ? '#F83D8E' : '#0F0200'}}>Home <img src={row} alt="rowNav" style={{fill: homeList ? '#F83D8E' : '#0F0200'}}/></li>
              <ul className={style.homeList} style={{display: homeList ? "block" : "none"}}>
                <li className={style.homeList_Item}>Favourites</li>
                <li className={style.homeList_Item}>Categories</li>
                <li className={style.homeList_Item}>Summer Offers</li>
                <li className={style.homeList_Item}>Best Sellers</li>
                <li className={style.homeList_Item}>Follow Us</li>
              </ul> 
              <li>
                <NavLink className={style.header_Container_rightContainer_navigatePanel_list_item} to={"/aboutUs"} >About Us</NavLink>
              </li>
              <div className={style.header_Container_rightContainer_navigatePanel_list_pagesContainer} onClick={togglePagesList}>
              <li className={`${style.header_Container_rightContainer_navigatePanel_list_item} ${style.pagesLink}`} style={{color: pagesList ? '#F83D8E' : '#0F0200'}} >Pages <img src={row} alt="rowNav" /></li>
                <ul className={style.pagesList} style={{display: pagesList ? "block" : "none"}}>
                  <li className={style.pagesList_Item}>Vegan</li>
                  <li className={style.pagesList_Item}>Artisan</li>
                </ul> 
              </div>
              <li>
                <NavLink className={style.header_Container_rightContainer_navigatePanel_list_item} to={"/Blog"} >Blog</NavLink>
              </li>
              <li>
                <NavLink className={style.header_Container_rightContainer_navigatePanel_list_item} to={"/Faq"}>Faq's</NavLink> 
              </li>
            </ul>
          </nav>
          <div className={style.header_Container_rightContainer_searchContainer}>
            <img src={search} alt="search"  onClick={toggleSearch} style={{cursor:"pointer"}}/>
            <input type="text" className={style.header_Container_rightContainer_searchContainer_searchInput} style={{display: showSearchPanel ? "block": "none"}}/>
          </div>
          <button className={style.header_Container_rightContainer_userContainer} onClick={() => redirectOnPage("/login")}>
            <img className={style.header_Container_rightContainer_userIcon} src={user} alt="" />  
          </button>
          <div className={style.header_Container_rightContainer_basketContainer}>
            <img  className={style.header_Container_rightContainer_basketContainer_icon}src={basket} alt="basket" onClick={() => redirectOnPage("/cart")}/>
            <div className={style.header_Container_rightContainer_basketContainer_counter}>0</div>
          </div>
          <button className={style.header_Container_rightContainer_ContactUsButton} onClick={() => redirectOnPage("/ContactUs")}>Contact Us <img src={rowContactUs} alt="" /></button>
        </div>
      </div>
    </header>
  );
};
export default Header;
