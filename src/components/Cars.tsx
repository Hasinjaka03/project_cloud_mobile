import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton,
    IonPage,
    IonCol,
    IonGrid,
    IonImg,
    IonLabel,
    IonRow,
    IonItem
} from '@ionic/react';


import useData from "./getData";


const Cars: React.FC = () => {
    const { data, error } = useData("http://localhost:8080/voitures");

    if (!data) {
        return <h1>Loading...</h1>;
    } else {
        return (

            <IonPage>
                <IonContent>
                    {/* {data.map(item => {
                        return (
                            <IonItem key={item.id}>
                                <IonLabel>{item.value}</IonLabel>
                            </IonItem>
                        )
                    })} */}
                    <IonLabel>Bonjou</IonLabel>
                </IonContent>
            </IonPage>
        )
    }
};

export default Cars;