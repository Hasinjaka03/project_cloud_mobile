/* eslint-disable no-template-curly-in-string */
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, IonItem, IonCol } from '@ionic/react';
import { useState } from 'react';
import Cars from '../components/Cars';
import ExploreContainer from '../components/ExploreContainer';
import useData from '../components/getData';
import './Tab3.css';
import { Link } from "react-router-dom"

const Tab3: React.FC = () => {

  const { data, error } = useData("http://localhost:8080/avions");
  const connected  = localStorage.getItem('connected');
  const y = 5;
  console.log("NIBJO");
 // console.log(data);
   console.log(connected);
 // var connected = localStorage.getItem('connected');  
  
  // const [items, setItems] = useState({ data });
  return (
    <IonPage>
         <IonHeader>
           <IonToolbar>
             <IonTitle>Avions</IonTitle>
           </IonToolbar>
         </IonHeader>
      <IonContent >
        <IonRow>
              {data.map(item=>{
                   return(
                    <IonCol>
                    <IonCard color="secondary">
                    <img alt="Silhouette of mountains" src={item.photo} />
                    <IonCardHeader>
                      <IonCardTitle>{item.nomavion}</IonCardTitle>
                      <IonCardSubtitle>{item.capacite}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                          <p>envergue:{item.envergue}</p>
                          <p>hauteur:{item.hauteur}</p>
                          <p>masse au decollage:{item.masse_au_decollage}</p>
                          <p>vitesse de croisiere:{item.vitesse_de_croisiere}</p>
                          <p>vitesse max:{item.vitesse_max}</p>
                          <p>rayon max:{item.rayon_max}</p>
                          <p>capacite de kerosene:{item.capacite_kerosene}</p>
                          { (connected !== null) &&  <Link to={`/detail/${item.idavion}`}>voir detail</Link>
                   }
                    </IonCardContent>
                    
                    </IonCard>
                   </IonCol>
                   );
              })}  
          </IonRow>
       </IonContent>
     </IonPage> 
  );
};

export default Tab3;
