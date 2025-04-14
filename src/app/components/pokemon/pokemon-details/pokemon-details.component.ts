import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.pokemonService.getPokemonDetails(id).subscribe((data) => {
      this.pokemon = data;
    });
  }
}
