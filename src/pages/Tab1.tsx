import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonCard>
    <img alt="Silhouette of mountains" src="../src/assets/img/love.jpg" />
    <IonCardHeader>
      <IonCardTitle>Honey Grace Dapaton </IonCardTitle>
      <IonCardSubtitle>Student</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Nothing more, nothing less.</IonCardContent>
  </IonCard>
);
}

export default Tab1;
