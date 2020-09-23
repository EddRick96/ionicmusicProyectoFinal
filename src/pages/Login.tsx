import React, {useState} from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonButton, IonText, IonButtons, IonList, IonItem, IonIcon, IonLoading} from '@ionic/react';
import {headsetOutline} from 'ionicons/icons';
import { Link } from 'react-router-dom';
//import './ExploreContainer.css';
import {loginUser} from '../firebaseConfig';
import { toast } from '../toast';
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';

interface ContainerProps { }

const Login: React.FC<ContainerProps> = () => {

  const [busy, setBusy] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login(){

    setBusy(true)

    const res: any = await loginUser(username,password)
    {/*console.log(`${res ? 'Ingreso satisfactorio' : 'Ingreso fallido'}`)*/}
    if(res){
      dispatch(setUserState(res.email))
      toast('¡Conexión satisfactoria!','checkmark-circle','success')
    }
    
    setBusy(false)
  }



  return (
    <div className="container">
      <IonCard color="light">
          <IonCardHeader>
            <IonCardSubtitle>
              <IonIcon icon={headsetOutline}></IonIcon>
              -
              <Link to="/">MusicApp</Link>
            </IonCardSubtitle>
            <IonCardTitle>Inicio Sesión</IonCardTitle>
          </IonCardHeader>
          <IonLoading message="Espere, por favor..." duration={1000} isOpen={busy}/>
          <IonCardContent className="ion-padding">
            ¡Ven y disfruta de la mejor música y tus playlist!
          </IonCardContent>
          <IonCardContent className="ion-padding">
            <IonList >
                <IonItem>
                    <IonInput 
                    type="email" 
                    placeholder="Correo o Nombre de usuario" 
                    onIonChange={(e:any) => setUsername(e.target.value)}
                    />
                </IonItem>
                <IonItem>
                    <IonInput 
                    type="password" 
                    placeholder="Contraseña"
                    onIonChange={(e:any) => setPassword(e.target.value)}
                    />
                </IonItem>
            </IonList>
            <IonButton
            onClick={login} 
            color="primary">
              Entrar
            </IonButton>
            <br/>
            <p>
              ¿Nuevo aquí...? <Link to="/registrarse">Registrate</Link>
            </p>
          </IonCardContent>
          
        </IonCard>
    </div>
  );
};

export default Login;