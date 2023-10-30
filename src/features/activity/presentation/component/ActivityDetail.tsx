import {IonCol, IonRow, IonText} from "@ionic/react";
import Activity from "../../domain/model/Activity";
import './ActivityDetail.css';

interface Props{
    activity: Activity
}
const ActivityDetail: React.FC<Props> = (props: Props) => {
    return <IonCol>
        <IonRow>
            <IonText className={'activity_title'}>{
                props.activity.activity}</IonText>
        </IonRow>
        <IonRow>
            <IonText className={'activity_type'}>{
                props.activity.type}</IonText>
        </IonRow>
        <IonRow>
            <IonText className={'activity_price'}>{
                `price - ${props.activity.price}`}</IonText>
        </IonRow>
    </IonCol>
}

export default ActivityDetail;