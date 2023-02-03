import "./ExploreContainer.css";

import useFetch from "../components/useFetch";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

const ExploreContainer: React.FC = () => {
  const { data, refetch } = useFetch("https://v2.jokeapi.dev/joke/any");

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    console.log(data);
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>CardExamples</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Category: {data?.category}</IonCardSubtitle>
              <IonCardTitle>{data?.setup}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{data?.delivery}</IonCardContent>
            <IonButton onClick={refetch}>Refresh</IonButton>
          </IonCard>

          <div className="container">
            <p>
              Ionic React Custom API Hook Example{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ionicframework.com/docs/components"
              >
                UI Components
              </a>
            </p>
          </div>
        </IonContent>
      </IonPage>
    );
  }
};

export default ExploreContainer;