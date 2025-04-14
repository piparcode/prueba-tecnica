import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(name: string): void {
    this.favoritesService.removeFavorite(name);
    this.loadFavorites();
  }
}
