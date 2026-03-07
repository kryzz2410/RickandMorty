import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterServices } from '../../../core/services/CharacterServices';
import { finalize } from 'rxjs';
import { Characters } from '../../../core/models/characters';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit { 

  pageNumber: number = 1;
isLoading: boolean = true;
characters: Characters | undefined;

  constructor(private characterService: CharacterServices) { }
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() : void  {
    this.characterService
    .getCharacters(this.pageNumber).pipe(
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      (response) => {
      this.characters = response 
      this.pageNumber++;
      },
      error => {
        console.log('Error en la peticion: ', error);
      }
    )
  }

}
 