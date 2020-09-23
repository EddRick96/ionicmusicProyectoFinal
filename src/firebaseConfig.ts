import { resolve } from 'dns';
import * as firebase from 'firebase';
import { toast } from './toast';

const config = {
    apiKey: "AIzaSyC8dN2x810CmopBqok1O4c2RKGqxQKXPRg",
    authDomain: "finalapimusic.firebaseapp.com",
    databaseURL: "https://finalapimusic.firebaseio.com",
    projectId: "finalapimusic",
    storageBucket: "finalapimusic.appspot.com",
    messagingSenderId: "588964717468",
    appId: "1:588964717468:web:5d845749cae910df909e59",
    measurementId: "G-8N986ETSFV"
}

firebase.initializeApp(config)

export function getCurrentUser(){
    return new Promise((resolve, reject)=> {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
            if(user){
                resolve(user)
                
            }else{
                resolve(null)
            }
            unsubscribe()
        })
    })
    
}

export function logoutUser() {
    return firebase.auth().signOut()
}

export async function loginUser(username:string, password: string) {
    
    {/*const email = `${username}@codedamn.com`*/}
    
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(username,password)
        console.log(res)
        return res 
    }catch (error){
        {/*console.log(error)*/}
        console.log(error)
        toast(error.messagingSenderId,'help-circle','light')
        return false
    }
    
    // authenticate with firebase
    // if present, show dashboard
    // if not, show error
}

export async function registerUser(username:string, password:string) {

{/*const email = `${username}@condedamn.com`*/}

    try{
        const res = await firebase.auth().createUserWithEmailAndPassword
        (username,password)
        console.log(res)
        return true
    }catch(error){
    {/*console.log(error)*/}
        toast(error.messagingSenderId,'help-circle','light')
        return false
    }
}