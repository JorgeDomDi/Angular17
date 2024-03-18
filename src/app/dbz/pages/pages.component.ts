import { Component, Output, output } from '@angular/core';
import { Character } from '../interfaces/character';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

  characters:Character[]=[];
constructor(public dbzService:DbzService){
this.characters=dbzService.characters;
}

}
