import React, { useState } from 'react';
import { IonContent,IonList,IonMenu,IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonItem } from '@ionic/react';


const Inscription: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const donnee = new FormData();
    donnee.append('nom',firstName);
    donnee.append('prenom',lastName);
    donnee.append('email',email);
    donnee.append('mdp',password);
  
    const response = await fetch('http://localhost:8080/api/utilisateur/Inscription', {
      method: 'POST',
      body: donnee
    });

    if(response.ok){
      //traitement de la réponse OK
      const data = await response.json();
      alert(data.message);
     }else{
      alert("erreur");
   }

  }
  return (
    <IonPage>
       
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Nom</IonLabel>
            <IonInput value={firstName} onIonChange={e => setFirstName(e.detail.value!)} required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Prénom</IonLabel>
            <IonInput value={lastName} onIonChange={e => setLastName(e.detail.value!)} required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Mot de passe</IonLabel>
            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required></IonInput>
          </IonItem>
          <IonButton type="submit" expand="block" className="submit-button">S'inscrire</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Inscription;
