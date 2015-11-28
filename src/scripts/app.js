
import HomeController from './home/HomeController';
import HomeService from './home/HomeService';
import {OrdinalFilter} from './filters/OrdinalFilter';
import Hero from './directives/hero/Hero';

angular.module('GDG-SuperHero', [])
    .controller('HomeController', HomeController)
    .service('HomeService', HomeService)
    .filter('ordinal', OrdinalFilter)
    .directive('hero', () => new Hero());