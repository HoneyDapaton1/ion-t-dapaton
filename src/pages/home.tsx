import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonItem,IonLabel,IonList,IonThumbnail,IonIcon, IonRouterLink
} from '@ionic/react';

import { calculatorOutline, closeOutline, listOutline, speedometerOutline } from 'ionicons/icons';

function home () {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="welcome-text">
        <h1>Welcome to my App!</h1>
        <IonCard className="custom-card">
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                <IonRouterLink href="./clickcounter">
                <IonIcon icon={speedometerOutline} style={{ fontSize: '4rem' }} />
                    </IonRouterLink>
                </IonThumbnail>
                <IonLabel>Click Counter</IonLabel>
              </IonItem>
              <br />
              <IonItem>
                <IonThumbnail slot="start">
                <IonRouterLink href="./calculator">
                <IonIcon icon={calculatorOutline} style={{ fontSize: '4rem' }} />
                    </IonRouterLink>
                </IonThumbnail>
                <IonLabel>Calculator</IonLabel>
              </IonItem>
              <br />
              <IonItem>
                <IonThumbnail slot="start">
                <IonRouterLink href="./todolist">
                <IonIcon icon={listOutline} style={{ fontSize: '4rem' }} />
                    </IonRouterLink>
                </IonThumbnail>
                <IonLabel>Todo list</IonLabel>
              </IonItem>
              <br />
              <IonItem>
                <IonThumbnail slot="start">
                <IonRouterLink href="">
                <IonIcon icon={closeOutline} style={{ fontSize: '4rem' }} />
                    </IonRouterLink>
                </IonThumbnail>
                <IonLabel>Blank</IonLabel>
              </IonItem>


            </IonList>
          </IonCardContent>
        </IonCard>
      </div>
    </IonContent>
  </IonPage>
);
};
export default home;