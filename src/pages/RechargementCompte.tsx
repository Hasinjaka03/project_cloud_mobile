import { useState } from 'react';
import { IonContent, IonInput, IonButton } from '@ionic/react';
import { useToast } from 'react-toastify';

const RechargementCompte: React.FC = () => {
  const [montant, setMontant] = useState('');
//  const toast = useToast();

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    const donnee = new FormData();
    donnee.append('montant',montant);
    
    const token = localStorage.getItem('token');
    if(token)
    { 
     const headers = new Headers();
     headers.append('token',token);
     
     const response = await fetch(`http://localhost:8080/api/utilisateur/rechargementCompte`, {
      method: 'POST',
      headers: headers,
      body: donnee
    });
    const data = await response.json();
    if (data.message === 'transaction effectuee') {
      //    toast.success('Transaction effectuée avec succès!', { autoClose: 10000 });
    alert("transation effectuée");
    } 
    else 
    {
   alert("erreur de transaction");
        //  toast.error('Erreur de transaction', { autoClose: 10000 });
    }


    }
    else {
     console.log('Token not found');
    }
   
  
  }

  return (
    <IonContent>
      <form onSubmit={handleSubmit}>
        <IonInput 
          placeholder="montant"
          type="number"
          value={montant}
          onIonChange={e => setMontant(e.detail.value!)}
        />
        <IonButton type="submit">Recharger</IonButton>
      </form>
    </IonContent>
  );
};

export default RechargementCompte;
