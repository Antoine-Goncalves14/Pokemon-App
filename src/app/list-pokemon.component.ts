import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Pokemon } from './pokemon.interface';
import { POKEMONS } from './mock-pokemon';

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
    pokemons: Pokemon[];

    constructor(
        private router: Router
    ) {}

    ngOnInit () {
        this.pokemons = POKEMONS;
    }

    selectPokemon (pokemon: Pokemon) {
        console.log('Vous avez cliqué sur ' + pokemon.name);

        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}