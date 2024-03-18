import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrl: './dbz-add-character.component.css',
})
export class DbzAddCharacterComponent {
 
  public character: Character = {
    name: '',
    power: 0,
  };
  constructor(public dbzService:DbzService){

  }
  agregar() {
    console.log(this.character);
    if (this.character.name.length === 0) return;
  this.dbzService.inNewCharacter(this.character);
    this.character = { name: '', power: 0 };
  }

}
