import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private angularFireDB: AngularFireDatabase) { }

  public getAllPlayers(): Observable<any> {
    return this.angularFireDB.list('players').valueChanges();
  }

}
