/**
 * Created by michaelbyrne on 10/27/16.
 */


(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItemsDirective);
    

    MenuSearchService.$inject=['$http', 'ApiBasePath'];
    NarrowItDownController.$inject = ['MenuSearchService'];

})();