import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

// CSS
//import './profile.css';

  const Home: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>Welcome to my Simple App</h2>
          <p> Let's Go!</p>
          <IonButton expand="block" routerLink="/profile.tsx">Go to My Profile</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  export default Home;

