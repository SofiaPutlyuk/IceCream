import style from './_iceCream.module.scss'
import { FaSearch } from "react-icons/fa";

const IceCreamPage = () => {
    return <>
        <div className={style.iceCreamHeader}>
            <h1 className={style.iceCreamHeader_name}>Shop Layout</h1>
            <div className={style.iceCreamHeader_navigationContainer}>
                <p className={style.iceCreamHeader_navigationContainer_text}><span className={style.IceCreamSpan}>Home</span> / shop</p>
            </div>
        </div>
        <div className={style.iceCreamContent}>
            <div className={style.iceCreamContent_leftColumn}>
                <div className={style.iceCreamContent_leftColumn_inputContainer}>
                    <input type="text" placeholder='Search' className={style.iceCreamContent_leftColumn_inputContainer_input} name='inputSearch'/>
                    <button className={style.iceCreamContent_leftColumn_inputContainer_btn}><FaSearch size={15} color='grey'/></button>
                </div>
                <div className={style.iceCreamContent_leftColumn_categoriesContainer}>
                    <h1 className={style.iceCreamContent_leftColumn_categoriesContainer_title}>Categories</h1>
                    <ul className={style.iceCreamContent_leftColumn_categoriesContainer_list}>
                        <li className={style.iceCreamContent_leftColumn_categoriesContainer_list_item}>
                            <input type="radio" className={style.iceCreamContent_leftColumn_categoriesContainer_list_item_radioBtn} />
                            Canned Ice Cream
                        </li>
                        <li className={style.iceCreamContent_leftColumn_categoriesContainer_list_item}>
                            <input type="radio" className={style.iceCreamContent_leftColumn_categoriesContainer_list_item_radioBtn}/>
                            Frozen Yogurt
                        </li>
                        <li className={style.iceCreamContent_leftColumn_categoriesContainer_list_item}>
                            <input type="radio" className={style.iceCreamContent_leftColumn_categoriesContainer_list_item_radioBtn}/>
                            Ice Cream Cakes
                        </li>
                        <li className={style.iceCreamContent_leftColumn_categoriesContainer_list_item}>
                            <input type="radio" className={style.iceCreamContent_leftColumn_categoriesContainer_list_item_radioBtn}/>
                            Milkshakes
                        </li>
                        <li className={style.iceCreamContent_leftColumn_categoriesContainer_list_item}>
                            <input type="radio" className={style.iceCreamContent_leftColumn_categoriesContainer_list_item_radioBtn}/>
                            Popsicles
                        </li>
                        <li className={style.iceCreamContent_leftColumn_categoriesContainer_list_item}>
                            <input type="radio" className={style.iceCreamContent_leftColumn_categoriesContainer_list_item_radioBtn}/>
                            Sundaes
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}
export default IceCreamPage;