import style from './SoloInGamePage.module.css'
import IngredientComponent from "../IngredientComponent/IngredientComponent.tsx";
import ApprovePicture from "../ApprovePicture/ApprovePicture.tsx";
import {Dispatch, SetStateAction, useEffect, useRef, useState, TouchEvent, RefObject} from "react";
import ApprovePic from '../../assets/approve.png';
import DisApprovePic from '../../assets/disapprove.png';
import IngredientPic from '../../assets/ingredient_pic.png';
import {Panel} from "@vkontakte/vkui";
import {useParams, useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import gsap from 'gsap';

const SoloInGamePage = (props: {
    answers: NonNullable<unknown>, setAnswers: Dispatch<SetStateAction<NonNullable<unknown>>>, id: string
}) => {
    const params = useParams();
    const routeNavigator = useRouteNavigator();
    const [timer, setTimer]: [number, Dispatch<SetStateAction<number>>] = useState(30);
    const stage = params?.stage;
    const interval = useRef(0);
    const touchStart = useRef(0);
    const touchEnd = useRef(0);

    const divRef: RefObject<HTMLDivElement> = useRef(null);
    const checkDirection = () => {
        if (touchStart.current > 20 + touchEnd.current) {
            disapproveFunc();
        } else if (touchEnd.current > 20 + touchStart.current) {
            approveFunc();
        }
    }
    const touchStartHandle = (e: TouchEvent): void => {
        touchStart.current = e.touches[0].screenX;
    }
    const touchEndHandle = (e: TouchEvent): void => {
        touchEnd.current = e.changedTouches[0].screenX;
        checkDirection();
    };

    useEffect(() => {
        interval.current = setInterval(() => {
            setTimer(timer - 1);
            if (timer <= 0) {
                disapproveFunc();
            }
        }, 1000);
        return () => clearInterval(interval.current);
    }, [timer]);

    if (!stage) return;
    const onClick = (approved: boolean, answers: NonNullable<unknown>, setAnswers: Dispatch<SetStateAction<NonNullable<unknown>>>, stage: string) => {
        setAnswers({...answers, [stage]: approved});
        setTimer(30);
        const sign = approved?1:-1;
        gsap.timeline({paused:false}).to(divRef.current, {
            opacity: 1,
            transform: `translateX(${sign*100}vw)`,
            duration: 0.1,
            ease: 'ease-in-out',
        }).to(divRef.current,{
            opacity: 0,
            transform: `translateX(${(-sign)*100}vw)`,
            duration: 0,
            ease: 'ease-in-out'
        }).to(divRef.current, {
            opacity: 1,
            transform: 'translateX(0)',
            duration: 0.1,
            ease: 'ease-in-out',
        });
        routeNavigator.push(`/solo/game/${Number(stage) + 1}`);
    }

    const disapproveFunc = onClick.bind(null, false, props.answers, props.setAnswers, stage);
    const approveFunc = onClick.bind(null, true, props.answers, props.setAnswers, stage);

    return <Panel id={props.id}>
        <div className={style.container}>
            <div className={style.picture} onTouchStart={touchStartHandle} onTouchEnd={touchEndHandle} ref={divRef}>
                <IngredientComponent timer={timer} picture={IngredientPic}/>
            </div>
            <div className={style.ingredient}>свиная вырезка</div>
            <div className={style.voteBar}>
                <ApprovePicture picture={DisApprovePic} onClick={disapproveFunc}/>
                <ApprovePicture picture={ApprovePic} onClick={approveFunc}/>
            </div>
        </div>
    </Panel>;
};

export default SoloInGamePage;
