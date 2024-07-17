import "./App.css";
import {Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useState} from "react";
import Main from "./pages/Main/Main.tsx";
import SoloLanding from "./pages/SoloLanding/SoloLanding.tsx";
import SoloTask from "./pages/SoloTask/SoloTask.tsx";
import SoloWaitingRoom from "./pages/SoloWaitingRoom/SoloWaitingRoom.tsx";
import SoloInGamePage from "./pages/SoloInGamePage/SoloInGamePage.tsx";
import {SplitLayout, View, SplitCol, ScreenSpinner, ViewProps} from "@vkontakte/vkui";
import {useActiveVkuiLocation} from "@vkontakte/vk-mini-apps-router";
import bridge, {UserInfo} from "@vkontakte/vk-bridge";
import {DEFAULT_VIEW_PANELS} from "./routes.ts";

function App() {
    type ViewOnSwipeBackStartProp = Required<ViewProps>['onSwipeBackStart'];

    const [answers, setAnswers]: [answers: NonNullable<unknown>, setAnswers: Dispatch<SetStateAction<NonNullable<unknown>>>] = useState({});

    const {panel: activePanel = DEFAULT_VIEW_PANELS.MAIN} = useActiveVkuiLocation();
    const [fetchedUser, setUser] = useState<UserInfo | undefined>();
    const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large"/>);

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
            console.log(fetchedUser)
        }
        fetchData();
    }, []);

    const handleSwipeBackStart = useCallback<ViewOnSwipeBackStartProp>(() => {}, []);

    return <SplitLayout popout={popout}>
        <SplitCol>
            <View activePanel={activePanel} onSwipeBackStart={handleSwipeBackStart}>
                <Main id='main'/>
                <SoloLanding id='solo'/>
                <SoloTask id='solo/task'/>
                <SoloWaitingRoom id='solo/game'/>
                <SoloInGamePage id='solo/game/:stage' answers={answers} setAnswers={setAnswers}/>
            </View>
        </SplitCol>
    </SplitLayout>;
}

export default App;
