/** @format */
import style from './Main.module.css'
import RecieptsPic from '../../assets/reciepts.png'
import DuelsPic from '../../assets/duels.png'
import RatingPic from '../../assets/rating.png'
import UrKitchen from '../../assets/ur_kitchen.png'
import {Panel} from "@vkontakte/vkui";
import {RouterLink} from "@vkontakte/vk-mini-apps-router";
const Main = (props:{id:string}) => {
    return <Panel id={props.id} className={style.animated}>
        <div className={style.container}>
            <h1 className={style.header}>
                Выберите режим игры
            </h1>
            <div className={style.modes}>
                <RouterLink className={style.link} to={'/solo'}>
                    <div className={style.mode}>
                        <img src={RecieptsPic} className={style.mode_pic} alt="reciepts"/>
                    </div>
                </RouterLink >
                <RouterLink  className={style.link} to={'/solo'}>
                    <div className={style.mode}>
                        <img src={DuelsPic} className={style.mode_pic} alt="duels"/>
                    </div>
                </RouterLink >
                <RouterLink  className={style.link} to={'/solo'}>
                    <div className={style.mode}>
                        <img src={RatingPic} className={style.mode_pic} alt="rating"/>
                    </div>
                </RouterLink >
                <RouterLink  className={style.link} to={'/solo'}>
                    <div className={style.mode}>
                        <img src={UrKitchen} className={style.mode_pic} alt="ur_kitchen"/>
                    </div>
                </RouterLink >
            </div>
        </div>
    </Panel>
        ;
}

export default Main;
