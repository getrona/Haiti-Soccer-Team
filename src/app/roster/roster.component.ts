import { Component } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent  {

  constructor(private router: Router){}

  players: Player[] = [
    new Player("Getro Naissance", 10, "defense", "Usually starts in the second Half", 5),
    new Player("Getro Naissance", 9, "striker", "Usually starts in the second Half", 3),
    new Player("Getro Naissance", 7, "offense", "Usually starts in the second Half", 2),
    new Player("Getro Naissance", 5, "mid-field", "Usually starts in the second Half", 1)
  ];

  goToDetailPage(clickedAlbum: Player) {
   this.router.navigate(['players', clickedAlbum.id]);
 };
}
