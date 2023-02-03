import React, { useState } from 'react';
import { IonContent, IonInput, IonTextarea, IonButton } from '@ionic/react';
import { useHistory } from "react-router-dom";


const AjoutEnchere: React.FC = () => {
  const history = useHistory();
  const [description, setDescription] = useState('');
  const [minimumPrice, setMinimumPrice] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const donnee = new FormData();
    donnee.append('description',description);
    donnee.append('prixminimumvente',minimumPrice);
    donnee.append('durreenchere',duration);

    const token = localStorage.getItem('token');
    if(token)
    { 
     const headers = new Headers();
     headers.append('token',token);
     const response = await fetch(`http://localhost:8080/api/enchere/AjoutEnchere`, {
      method: 'POST',
      headers: headers,
      body: donnee
    });
    const data = await response.json();
    if (data.status === '200') {
      //    toast.success('Transaction effectuée avec succès!', { autoClose: 10000 });
            alert(data.message);
            alert(data.datas);
                // add code to handle form submission
            history.push({
              pathname: "/AjoutProduit",
              search: `?data=${data.datas}`
            });
    } 
    else if(data.status === '400')
    {
    alert(data.message);
        //  toast.error('Erreur de transaction', { autoClose: 10000 });
    }
    else {
      alert(data.message);
    }

    }
    else {
     console.log('Token not found');
    }
   


  }

  return (
    <IonContent>
      <form onSubmit={handleSubmit}>
        <IonTextarea 
          placeholder="Description de l'enchère"
          value={description}
          onIonChange={e => setDescription(e.detail.value!)}
        />
        <IonInput 
          placeholder="Prix minimum de vente"
          type="number"
          value={minimumPrice}
          onIonChange={e => setMinimumPrice(e.detail.value!)}
        />
        <IonInput 
          placeholder="Durée de l'enchère (en minutes)"
          type="number"
          value={duration}
          onIonChange={e => setDuration(e.detail.value!)}
        />
        <IonButton type="submit">Ajouter l'enchère</IonButton>
      </form>
    </IonContent>
  );
};

export default AjoutEnchere;
