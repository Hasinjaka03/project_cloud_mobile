import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar,  IonTabButton} from '@ionic/react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Cars from '../components/Cars';
import ExploreContainer from '../components/ExploreContainer';
import useData from '../components/getData';
import './Detail.css';


interface DetailProps 
extends RouteComponentProps<{
  id?: string;
}> {}


const Detail: React.FC<DetailProps> = ({match}) => {
 const { data, error } = useData("http://localhost:8080/mouvement/"+match.params.id);
 // console.log("NIBJO");
  console.log(data);

  // const [items, setItems] = useState({ data });
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
                        <IonCardTitle>{item.idavion}-{item.nomavion}</IonCardTitle>
                    </IonCardHeader><IonCardContent>
                        <p>date de depart: </p>{item.dateDepart}
                        <p>date d' arrivee: </p>{item.dateaArrivee}
                        <p>lieu de depart: </p>{item.lieu_depart}
                        <p>lieu d' arrivee :</p>{item.lieu_arrivee}
                        <p>kilometrage_effectuer :</p>{item.kilometrage_effectuer}
                    </IonCardContent>
                </>

            );
        })}
    </IonCard></>
  );
};

export default Detail;
