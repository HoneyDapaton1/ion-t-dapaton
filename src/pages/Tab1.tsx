import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonCard, IonCardContent, IonCardHeader, 
          IonCardSubtitle, IonCardTitle, IonAlert, IonButton,  IonActionSheet} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonCard>
    <img alt="Silhouette of mountains" src="../src/assets/img/love.jpg"/>
    <IonCardHeader>
      <IonCardTitle>Honey Grace Dapaton </IonCardTitle>
      <IonCardSubtitle>Student</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Nothing more, nothing less.</IonCardContent>

    <IonButton id="present-alert" expand="block">Quick Facts </IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>
    
    <IonButton id="open-action-sheet" expand="block">Open Action Sheet </IonButton>
    <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>



  </IonCard>
);
}

export default Tab1;
