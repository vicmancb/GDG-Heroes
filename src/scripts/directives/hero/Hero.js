
export default class Hero {

    constructor(){
        this.restrict='EA';
        this.templateUrl = './scripts/directives/hero/hero.html';
        this.scope = {
            name : '=',
            picture : '=',
            height : '=',
            nickname : '=',
            number : '='
        };
    }

    link(scope, elem, attrs){
        scope.height += 'mt';
    }
}