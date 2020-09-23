import { Icon } from "ionicons/dist/types/components/icon/icon";

export function toast(message: string, ico: string,conf: string, duration=2000) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = duration;
    toast.buttons = [{
        side: 'start',
        icon: ico
        }
    ];
    toast.color= conf
  
    document.body.appendChild(toast);
    return toast.present();
  }