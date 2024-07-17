/** @format */
import style from './SoloWaitingRoom.module.css'
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import DishPicture from "../DishPicture/DishPicture.tsx";
import DishPic from '../../assets/dish_picture.png'
import {Panel} from "@vkontakte/vkui";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

const SoloWaitingRoom = (props: { id: string }) => {
    const [counter, setCounter]: [counter: number, useCounter: Dispatch<SetStateAction<number>>] = useState(3);
    const routeNavigator = useRouteNavigator();
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter - 1);
            if (counter <= 1) {
                routeNavigator.push('/solo/game/1');
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [counter]);
    return <Panel id={props.id}>
        <div className={style.container}>
            <div className={style.picture}>
                <DishPicture picture={DishPic}/>
            </div>
            <div className={style.header}>до старта</div>
            <div className={String(style.counter)}>{counter}</div>
        </div>
    </Panel>;
};

export default SoloWaitingRoom;
