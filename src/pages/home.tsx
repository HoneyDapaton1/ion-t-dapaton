import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail, IonIcon,
} from '@ionic/react';
import { calculatorOutline, codeSlashOutline, heartHalfOutline } from 'ionicons/icons';

function home () {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Welcome to APPLET</IonCardTitle>
        <IonCardSubtitle>Click buttons to proceed</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
            <IonIcon aria-hidden="true" icon={heartHalfOutline} />
            </IonThumbnail>
            <IonLabel>Click Counter</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            </IonThumbnail>
            <IonLabel>Calculator</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
            <IonIcon aria-hidden="true" icon={codeSlashOutline} />
            </IonThumbnail>
            <IonLabel>Blank</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
            <IonIcon aria-hidden="true" icon={codeSlashOutline} />
            </IonThumbnail>
            <IonLabel>Blank</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}
export default home;