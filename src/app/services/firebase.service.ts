import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getMessages(){
    return this.db.collection('/messages').valueChanges()
  }

  createMessage(formValue){
    console.log('formValue: ', formValue);
    return this.db.collection('messages').add({
      fullName: formValue.fullName,
      message: formValue.message,
      email: formValue.email,
      subject:formValue.subject
    });
    
  }
}