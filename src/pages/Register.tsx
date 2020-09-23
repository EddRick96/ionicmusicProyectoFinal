import React,{useState} from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonInput, IonButton, IonText, IonButtons, IonList, IonItem, IonIcon, IonLoading} from '@ionic/react';
import {headsetOutline} from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { toast } from '../toast';
import {registerUser} from '../firebaseConfig';

//import './ExploreContainer.css';

interface ContainerProps { }

const Register: React.FC<ContainerProps> = () => {

  const [busy, setBusy] = useState<boolean>(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  function register(){
  {/*console.log(username ,password, cpassword)*/}
    setBusy(true)
  // validation
    if(password !== cpassword){
        return toast('Contraseña no coincide.','close-circle', 'danger')
    }
    if(username.trim() === '' || password === ''){
      return toast('Correo y contraseña son requeridos.','help-circle','alert')
    }

    const res = registerUser(username, password)
    if(res){
      toast('¡Registro satisfactorio!','chechmark-circle','light')
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
            <IonCardTitle>Registrate</IonCardTitle>
          </IonCardHeader>
          <IonLoading message="Registo en progreso..." duration={1000} isOpen={busy}/>
          <IonCardContent className="ion-padding">
            ¡Ven y disfruta de la mejor música y tus playlist!
          </IonCardContent>
          <IonCardContent className="ion-padding">
            <IonList>
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
                <IonItem>
                    <IonInput 
                    type="password" 
                    placeholder="Confirmar contraseña"
                    onIonChange={(e:any) => setCPassword(e.target.value)}
                    />
                </IonItem>
            </IonList>
            <IonButton 
            
            onClick={register} 
            color="primary">
              Registrarse
            </IonButton>
            <br/>
            <p>
              ¿Ya tienes una cuenta? <Link to="/iniciar-sesion">Iniciar Sesión</Link>
            </p>
          </IonCardContent>
            
        </IonCard>
    </div>
  );
};

export default Register;