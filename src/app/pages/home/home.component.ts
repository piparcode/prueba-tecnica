import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokemonComponent ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router) {}
  
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['']);
  }

}


