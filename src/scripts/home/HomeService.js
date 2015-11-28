
import SuperHero from '../model/Superhero.js';

export default class HomeService {

    /*
     La siguiente anotacion será procesada por ngAnnotate,
     para generar las dependencias para archivos minificados
     */

    /*@ngInject;*/
    constructor($q) {
        this._$q = $q;
    }

    getHeroes() {
        let HeroesList = [];

        HeroesList.push(new SuperHero(
            'Iron Man',
            'Anthony Stark',
            6.1,
            'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg'
        ));

        HeroesList.push(new SuperHero(
            'Spider-Man',
            'Peter Parker',
            5.1,
            'http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg'
        ));

        HeroesList.push(new SuperHero(
            'Wolverine',
            'James Howlett',
            5.3,
            'http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg'
        ));

        HeroesList.push(new SuperHero(
            'Hulk',
            'Robert Bruce ',
            5.9,
            'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg'
        ));

        HeroesList.push(new SuperHero(
            'Thor',
            'Thor Odinson',
            6.6,
            'http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg'
        ));

        HeroesList.push(new SuperHero(
            'COLOSSUS',
            ' Piotr Rasputin',
            6,
            'http://x.annihil.us/u/prod/marvel/i/mg/6/e0/51127cf4b996f/standard_xlarge.jpg'
        ));

        HeroesList.push(new SuperHero(
            'Storm',
            'Ororo Munroe',
            5.11,
            'http://x.annihil.us/u/prod/marvel/i/mg/c/c0/537bc5db7c77d/standard_xlarge.jpg'
        ));

        HeroesList.push(new SuperHero(
            'Gambit',
            'Remy Etienne ',
            6.1,
            'http://i.annihil.us/u/prod/marvel/i/mg/9/40/537baad144c79/standard_xlarge.jpg'
        ));

        HeroesList.push(new SuperHero(
            'Silver Surfer',
            'Norrin Radd',
            6.4
        ));

        return this._$q.when(HeroesList);
    }
}