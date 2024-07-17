/** @format */
import style from './SubmitButton.module.css'
import {RouterLink} from "@vkontakte/vk-mini-apps-router";
const SubmitButton = (props:{address:string, text:string}) => {
  return <div className={style.wrapper}>
    <RouterLink className={style.text} to={props.address}>{props.text}</RouterLink >
  </div>;
};

export default SubmitButton;
