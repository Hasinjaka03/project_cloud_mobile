import React, { useState, useEffect } from 'react';
import { IonGrid, IonRow, IonCol, IonLabel } from '@ionic/react';


const ListeEnchere = () => {
  
const [items, setItems] = useState<any[]>([]);

useEffect(() => {
const token = localStorage.getItem('token');
if(token){
const headers = new Headers();
headers.append('token', token);
fetch(`https://tranquil-pie-production.up.railway.app/api/enchere/ListeEnchereUser`, {
  headers: headers
})
  .then(res => res.json())
  .then(data => {
    setItems(data);
  })
  .catch(error => {
    console.log(error);
  });

  
}
else {
console.log('Token not found');
}
}, []);

return (
<IonGrid>
<IonRow>
<IonCol>
<IonLabel>Description de l'enchere</IonLabel>
</IonCol>
<IonCol>
<IonLabel>Prix Minimum de Vente</IonLabel>
</IonCol>
<IonCol>
<IonLabel>Durree enchère</IonLabel>
</IonCol>
<IonCol>
<IonLabel>Date et heure enchère</IonLabel>
</IonCol>
<IonCol>
<IonLabel>Status</IonLabel>
</IonCol>
<IonCol>
<IonLabel>nom du produit</IonLabel>
</IonCol>
<IonCol>
<IonLabel>description du produit</IonLabel>
</IonCol>
<IonCol>
<IonLabel>categorie du produit</IonLabel>
</IonCol>
</IonRow>
{items.map(item => (
  <IonRow key={item[0]}>
    <IonCol>
      <IonLabel>{item[2]}</IonLabel>
    </IonCol>
    <IonCol>
      <IonLabel>{item[3]}</IonLabel>
    </IonCol>
    <IonCol>
      <IonLabel>{item[4]}</IonLabel>
    </IonCol>
    <IonCol>
      <IonLabel>{item[5]}</IonLabel>
    </IonCol>
    <IonCol>
    <IonLabel>{item[6] === 1 ? 'Terminé' : item[6] === 2 ? 'En cours' : 'Ça ne commence pas encore'}</IonLabel>
    </IonCol>
    <IonCol>
      <IonLabel>{item[7]}</IonLabel>
    </IonCol>
    <IonCol>
      <IonLabel>{item[8]}</IonLabel>
    </IonCol>
    <IonCol>
      <IonLabel>{item[9]}</IonLabel>
    </IonCol>
  </IonRow>
))}

</IonGrid>
);
};

export default ListeEnchere;