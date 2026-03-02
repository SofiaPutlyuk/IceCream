import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import style from './_leyOut.module.scss'


const LayOut = () => {
    return (
    <div className={style.wrapper}>
        <Header/>
            <main className={style.wrapper_layout}>
                <Outlet/>
            </main>
        <Footer/>
    </div>)
}
export default LayOut;