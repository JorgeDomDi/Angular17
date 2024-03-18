import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { DbzAddCharacterComponent } from './components/dbz-add-character/dbz-add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    DbzListComponent,
    DbzAddCharacterComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],exports:[PagesComponent]
})
export class DbzModule { }
