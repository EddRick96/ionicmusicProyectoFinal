import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonCard, IonCardContent, IonItem } from '@ionic/react';

type MyModalProps = {
  closeAction: Function;
}

class MenuHome extends React.Component<MyModalProps>{
  render (){
    return (
      <IonCard>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Ingresa a tu aplicación</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => this.props.closeAction()}>
                <IonIcon name="close" slot="icon-only"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonCardContent className="ion-padding">
          <IonItem>
            <IonButton routerLink="/iniciar-sesion" onClick={() => this.props.closeAction()}>Iniciar sesión</IonButton>
          </IonItem>
          <IonItem>
            <IonButton routerLink="/registrarse" onClick={() => this.props.closeAction()}>Registrarse</IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    );};
  }

  
{/*({closeAction}: { closeAction: Function }) => (
  <MenuHome closeAction={closeAction}>
  </MenuHome>)*/}

export default MenuHome;