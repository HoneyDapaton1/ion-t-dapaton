import React, { useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonButton,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { speedometerOutline, calculator, chatbubble, listCircleOutline, readerOutline } from 'ionicons/icons';
import './home.css';

const cardData = [
  {
    title: 'Click Counter',
    subtitle: 'Click! Click! Click!',
    link: '/ClickCounter',
    imgSrc: '../src/assets/img/clickcounter.gif',
  },
  {
    title: 'Calculator',
    subtitle: 'Calculate! Calculate! Calculate!',
    link: '/Calculator',
    imgSrc: '../src/assets/img/calculator.gif',
  },
  {
    title: 'To Do List',
    subtitle: 'Work! Work! Work!',
    link: '/TodoList',
    imgSrc: '../src/assets/img/todolist.gif',
  },
  {
    title: 'Quote Generator',
    subtitle: 'Get inspired!',
    link: '/QuotesGenerator',
    imgSrc: '../src/assets/img/qg.gif',
  },
  {
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Take notes!',
    link: '/Notes',
    imgSrc: '../src/assets/img/note.gif',
  },
];

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <IonPage className="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="home-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar
          value={searchTerm}
          onIonInput={(e) => setSearchTerm(e.target.value ?? '')}
          className="searchbar"
        />
        <IonGrid className="card-grid">
          <IonRow>
            {cardData
              .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((card, index) => (
                <IonCol size="13" size-md="3" size-lg="5" key={index}>
                  <IonCard  routerLink={card.link} routerDirection="forward" className="card-body">
                    <img alt={card.title} src={card.imgSrc} />
                    <IonCardHeader className="card-header">
                      <IonCardTitle className="home-card-title">{card.title}</IonCardTitle>
                      <IonCardSubtitle className="home-card-subtitle">{card.subtitle}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                     
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
