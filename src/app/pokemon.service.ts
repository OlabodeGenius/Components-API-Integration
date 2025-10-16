import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10'; // Example API

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  searchPokemon(term: string): Observable<any> {
    if (!term.trim()) {
      return this.getPokemonList();
    }
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
  }
}
