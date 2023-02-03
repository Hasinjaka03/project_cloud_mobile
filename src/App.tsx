import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Detail from './pages/Detail';
import VAssurance from './pages/VAssurance';
import Inscription from './pages/Inscription';
import AjoutEnchere  from './pages/AjoutEnchere';
import AjoutImage from './pages/AjoutImage';
import ListeEnchere  from './pages/ListeEnchere';
import RechargementCompte from './pages/RechargementCompte';
import AjoutProduit from './pages/AjoutProduit';
import Notification from './pages/Notification';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import axios from 'axios';
setupIonicReact();





const App: React.FC = () => (


  

  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/AjoutEnchere">
            <AjoutEnchere />
          </Route>
          <Route exact path="/AjoutImage">
            <AjoutImage />
          </Route>
          <Route exact path="/ListeEnchere">
            <ListeEnchere />
          </Route>
          <Route exact path="/RechargementCompte">
            <RechargementCompte />
          </Route>
          <Route exact path="/AjoutProduit">
            <AjoutProduit />
          </Route>
          <Route exact path="/Notification">
            <Notification />
          </Route>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/inscription">
            <Inscription />
          </Route>
          <Route  path="/detail/:id" component={Detail} />
          <Route  path="/v_assurance/:mois" component={VAssurance} />
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);


export default App;
