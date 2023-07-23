import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemonName: string = '';
  pokemon: PokemonData;

  constructor(private service: PokemonService) {
    this.pokemon = {
      name: '',
      id: 0,
      sprites: { front_default: '' },
      types: [],
    };
  }

  ngOnInit(): void {
    this.pokemonName = 'pikachu';
    this.getPokemon();
  }

  getPokemon(): void {
    this.service.getPokemon(this.pokemonName).subscribe({
      next: (res) => {
        this.pokemon = {
          name: res.name,
          id: res.id,
          sprites: res.sprites,
          types: res.types,
        };
        console.log(this.pokemon);
      },
      error: (err) => console.log(err),
    });
  }
}
