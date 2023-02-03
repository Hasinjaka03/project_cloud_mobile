import React, { useState } from 'react';
import { IonContent,IonMenu,IonList,IonRouterLink,IonIcon,IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonItem, IonButtons, IonMenuButton } from '@ionic/react';
import { lockClosedOutline } from 'ionicons/icons';
import axios from 'axios';
const Tab1: React.FC = () => {
  const [username, setUsername] = useState('hardi@gmail.com');
  const [password, setPassword] = useState('hardi');

  const deconnexion = () => {
    localStorage.removeItem('token');
    localStorage.clear();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', username);
    data.append('mdp', password);



    // axios 
    // .get("http://localhost:8080/api/enchere/listeEnchere") 
    // .then(res => { 
    //     console.log("test hoe hitany V "+res.data);
    //   // localStorage.setItem('connected',res.data);
    //   // setData(res.data);
    //   // console.log(localStorage.getItem('connected'));
    //   // history.push("tab3");
    //  })
    // .catch(error => console.log(error));
    


    const response = await fetch('http://localhost:8080/api/utilisateur/login', {
      method: 'POST',
      body: data
    });

    if(response.ok){
       //traitement de la réponse OK
       const data = await response.json();
       console.log(data.datas);
       alert(data.message);
       localStorage.setItem('token',data.datas);
    
      }else{
       //traitement de la réponse KO
       console.log("failed");
       alert("erreur");
    }
  }

  return (
    <>
    <IonMenu contentId="main-content">
    <IonHeader>
        
      <IonToolbar color="tertiary">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonList>
        <IonItem>
          <IonButton href="/AjoutEnchere">Ajouter une enchère</IonButton>
        </IonItem>
        <IonItem>
          <IonButton href="/RechargementCompte">Rechargement compte</IonButton>
        </IonItem>
        <IonItem>
          <IonButton href="/ListeEnchere">Enchère user</IonButton>
        </IonItem>
        <IonItem>
          <IonButton href="/Notification">Voir notification</IonButton>
        </IonItem>
        <IonItem>
              <IonButton onClick={deconnexion}>se deconnecter</IonButton>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
    <IonPage  id="main-content">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton/>
        </IonButtons>
          <IonTitle>Connexion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Nom d'utilisateur</IonLabel>
            <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)} required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Mot de passe</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required></IonInput>
            <IonIcon icon={lockClosedOutline} className="icon" slot="end" />
          </IonItem>
          <IonButton type="submit" expand="block">Se connecter</IonButton>
        </form>
        <IonRouterLink href="/inscription" className="register-link">
          <IonButton className="register-button">Inscription</IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab1;


