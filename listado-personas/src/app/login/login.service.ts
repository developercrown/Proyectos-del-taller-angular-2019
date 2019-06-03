import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable()
export class LoginService{
    token: string;

    constructor(private router: Router){

    }

    login(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response =>{
                firebase.auth().currentUser.getIdToken().then(
                    token =>{
                        this.token = token
                        this.router.navigate(['/'])
                    }
                )
            }
        )
    }

    getIdToken(){
        return this.token
    }

    isAutenticated(){
        return this.token != null
    }

    logout(){
        firebase.auth().signOut().then(() => {
            console.log('ha salido');
            this.token = null
            this.router.navigate(['login'])
        }).catch((err)=>{
            console.log("error logout", err);
        })
    }
}