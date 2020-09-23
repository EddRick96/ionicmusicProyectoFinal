import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/react';
import { useSelector } from 'react-redux';
import {logoutUser} from '../firebaseConfig';

const Dashboard: React.FC= () => {

    const username = useSelector((state: any) => state.user.username)

  return (
    <div className="container">
      <IonPage color="light">
          <IonHeader>
            <IonToolbar>
                <IonTitle>Dashboard</IonTitle>
                {/*<Link to="/inicio">MusicApp</Link>*/}
            </IonToolbar>
            
          </IonHeader>
          <IonContent className="ion-padding">
                <p>
                    Hola, {username}.
                </p>
                <IonButton onClick={logoutUser}>Cerrar sesión</IonButton>
          </IonContent>          
        </IonPage>
    </div>
  );
};

export default Dashboard;