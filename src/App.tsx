import { Route, Redirect} from 'react-router-dom';
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
import { calculatorOutline, codeSlashOutline, heartHalfOutline, home, personCircleOutline,} from 'ionicons/icons';
import Home from './pages/home';
import profile from './pages/profile';
import clickcounter from './pages/clickcounter';
import calculator from './pages/calculator';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect to="/home" />

          {/* Route declarations */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={profile} />
          <Route exact path="/clickcounter" component={clickcounter}/>
          <Route exact path="/calculator" component={calculator} />
          
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* Tab buttons */}
          <IonTabButton tab="Home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Blank" href="">
            <IonIcon aria-hidden="true" icon={codeSlashOutline} />
            <IonLabel>Blank</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        
 {/*         <IonTabButton tab="clickcounter" href="/clickcounter">
            <IonIcon aria-hidden="true" icon={heartHalfOutline} />
            <IonLabel>Click Counter</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Calculator" href="/calculator">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>Calculator</IonLabel>
          </IonTabButton>
*/}          

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
