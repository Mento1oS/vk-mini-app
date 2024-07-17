/** @format */
import style from './SoloLanding.module.css'
import SubmitButton from "../SubmitButton/SubmitButton.tsx";
import {Panel} from "@vkontakte/vkui";
function SoloLanding(props:{id:string}){
  return <Panel id={props.id} className={style.animated}>
    <div className={style.container}>
      <div className={style.layers}>
        <div className={style.task}>
          Приготовь мне мясо по-французски
        </div>
        <div className={style.button}>
          <SubmitButton text={'Я готов'} address={'/solo/task'}/>
        </div>
      </div>
    </div>
  </Panel>;
}

export default SoloLanding;