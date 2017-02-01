import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { PLAYERS } from './mock-players';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: number) {
    for(var i = 0; i <= PLAYERS.length - 1; i++) {
      if (PLAYERS[i].id === playerId) {
        return PLAYERS[i];
      }
    }
  }
}
