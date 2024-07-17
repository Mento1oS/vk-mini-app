import style from "../SoloTask/SoloTask.module.css";
import SubmitButton from "../SubmitButton/SubmitButton.tsx";
import Grapes from '../../assets/centre_third.svg';
import {Panel} from "@vkontakte/vkui";

const SoloTask = (props:{id:string}) => {
    return <Panel id={props.id} className={style.animated}>
        <div className={style.container}>
            <div className={style.image}>
                <img className={style.image} src={Grapes} alt="grapes"/>
            </div>
            <div className={style.header}>Тебе необходимо выбрать
                правильные ингредиенты для блюда, которое попросил шеф
            </div>
            <div className={style.description}>Чем больше правильных продуктов ты выберешь, тем выше будет твой рейтинг
            </div>
            <div className={style.button}>
                <SubmitButton text={'Начать'} address={'/solo/game'}/>
            </div>
        </div>
    </Panel>
        ;
};

export default SoloTask;
