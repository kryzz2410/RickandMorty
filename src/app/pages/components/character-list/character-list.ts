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

  constructor(private characterService: CharacterServices) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.isLoading = true;
    this.characterService
      .getCharacters(this.pageNumber)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          this.characters = response;
          this.pageNumber++;
        },
        error: (err) => console.error('Error en la petición:', err),
      });
  }

  prevPage(): void {
    if (this.pageNumber <= 2) return;
    this.pageNumber -= 2; // retrocede antes del next automático
    this.getCharacters();
  }
}
