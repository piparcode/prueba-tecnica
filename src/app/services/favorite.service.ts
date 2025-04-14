import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private storageKey = 'favorites';

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addFavorite(pokemon: any): void {
    const favorites = this.getFavorites();
    favorites.push(pokemon);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  removeFavorite(name: string): void {
    const favorites = this.getFavorites().filter(p => p.name !== name);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
}
