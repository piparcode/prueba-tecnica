import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { FavoritesService } from '../../services/favorite.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 3;

  constructor(private pokemonService: PokemonService, private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList(): void {
    this.pokemonService
      .getPokemonList(this.limit, this.offset)
      .subscribe((data) => {
        this.pokemons = data.results;
      });
  }

  addToFavorites(pokemon: any): void {
    const isAlreadyFavorite = this.favoritesService.getFavorites().some(fav => fav.name === pokemon.name);
  
    if (isAlreadyFavorite) {
      alert(`${pokemon.name} ya está en favoritos.`);
      return;
    }
  
    this.favoritesService.addFavorite(pokemon);
    alert(`${pokemon.name} añadido a favoritos.`);
  }

  isFavorite(pokemon: any): boolean {
    return this.favoritesService.getFavorites().some(fav => fav.name === pokemon.name);
  }

  loadMore(): void {
    this.offset += this.limit;
    this.loadPokemonList();
  }
}
