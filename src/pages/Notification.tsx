import React, { useState } from 'react';
import axios from 'axios';
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton
} from '@ionic/react';
import useData from '../components/getData';

const NotificationsPage = () => {

  //const [notifications, setNotifications] = useState([
  //  { id: 1, title: 'Notification 1', timestamp: Date.now() },
  //  { id: 2, title: 'Notification 2', timestamp: Date.now() - 600000 },
   // { id: 3, title: 'Notification 3', timestamp: Date.now() - 1200000 }
 // ]);


 const {data,error}= useData("http://localhost:8080/api/enchere/listeEnchereTerminer");

console.log("ary le api faharoa"+data);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  const calculateTimeDifference = (timestamp) => {
    const currentTime = Date.now();
    const parsedTimestamp = Date.parse(timestamp);
    const timeDifference = currentTime - parsedTimestamp;
    let differenceInMinutes = Math.round(timeDifference / 60000);
    let differenceInHours = 0;
    let differenceInDays = 0;
    if(differenceInMinutes > 60){
      differenceInHours = Math.round(differenceInMinutes/60);
      differenceInMinutes = differenceInMinutes%60;
    }
    if(differenceInHours > 24){
      differenceInDays = Math.round(differenceInHours/24);
      differenceInHours = differenceInHours%24;
    }
    if(differenceInDays > 0){
      return `${differenceInDays} jours`;
    }else if(differenceInHours > 0){
      return `${differenceInHours} heures`;
    }else{
      return `${differenceInMinutes} minutes`;
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonBadge color="danger"></IonBadge>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        {data.map(element =>
               <IonItem key={element.idenchere}>
               <IonLabel>
                 <h2>L'enchère {element.description} est terminée</h2>
                 <p> Il y a {calculateTimeDifference(element.dateheureenchere)} </p>
               </IonLabel>
             </IonItem>
            )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default NotificationsPage;
