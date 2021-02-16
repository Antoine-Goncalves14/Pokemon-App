import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon.interface';
import { POKEMONS } from './mock-pokemon';

@Component({
    selector: 'pokemon-app',
    templateUrl: './app/app.component.html',
})
export class AppComponent implements OnInit {
    private pokemons: Pokemon[];
    private title: string = 'Pokémons';

    ngOnInit () {
        this.pokemons = POKEMONS;
    }

    selectPokemon (pokemon: Pokemon) {
        alert('Vous avez cliqué sur ' + pokemon.name);
    }
}