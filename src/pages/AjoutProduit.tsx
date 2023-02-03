import { IonContent,IonLabel,IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AjoutProduit: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const idenchere = urlParams.get('data');

  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSubmit = async () => {
    const donnee = new FormData();
    donnee.append('idProduit',selectedProduct);

    const token = localStorage.getItem('token');
    if(token) {
      const headers = new Headers();
      headers.append('token', token);
      const response = await fetch(`http://localhost:8080/api/enchere/ProduitEnchere/${idenchere}`, {
        method: 'POST',
        headers: headers,
        body: donnee
      });
      const data = await response.json();
      if (data.status === '200') {
        alert(data.message);
        alert(data.datas); 

        history.push({
          pathname: "/AjoutImage",
          search: `?idproduit=${data.datas}`
         });

         
      } else {
        alert(data.message);
      }
    } else {
      console.log('Token not found');
    }
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ajout de produit aux enchères</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonLabel>Choisir un produit:</IonLabel>
<IonSelect value={selectedProduct} onIonChange={e => setSelectedProduct(e.detail.value)} style={{backgroundColor: "blue", border: "1px solid blue"}}>
          <IonSelectOption value="7">Bijoux</IonSelectOption>
          <IonSelectOption value="8">Collier</IonSelectOption>
          <IonSelectOption value="9">Bague</IonSelectOption>
        </IonSelect>
        <IonButton onClick={handleSubmit}>Soumettre</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AjoutProduit;
