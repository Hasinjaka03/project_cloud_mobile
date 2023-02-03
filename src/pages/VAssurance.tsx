/* eslint-disable no-template-curly-in-string */
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import { useState } from 'react';
import Cars from '../components/Cars';
import ExploreContainer from '../components/ExploreContainer';
import useData from '../components/getData';
import './Tab3.css';
import { Link } from "react-router-dom"
import { RouteComponentProps } from 'react-router';


interface VAssuranceProps 
extends RouteComponentProps<{
  mois?: string;
}> {}


const Tab3: React.FC<VAssuranceProps> = ({match}) => {
  const { data } = useData("http://localhost:8080/v_assurance/"+match.params.mois);
 
  return (
    <><IonHeader>
    <IonToolbar>
        <IonTitle>Avions</IonTitle>
    </IonToolbar>
</IonHeader><IonCard>
        {data.map(item => {
            return (
                <>
                    <IonCardHeader>
                        <IonCardTitle>{item.nomavion}</IonCardTitle>
                    </IonCardHeader><IonCardContent>
                    <p>envergue:{item.envergue}</p>
                          <p>hauteur:{item.hauteur}</p>
                          <p>masse au decollage:{item.masse_au_decollage}</p>
                          <p>vitesse de croisiere:{item.vitesse_de_croisiere}</p>
                          <p>vitesse max:{item.vitesse_max}</p>
                          <p>rayon max:{item.rayon_max}</p>
                          <p>capacite de kerosene:{item.capacite_kerosene}</p>
                        <p>kilometrage_effectuer :</p>{item.kilometrage_effectuer}
                    </IonCardContent>
                </>

            );
        })}
    </IonCard></>
  );
};

export default Tab3;
