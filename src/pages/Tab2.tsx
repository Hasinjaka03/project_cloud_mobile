import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonLabel,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
// Import hooks
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { useState } from 'react';


const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  const [items, setItems] = useState([{ id: 0, value: 'OKee' }, { id: 1, value: 'Bulbizarre' }, { id: 3, value: 'Pikachu' }, { id: 4, value: 'ok' }, { id: 5, value: 'nah Bro' }, { id: 6, value: 'Bonjour' },]);
  // const [pokemons, setPokemons] = useState([{ id: 0, value: 'OKee' }, { id: 1, value: 'Bulbizarre' }, { id: 3, value: 'Pikachu' }, { id: 4, value: 'ok' }, { id: 5, value: 'nah Bro' }, { id: 6, value: 'Bonjour' },]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mix Appareil Access</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonContent>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="10" key={index}>
                  <IonImg src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          <IonRow>
            {items.map(item => {
              return (<IonGrid key={item.id}>
                <IonLabel>{item.value}</IonLabel>
              </IonGrid>
              )
            })}
          </IonRow>

          {/* Pokemon datas */}
          <IonRow>
            {items.map(item => {
              return (<IonGrid key={item.id}>
                <IonLabel>{item.value}</IonLabel>
              </IonGrid>
              )
            })}
          </IonRow>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton onClick={() => takePhoto()} >
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
