import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css',
})
export class DbzListComponent {
  
  characterList: Character[] = [];


  constructor(public dbzService:DbzService) {
    this.characterList=this.dbzService.characters;
  }
  onDeleteCharacter(index: string): void {
    this.dbzService.inDelete(index)
  }
}
