import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon.interface';
import { POKEMONS } from './mock-pokemon';

@Component({
    selector: 'pokemon-app',
    template: `<h1>Liste de pokémons</h1>`,
})
export class AppComponent implements OnInit {
    private pokemons: Pokemon[];

    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    selectPokemon (pokemon: Pokemon) {
        alert('Vous avez cliqué sur ' + pokemon.name);
    }
}