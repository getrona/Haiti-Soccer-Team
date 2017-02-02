import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], desire) {
    var output: Player[] = [];
   if(desire === "striker") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].position.toLowerCase() === "striker") {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desire === "goalie") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].position.toLowerCase() === "goalie") {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desire === "midfielder") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].position.toLowerCase() === "midfielder") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (desire === "defender") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].position.toLowerCase() === "defender") {
            output.push(input[i]);
          }
        }
     return output;
   } else {
     return input;
   }
 }
}
