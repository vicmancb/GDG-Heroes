
/*
 Este controlador podría también usarse como function en lugar de class,
 pero es más común usarlo como function cuando el controlador interactua
 directamente con el $scope.
 */

export default  class HomeController {
    /*@ngInject;*/
    constructor(HomeService) {
        this.HomeService = HomeService;
        this.getHeroes();
    }

    getHeroes() {
        var self = this;
        this.HomeService.getHeroes()
            .then(response => {
                response.map(function(hero){
                    hero._height = self.foot2Metre(hero._height);
                });
                this.heroesList = response;
            });
    }

    foot2Metre(foot) {
        let metre = foot * 0.3048;
        return metre.toFixed(2);
    }
}