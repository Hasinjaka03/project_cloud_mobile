import { IonContent,IonLabel,IonHeader,IonInput,IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import React,{ useState } from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AjoutImage: React.FC = () => {
  
  
  const history = useHistory();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const idproduit = urlParams.get('idproduit');
 const [image, setImage] = useState('');
 
  const inputRef = React.createRef<HTMLInputElement>();

  const [selectedProduct, setSelectedProduct] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if(e.target) {
        setImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  }
  const handleSubmit = async () => {

    const donnee = new FormData();
    donnee.append('photo',selectedProduct);

    const token = localStorage.getItem('token');
    
    if(token) {
      const headers = new Headers();
      headers.append('token', token);

      const response = await fetch(`http://localhost:8080/api/enchere/AjouterPhoto/${idproduit}`, {
        method: 'POST',
        headers: headers,
        body: donnee
      });
      const data = await response.json();
      if (data.status === '200') {
        alert(data.message);
    //    alert(data.datas); 

        // history.push({
        //   pathname: "/AjoutImage",
        //   search: `?idproduit=${data.datas}`
        //  });

         
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
      <IonLabel>Sélectionner une image</IonLabel>
      <input type="file" ref={inputRef} style={{display: 'none'}} onChange={handleFileChange} />
      <IonButton onClick={() => inputRef.current?.click()}>Parcourir</IonButton>
      <IonLabel>L'image en base64:</IonLabel>
      <IonInput value={image} onIonChange={e => setSelectedProduct(e.detail.value!)} required></IonInput>
        <IonButton onClick={handleSubmit}>Soumettre</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AjoutImage;
