import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';

const todolist: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {todos.map((todo, index) => (
            <IonItem key={index}>
              <IonLabel>{todo}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonLabel position="floating">New To-Do</IonLabel>
          <IonInput value={newTodo} onIonChange={(e) => setNewTodo(e.detail.value!)} />
        </IonItem>
        <IonButton expand="full" onClick={addTodo}>Add To-Do</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default todolist;
