import {IonButton, IonCol, IonContent, IonPage, IonRow, IonText, useIonViewWillEnter} from '@ionic/react';
import './RandomActivityPage.css';
import {useAppDispatch} from "../../../../general/hooks";
import {useSelector} from "react-redux";
import {AppStore} from "../../../../general/redux/types";
import {ActivityStore} from "../redux/types";
import {getRandomActivity} from "../redux/asyncActions";
import ActivityDetail from "../component/ActivityDetail";

const RandomActivityPage: React.FC = () => {

    const dispatch = useAppDispatch();
    const {randomActivity, error} = useSelector<AppStore, ActivityStore>(
        (store) => store.activity
    )
    const getRandomClick = () => {
        dispatch(getRandomActivity());
    }
    useIonViewWillEnter(() => {
        getRandomClick();
    });
    return (
        <IonPage id="home-page">
            <IonContent fullscreen>
                <IonCol>
                    <IonRow>
                        {(error)?
                            <IonText className={'title'}>{
                                error}</IonText>:
                            <ActivityDetail activity={randomActivity}/>
                        }
                    </IonRow>
                    <IonRow>
                        <IonButton onClick={() => {
                            getRandomClick()
                        }}>Regenerate</IonButton>
                    </IonRow>
                </IonCol>
            </IonContent>
        </IonPage>
    );
};

export default RandomActivityPage;