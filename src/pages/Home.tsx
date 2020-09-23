import { IonContent, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonModal, IonIcon } from '@ionic/react';


import React , {useState} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import MenuHome from '../components/menuHome/MenuHome';
import {albumsOutline} from 'ionicons/icons';
import './Home.css';
import { Link } from 'react-router-dom';
import { useWatchPosition } from '@capacitor-community/react-hooks/geolocation';


const Home: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  //const { currentPosition, startWatch, clearWatch } = useWatchPosition();

  async function closeModal() {
    setShowModal(false);
  }

  return (
    <IonPage>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>MusicApp</IonTitle>
            <IonModal isOpen={showModal}
                      onDidDismiss={()=>setShowModal(false)}>
              <MenuHome closeAction={closeModal}/>
            </IonModal>
          
          <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)}>
                <IonIcon icon={albumsOutline}/>
            </IonButton>
            <IonButton routerLink={"/iniciar-sesion"}>
              Iniciar sesión
            </IonButton>
            <Link to={"/registrarse"}>Registrarse</Link>
          </IonButtons>
         
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer/>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
