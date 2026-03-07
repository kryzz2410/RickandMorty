import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterServices {

  constructor(private http: HttpClient) { }

getCharacters(page: number): Observable<Characters> {
  return this.http.get<Characters>(`https://rickandmortyapi.com/api/character?page=${page}`);
}
}