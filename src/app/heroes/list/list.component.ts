import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroesNames:string[]=["Spiderman","Hulk","Thor","Ironman","SheHulk"]
public deletedHero?:string;

removeLastHero():void{
  this.deletedHero=this.heroesNames.pop()
console.log(this.deletedHero);

}

}
