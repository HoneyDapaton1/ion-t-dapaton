import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonAlert, IonActionSheet } from '@ionic/react';
import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonCard>
      <img alt="Demon's Slayer Love Hashira" src={require('../assets/img/love.jpg').default} />
      <IonCardHeader>
        <IonCardTitle>Honey Grace C. Dapaton</IonCardTitle>
        <IonCardSubtitle>Student</IonCardSubtitle>
        <IonCardSubtitle>21</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>Nothing more, nothing less.</IonCardContent>

      <IonButton onClick={() => setShowAlert(true)} expand="block">Quick Facts</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['OK']}
      />

      <IonButton onClick={() => setShowActionSheet(true)} expand="block">Open Action Sheet</IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            handler: () => {
              // Delete action
            }
          },
          {
            text: 'Share',
            handler: () => {
              // Share action
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              // Cancel action
            }
          }
        ]}
      />
    </IonCard>
  );
}

export default Profile;
