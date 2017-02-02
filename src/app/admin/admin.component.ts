import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})
export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService ) { }

  ngOnInit() {
  }
  submitForm(name: string, jersey: number, position: string, details: string) {
    var newPlayer: Player = new Player(name, jersey, position, details);
    this.playerService.addPlayer(newPlayer);
}
}
