import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { 
      id:uuid(),name: 'Krillin', power: 1000 },
    {
      
      id:uuid(),name: 'Goku',
      power: 9500,
    },
    { 
      id:uuid(),name: 'Trunk', power: 10 },
    { 
      id:uuid(),name: 'Vegeta', power: 7500 },
  ];

 
  constructor() {}


  inNewCharacter(character: Character): void {

    console.log('Main Page');
    console.log(character);
    const newCharacter:Character={
      id:uuid(),
      name:character.name,
      power:character.power
    }
    this.characters.push(newCharacter)
  }
  inDelete(id:string){
    // this.characters.splice(index,1)
    this.characters=this.characters.filter(character=>character.id!==id);
  }
}
