/**
 * Created by michaelbyrne on 10/27/16.
 */
function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var list = [];

    service.getMenuItems = function () {
        var promise = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
        });
        var new_promise = promise.then(function(response){
            var items = response.data.menu_items;
            for (var i = 0;i<items.length; i++){
                var item_name = items[i].name.toLowerCase();
                list.push(item_name);
            }
            return list;
        });
        return new_promise;
    };
    
    service.getMatchedMenuItems = function(searchTerm){
        var promise = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
        });
        var new_promise = promise.then(function(response){
            var list = [];
            var items = response.data.menu_items;
            var term = searchTerm.toLowerCase();
            for (var i = 0;i<items.length; i++){
                var item_name = items[i].name.toLowerCase();
                //console.log(item_name);
                if (items[i].name.toLowerCase().indexOf(term) != -1){
                    list.push(items[i]);
                    //console.log(item_name);
                }
            }
            return list;
        });
        return new_promise;
    };

}